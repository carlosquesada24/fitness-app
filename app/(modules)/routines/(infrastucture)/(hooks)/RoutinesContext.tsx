"use client"

import useLocalStorage from '@/app/(hooks)/useLocalStorage';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the shape of the context
interface Routine {
  id: string;
  name: string;
  // Add other properties as needed
}

interface RoutinesContextData {
  routinesList: Routine[];
  addRoutine: (routine: Routine) => void;
  // Add other actions as needed
}

// Create the context
const RoutinesContext = createContext<RoutinesContextData>({
    routinesList: [],
    addRoutine: () => {},
});

// Create a provider component
export const RoutinesProvider: React.FC<{children: any}> = ({ children }) => {
  const [routinesList, setRoutinesList] = useState<Routine[]>([]);

  const {
    storedValue: routinesListLocalStorage
} = useLocalStorage("routines", [])

  useEffect(() => {
    setRoutinesList(routinesListLocalStorage ?? []);
  }, []);

  const addRoutine = (routine: Routine) => {
    setRoutinesList((prevRoutines) => [...prevRoutines, routine]);
  };

  return (
    <RoutinesContext.Provider value={{ routinesList, addRoutine }}>
      {children}
    </RoutinesContext.Provider>
  );
};

// Create a custom hook to use the RoutinesContext
export const useRoutines = (): RoutinesContextData => {
  const context = useContext(RoutinesContext);
  if (!context) {
    throw new Error('useRoutines must be used within a RoutinesProvider');
  }
  return context;
};