"use client"

import useLocalStorage from '@/app/(hooks)/useLocalStorage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Routine } from '../../domain/entities';

interface RoutinesContextData {
  routinesList: Routine[];
  sessionWorkout: any;
  addRoutine: (routine: Routine) => void;
  addWorkoutSession: (routineId: string, workoutSession: any) => void;
  // Add other actions as needed
}

// Create the context
export const RoutinesContext = createContext<RoutinesContextData>({
    routinesList: [],
    sessionWorkout: {},
    addRoutine: () => {},
    addWorkoutSession: () => {},
});

const fitnessAppInitialState = { 
  routinesList: [
    {
      id: "123123123",
      name: "Chest day",
      exercisesList: [
        {
          id: "123123123",
          name: "Standard bench press",
          estimatedTime: 1,
          sets: 5,
        },
        {
          id: "123123123",
          name: "Incline bench press",
          estimatedTime: 1,
          sets: 7,
        },
        {
          id: "123123123",
          name: "Pecs flys",
          estimatedTime: 1,
          sets: 5,
        },
        {
          id: "123123123",
          name: "Pecs extensions",
          estimatedTime: 1,
          sets: 7,
        },
      ],
    },
    {
      id: "123123123",
      name: "Legs day",
      exercisesList: [
        {
          id: "123123123",
          name: "Squats",
          estimatedTime: 1,
          sets: 5,
        },
        {
          id: "123123123",
          name: "Deadlift",
          estimatedTime: 1,
          sets: 7,
        },
        {
          id: "123123123",
          name: "Leg press",
          estimatedTime: 1,
          sets: 5,
        },
        {
          id: "123123123",
          name: "Calf raises",
          estimatedTime: 1,
          sets: 7,
        },
      ],
    },
  ],
  workoutSession: [{
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    routineId: "c1024c29-cca3-48c2-87ea-408946301c44",
    exercises: [
      {
        id: crypto.randomUUID(),
        name: "Standard bench press",
        reps: 10,
        weight: 100,
        weightUnit: "kg",
      },
      {
        id: crypto.randomUUID(),
        name: "Incline bench press",
        reps: 10,
        weight: 100,
        weightUnit: "kg",
      },
      {
        id: crypto.randomUUID(),
        name: "Pecs flys",
        reps: 10,
        weight: 100,
        weightUnit: "kg",
      },
      {
        id: crypto.randomUUID(),
        name: "Pecs extensions",
        reps: 10,
        weight: 100,
        weightUnit: "kg",
      },
    ],
  }, {
    id: crypto.randomUUID(),
    date: "2024-02-01T14:22:30.387Z",
    routineId: "c1024c29-cca3-48c2-87ea-408946301c44",
    exercises: [
      {
        id: crypto.randomUUID(),
        name: "Standard bench press",
        reps: 10,
        weight: 100,
        weightUnit: "kg",
      },
      {
        id: crypto.randomUUID(),
        name: "Incline bench press",
        reps: 10,
        weight: 100,
        weightUnit: "kg",
      },
      {
        id: crypto.randomUUID(),
        name: "Pecs flys",
        reps: 10,
        weight: 100,
        weightUnit: "kg",
      },
      {
        id: crypto.randomUUID(),
        name: "Pecs extensions",
        reps: 10,
        weight: 100,
        weightUnit: "kg",
      },
    ],
  }],
  recipesList: []
}

// Create a provider component
export const RoutinesProvider: React.FC<{children: any}> = ({ children }) => {
  const [routinesList, setRoutinesList] = useState<Routine[]>([]);
  const [sessionWorkout, setSessionWorkout] = useState<any>({});

  const {
    storedValue,
    setValue
} = useLocalStorage("fitness-app", fitnessAppInitialState)

  useEffect(() => {
    setRoutinesList(storedValue.routinesList ?? []);
    setSessionWorkout(storedValue.workoutSession ?? {});
  }, []);

  const addRoutine = (routine: Routine) => {
    setRoutinesList((prevRoutines) => [...prevRoutines, routine]);
    setValue({
      ...storedValue,
      routinesList: [...storedValue.routinesList, routine]
    })
  };

  const addWorkoutSession = (routineId: string, workoutSession: any) => {
    setSessionWorkout(workoutSession);
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
      sessionWorkout 
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