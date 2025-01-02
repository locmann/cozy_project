export interface LoginSchema {
  isLoading: boolean;
  username: string;
  password: string;
  error?: string;
}

export interface UserLogin {
  username: string;
  password: string;
}
