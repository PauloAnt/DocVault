import api from './api';

export interface RegisterDTO {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export const register = (data: Omit<RegisterDTO, 'confirmPassword'>) =>
  api.post('/auth/register', data).then(res => res.data);

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponse {
    accessToken: string;
}

export const login = (data: LoginDTO) =>
  api.post<{ token: string }>('/auth/login', data).then(res => res.data);
