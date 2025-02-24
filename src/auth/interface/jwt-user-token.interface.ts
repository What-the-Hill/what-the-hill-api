export interface JwtUserToken {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
}
