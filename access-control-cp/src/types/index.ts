export interface Usuario {
  id: number;
  nome: string;
  nomeUsuario: string;
  email: string;
}

export interface LoginFormData {
  nomeUsuario: string;
  email: string;
}

export interface CadastroFormData {
  nome: string;
  nomeUsuario: string;
  email: string;
}
