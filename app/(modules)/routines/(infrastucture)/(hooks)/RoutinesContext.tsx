"use client"

import useLocalStorage from '@/app/(hooks)/useLocalStorage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Routine } from '../../domain/entities';
import { fitnessAppContextInitialState } from '../../domain/data';

interface RoutinesContextData {
  routinesList: Routine[];
  workoutSession: any;
  addRoutine: (routine: Routine) => void;
  addWorkoutSession: (routineId: string, workoutSession: any) => void;
  // Add other actions as needed
}

// Create the context
export const RoutinesContext = createContext<RoutinesContextData>({
    routinesList: [],
    workoutSession: {},
    addRoutine: () => {},
    addWorkoutSession: () => {},
});

// Create a provider component
export const RoutinesProvider: React.FC<{children: any}> = ({ children }) => {
  const [routinesList, setRoutinesList] = useState<Routine[]>([]);
  const [workoutSession, setworkoutSession] = useState<any>({});

  const {
    storedValue,
    setValue
} = useLocalStorage("fitness-app", fitnessAppContextInitialState)

  useEffect(() => {
    setRoutinesList(storedValue.routinesList ?? []);
    setworkoutSession([]);
  }, []);

  const addRoutine = (routine: Routine) => {
    setRoutinesList((prevRoutines) => [...prevRoutines, routine]);
    setValue({
      ...storedValue,
      routinesList: [...storedValue.routinesList, routine]
    })
  };

  const addWorkoutSession = (routineId: string, workoutSession: any) => {
    setworkoutSession(workoutSession);
    setValue({
      ...storedValue,
      workoutSession: {
        id: "3123123123",
        date: new Date().toISOString(),
        exercises: [
          {
            id: "3123123123",
            name: "Standard bench press",
            reps: 10,
            weight: 100,
            weightUnit: "kg",
          },
          {
            id: "3123123123",
            name: "Incline bench press",
            reps: 10,
            weight: 100,
            weightUnit: "kg",
          },
          {
            id: "3123123123",
            name: "Pecs flys",
            reps: 10,
            weight: 100,
            weightUnit: "kg",
          },
          {
            id: "3123123123",
            name: "Pecs extensions",
            reps: 10,
            weight: 100,
            weightUnit: "kg",
          },
        ],
      },
    })
  }

  return (
    <RoutinesContext.Provider value={{ 
      routinesList, 
      addRoutine,
      addWorkoutSession, 
      workoutSession 
    }}>
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