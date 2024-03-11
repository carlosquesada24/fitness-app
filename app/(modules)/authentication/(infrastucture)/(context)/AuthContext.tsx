"use client"

import { supabase } from '@/app/(config)/supabase';
import useLocalStorage from '@/app/(hooks)/useLocalStorage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextData {
    user: any;
    signUp: (email: string, password: string) => void;
    logInWithoutPassword: (email: string) => void;
}

// Create the context
export const AuthContext = createContext<AuthContextData>({
    user: {},
    signUp: (email: string, password: string) => {},
    logInWithoutPassword: () => {}
});

// Create a provider component
export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState({});
  
  const {
    storedValue,
    setValue
  } = useLocalStorage("user", { user: {} })

  useEffect(() => {
    setUser(storedValue.user ?? {});

    loadUser()
  }, []);

  const loadUser = async () => {
    const {data: user} = await supabase.auth.getUser()

    setUser(user)
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
  

  const signOut = async () => {}

  return (
    <AuthContext.Provider value={{
      user,
      signUp,
      logInWithoutPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the RoutinesContext
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};