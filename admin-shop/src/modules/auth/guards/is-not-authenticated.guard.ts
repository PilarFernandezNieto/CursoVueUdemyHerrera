import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../storres/auth.store';
import { AuthStatus } from '../interfaces';
const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();
  console.log(authStore.authStatus);

  await authStore.checkAuthStatus();

  // 1. Si el estado es "Checking", podrías querer esperar o validar
  // 2. Si ya está autenticado, mándalo al home
  if (authStore.authStatus === AuthStatus.Authenticated) {
    return next({ name: 'home' });
  }

  // 3. Si no, que siga su camino (al login/register)
  next();
};

export default isNotAuthenticatedGuard;
