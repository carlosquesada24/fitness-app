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
  addRoutine: () => { },
  addWorkoutSession: () => { },
});

// Create a provider component
export const RoutinesProvider: React.FC<{ children: any, params: any }> = ({ children, params }) => {
  const [routinesList, setRoutinesList] = useState<Routine[]>([]);
  const [workoutSession, setworkoutSession] = useState<any>({});
  const [currentRoutine, setCurrentRoutine] = useState<Routine | null>(null);

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
  
    const newWorkoutSessionLog = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      exercises: [
        // Add your new exercises here
        {
          id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
          name: "Standard push-ups",
          sets: [{
            number: 1,
            reps: 12,
            weight: 777,
            weightUnit: "kg",
          }, {
            number: 2,
            reps: 12,
            weight: 777,
            weightUnit: "kg",
          }]
        },
        {
          id: "bf48666a-6686-4457-bc57-f619e70089ec",
          name: "Diamond push-ups",
          sets: [{
            number: 1,
            reps: 15,
            weight: 777,
            weightUnit: "kg",
          }, {
            number: 2,
            reps: 15,
            weight: 777,
            weightUnit: "kg",
          }]
        },
      ],
    };

    const newRoutinesList = routinesList.map(routine => 
      routine.id === routineId 
        ? { 
            ...routine, 
            workoutSessionLogsList: [
              ...routine.workoutSessionLogsList, 
              newWorkoutSessionLog
            ] 
          }
        : routine  
    );

    setValue({
      ...storedValue,
      routinesList: newRoutinesList
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