import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { AuthStatus, type User } from '../interfaces';
import { loginAction } from '../actions';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref('');

  const login = async (email: string, password: string) => {
    try {
      const loginResponse = await loginAction(email, password);
      if (!loginResponse.ok) {
        logout();
        return false;
      }
      user.value = loginResponse.user;
      token.value = loginResponse.token;
      authStatus.value = AuthStatus.Authenticated;
      return true;
    } catch (error) {
      console.log({ error });
      logout();
    }
  };

  const logout = () => {
    authStatus.value = AuthStatus.Unauthenticated;
    user.value = undefined;
    token.value = '';
    return false;
  };

  return {
    user,
    token,
    authStatus,

    // Getters
    userName: computed(() => user.value?.fullName),
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

    // Actions
    login,
  };
});
