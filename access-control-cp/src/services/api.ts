import type { Usuario } from '../types';

const API_BASE_URL = 'http://localhost:3001';

export const apiService = {
  async getUsuarios(): Promise<Usuario[]> {
    const response = await fetch(`${API_BASE_URL}/usuarios`);
    if (!response.ok) {
      throw new Error('Erro ao buscar usuários');
    }
    return response.json();
  },

  async createUsuario(usuario: Omit<Usuario, 'id'>): Promise<Usuario> {
    const response = await fetch(`${API_BASE_URL}/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) {
      throw new Error('Erro ao criar usuário');
    }
    return response.json();
  },

  async verificarUsuarioExistente(nomeUsuario: string, email: string): Promise<boolean> {
    const usuarios = await this.getUsuarios();
    return usuarios.some(usuario => 
      usuario.nomeUsuario === nomeUsuario || usuario.email === email
    );
  },

  async validarLogin(nomeUsuario: string, email: string): Promise<Usuario | null> {
    const usuarios = await this.getUsuarios();
    return usuarios.find(usuario => 
      usuario.nomeUsuario === nomeUsuario && usuario.email === email
    ) || null;
  }
};
