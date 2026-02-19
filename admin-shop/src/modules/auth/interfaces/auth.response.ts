import type { User } from './user.interface';

export interface AuthResponse {
  user: Userr;
  token: string;
}
