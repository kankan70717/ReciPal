import { supabase } from "../../lib/supabase";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function signUp(
  email: string,
  password: string,
  displayName: string,
  group: string,
  store: string,
  role: "admin" | "editor" | "viewer"
) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  if (data.user) {
    await db.insert(users).values({
      auth_id: data.user.id,
      displayName,
      email,
      group,
      store,
      role,
    });
  }

  return data;
}

export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}
