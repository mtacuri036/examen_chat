import { Injectable } from '@angular/core';
import { supabase } from '../supabaseClient';

@Injectable({ providedIn: 'root' })
export class AvatarService {
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    return error ? null : data;
  }

  async uploadImage(userId: string, file: File) {
    const { error } = await supabase.storage
      .from('avatars')
      .upload(`${userId}/profile.png`, file, { upsert: true });
    if (error) return null;
    const { data } = supabase.storage.from('avatars').getPublicUrl(`${userId}/profile.png`);
    // Guarda la URL en la tabla profiles
    await supabase.from('profiles').update({ photoURL: data.publicUrl }).eq('id', userId);
    return data.publicUrl;
  }
}