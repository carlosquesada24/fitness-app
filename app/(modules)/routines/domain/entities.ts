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
}

export interface Exercise {
    id: string
    name: string
    estimatedTime: number
}