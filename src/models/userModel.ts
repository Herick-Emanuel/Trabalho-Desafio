export interface User {
  password: string;
  id: string;
  username: string;
  peso: number;
  senha: string;
  email: string;
  userData: {
    id: string;
    nome: string;
    email: string;
  };
  credentials: {
    username: string;
    password: string;
  };
}
