import { Injectable } from '@angular/core';
import { supabase } from '../supabaseClient';

@Injectable({ providedIn: 'root' })
export class AuthService {
  async register({ email, password, displayName, photoURL }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { displayName, photoURL }
      }
    });
    return error ? null : data.user;
  }

  async login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return error ? null : data.user;
  }

  async logout() {
    await supabase.auth.signOut();
  }
}
