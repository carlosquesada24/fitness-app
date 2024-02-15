interface RoutineTest {
    id: number;
    name: string;
    description: string;
    type: string;
    body: string;
    created_at: string;
    updated_at: string;
}

export const ROUTINE_DEFAULT_VALUE: Routine = {
    id: "",
    name: "",
    description: "",
    totalExercisesCount: 0,
    estimatedTime: 0,
    exercisesList: [],
    workoutSessionLogsList: [],
}

export interface Routine {
    id: string,
    name: string,
    description: string,
    totalExercisesCount: number,
    estimatedTime: number
    exercisesList: Exercise[]
    workoutSessionLogsList: WorkoutSessionLog[]
}

export interface Exercise {
    id: string
    name: string
    estimatedTime: number
    sets: number
}

export interface WorkoutSessionLog {
    id: string;
    date: string;
    exercises: WorkoutSessionExercise[];
}

export interface WorkoutSessionExercise {
    id: string;
    name: string;
    sets: WorkoutSessionSet[]
}

interface WorkoutSessionSet {
    number: number;
    reps: number;
    weight: number;
    weightUnit: string;
}

export interface FitnessAppContext {
    routinesList: Routine[]
    recipesList: any[]
}