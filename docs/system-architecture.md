# System architecture diagrams


# Database Schema
Frontend

Routine {
    id: string,
    name: string,
    description: string,
    totalExercisesCount: number,
    estimatedTime: number
    exercisesList: Exercise[]
    workoutSessionLogsList: WorkoutSessionLog[]
}

Exercise {
    id: string
    name: string
    estimatedTime: number
}

WorkoutSessionLog {
    id: string;
    date: string;
    exercises: WorkoutSessionExercise[];
}

WorkoutSessionExercise {
    id: string;
    name: string;
    sets: WorkoutSessionSet[]
}

WorkoutSessionSet {
    number: number;
    reps: number;
    weight: number;
    weightUnit: string;
}




Supabase credentials

fitness-app
Password: QuieroSer4stronomo2023XD

# API Documentation