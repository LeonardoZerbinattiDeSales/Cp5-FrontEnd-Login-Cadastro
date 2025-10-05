import type { Usuario } from '../types';

const USER_KEY = 'loggedUser';

export const authService = {
  login(usuario: Usuario): void {
    localStorage.setItem(USER_KEY, JSON.stringify(usuario));
  },

  logout(): void {
    localStorage.removeItem(USER_KEY);
  },

  getLoggedUser(): Usuario | null {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return this.getLoggedUser() !== null;
  }
};
