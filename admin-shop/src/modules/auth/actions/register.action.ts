import { tesloApi } from '@/api/tesloApi';
import type { AuthResponse } from '../interfaces';

interface RegisterError {
  ok: false;
  message: string;
}
interface RegisterSuccess {
  ok: true;
  user: User;
  token: string;
}

export const registerAction = async (
  fullName: string,
  email: string,
  password: string,
): Promise<RegisterError | RegisterSuccess> => {
  try {
    console.log('en register action', { fullName, email, password });
    const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
      fullName,
      email,
      password,
    });

    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    console.log('Desde Register Action', error.response.message);
  }
};
