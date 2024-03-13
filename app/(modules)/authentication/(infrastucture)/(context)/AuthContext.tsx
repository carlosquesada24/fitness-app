"use client"

import { supabase } from '@/app/(config)/supabase';
import useLocalStorage from '@/app/(hooks)/useLocalStorage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextData {
    user: any;
    isLogged: boolean
    signUp: (email: string, password: string) => void;
    logInWithoutPassword: (email: string) => void;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({
    user: {},
    isLogged: false,
    signUp: (email: string, password: string) => {},
    logInWithoutPassword: () => {},
    signOut: () => {}
});

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isLogged, setIsLogged] = useState(false);

  const {
    storedValue,
    setValue
  } = useLocalStorage("user", { user: null })

  useEffect(() => {
    setUser(storedValue.user ?? null);

    loadUser()
  }, []);

  const loadUser = async () => {
    const {data: {user}} = await supabase.auth.getUser()

    console.log(user, "LOAD USER")

    setUser(user)
    setIsLogged(user !== null)
  }

  const signUp = async (email: string, password: string) => 
    await supabase.auth.signUp({
        email,
        password
      })
  

  const logInWithoutPassword = async (email: string) => 
    await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'https://localhost:3000/routines'
        }
      })
  

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLogged,
      signUp,
      logInWithoutPassword,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};