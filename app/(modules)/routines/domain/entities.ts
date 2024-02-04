interface RoutineTest {
    id: number;
    name: string;
    description: string;
    type: string;
    body: string;
    created_at: string;
    updated_at: string;
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
}

export interface WorkoutSessionLog {
    id: string;
    date: string;
    exercises: WorkoutSessionExercise[];
}

export interface WorkoutSessionExercise {
    id: string;
    name: string;
    reps: number;
    weight: number;
    weightUnit: string;
}
