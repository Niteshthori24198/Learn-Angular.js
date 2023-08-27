import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  constructor() {}

  generateToken(tokenLength: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
    return token;
  }
  setToken(token: string,user:any): void {
     const tokenData = {
        token: token,
        user: user
     }
      localStorage.setItem('token', JSON.stringify(tokenData));
  }
}
