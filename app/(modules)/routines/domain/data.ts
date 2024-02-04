import { Exercise, Routine } from "./entities"

export const routinesList: Routine[] = [
  {
    id: 'c1024c29-cca3-48c2-87ea-408946301c44',
    name: "Best chest for motherfuckers",
    description: "Description 1",
    totalExercisesCount: 3,
    estimatedTime: 35,
    exercisesList: [
      {
        id: "bf48666a-6686-4457-bc57-f619e70089ec",
        name: "Diamond push-ups",
        estimatedTime: 1
      },
      {
        id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
        name: "Standard push-ups",
        estimatedTime: 1
      }
    ],
    workoutSessionLogsList: [
      {
        id: "998898998",
        date: "2024-02-03T18:25:14.113Z",
        exercises: [
          {
            id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
            name: "Standard push-ups",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
          {
            id: "bf48666a-6686-4457-bc57-f619e70089ec",
        name: "Diamond push-ups",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
        ]
      }
    ]
  },
  {
    id: '6591d7b6-c474-4af7-8e39-6af946ad3f01',
    name: "Back",
    description: "Description 2",
    totalExercisesCount: 5,
    estimatedTime: 90,
    exercisesList: [
      {
        id: "8da7ff15-f1e7-43d5-affa-56da5ce972b0",
        name: "Standard pull-ups",
        estimatedTime: 1
      },
      {
        id: "7f65183c-b28b-47d1-8000-4716c59fda2c",
        name: "Deadlift",
        estimatedTime: 1
      }
    ],
    workoutSessionLogsList: [
      {
        id: "423312",
        date: "2024-02-03T18:25:14.113Z",
        exercises: [
          {
            id: "8da7ff15-f1e7-43d5-affa-56da5ce972b0",
            name: "Standard pull-ups",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
          {
            id: "7f65183c-b28b-47d1-8000-4716c59fda2c",
          name: "Deadlift",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
        ]
      }
    ]
  },
  {
    id: '0118b9ea-6bc4-413e-99d5-dec09becf464',
    name: "Arms",
    description: "Description 3",
    totalExercisesCount: 9,
    estimatedTime: 73,
    exercisesList: [
      {
        id: "f71fa536-5bb4-4c2c-9ec1-3d8075a64cfd",
        name: "Biceps curl",
        estimatedTime: 1
      },
      {
        id: "73dfaa6a-80b2-48cd-a707-3abca6e6d431",
        name: "Triceps extensions",
        estimatedTime: 1
      }
    ],
    workoutSessionLogsList: [
      {
        id: "998898998",
        date: "2024-02-03T18:25:14.113Z",
        exercises: [
          {
            id: "3123123123",
            name: "Standard bench press",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
          {
            id: "3123123123",
            name: "Incline bench press",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
          {
            id: "3123123123",
            name: "Pecs flys",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
          {
            id: "3123123123",
            name: "Pecs extensions",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          }
        ]
      }
    ]
  },
  {
    id: '006de385-db01-4f3d-b647-037e69e11a42',
    name: "Legs",
    description: "Description 4",
    totalExercisesCount: 5,
    estimatedTime: 54,
    exercisesList: [
      {
        id: "57f3d30d-20dc-41d9-aca8-1f8405286942",
        name: "Squats",
        estimatedTime: 1
      },
      {
        id: "b84c35c3-b489-4b00-8a46-e8ec8fb4c88e",
        name: "Lunges",
        estimatedTime: 1
      }
    ],
    workoutSessionLogsList: [
      {
        id: "998898998",
        date: "2024-02-03T18:25:14.113Z",
        exercises: [
          {
            id: "57f3d30d-20dc-41d9-aca8-1f8405286942",
        name: "Squats",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
          {
            id: "b84c35c3-b489-4b00-8a46-e8ec8fb4c88e",
        name: "Lunges",
            reps: 10,
            weight: 100,
            weightUnit: "kg"
          },
         
        ]
      }
    ]
  },
]

export const routine = {
  id: 'c1024c29-cca3-48c2-87ea-408946301c44',
  name: "Best chest for motherfuckers",
  description: "Description 1",
  totalExercisesCount: 3,
  estimatedTime: 35,
  exercisesList: [
    {
      id: "bf48666a-6686-4457-bc57-f619e70089ec",
      name: "Diamond push-ups",
      estimatedTime: 1
    },
    {
      id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
      name: "Standard push-ups",
      estimatedTime: 1
    }
  ]
}

export const exercisesList: Exercise[] = [
  {
    id: "8da7ff15-f1e7-43d5-affa-56da5ce972b0",
    name: "Standard pull-ups",
    estimatedTime: 1
  },
  {
    id: "7f65183c-b28b-47d1-8000-4716c59fda2c",
    name: "Deadlift",
    estimatedTime: 1
  },
  {
    id: "f71fa536-5bb4-4c2c-9ec1-3d8075a64cfd",
    name: "Biceps curl",
    estimatedTime: 1
  },
  {
    id: "73dfaa6a-80b2-48cd-a707-3abca6e6d431",
    name: "Triceps extensions",
    estimatedTime: 1
  },
  {
    id: "57f3d30d-20dc-41d9-aca8-1f8405286942",
    name: "Squats",
    estimatedTime: 1
  },
  {
    id: "b84c35c3-b489-4b00-8a46-e8ec8fb4c88e",
    name: "Lunges",
    estimatedTime: 1
  },
  {
    id: "bf48666a-6686-4457-bc57-f619e70089ec",
    name: "Diamond push-ups",
    estimatedTime: 1
  },
  {
    id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
    name: "Standard push-ups",
    estimatedTime: 1
  }
]

export const fitnessAppContextInitialState = { 
  routinesList: [
    {
      id: 'c1024c29-cca3-48c2-87ea-408946301c44',
      name: "Best chest for motherfuckers",
      description: "Description 1",
      totalExercisesCount: 3,
      estimatedTime: 35,
      exercisesList: [
        {
          id: "bf48666a-6686-4457-bc57-f619e70089ec",
          name: "Diamond push-ups",
          estimatedTime: 1
        },
        {
          id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
          name: "Standard push-ups",
          estimatedTime: 1
        }
      ]
    },
    {
      id: '6591d7b6-c474-4af7-8e39-6af946ad3f01',
      name: "Back",
      description: "Description 2",
      totalExercisesCount: 5,
      estimatedTime: 90,
      exercisesList: [
        {
          id: "8da7ff15-f1e7-43d5-affa-56da5ce972b0",
          name: "Standard pull-ups",
          estimatedTime: 1
        },
        {
          id: "7f65183c-b28b-47d1-8000-4716c59fda2c",
          name: "Deadlift",
          estimatedTime: 1
        }
      ]
    },
    {
      id: '0118b9ea-6bc4-413e-99d5-dec09becf464',
      name: "Arms",
      description: "Description 3",
      totalExercisesCount: 9,
      estimatedTime: 73,
      exercisesList: [
        {
          id: "f71fa536-5bb4-4c2c-9ec1-3d8075a64cfd",
          name: "Biceps curl",
          estimatedTime: 1
        },
        {
          id: "73dfaa6a-80b2-48cd-a707-3abca6e6d431",
          name: "Triceps extensions",
          estimatedTime: 1
        }
      ]
    },
    {
      id: '006de385-db01-4f3d-b647-037e69e11a42',
      name: "Legs",
      description: "Description 4",
      totalExercisesCount: 5,
      estimatedTime: 54,
      exercisesList: [
        {
          id: "57f3d30d-20dc-41d9-aca8-1f8405286942",
          name: "Squats",
          estimatedTime: 1
        },
        {
          id: "b84c35c3-b489-4b00-8a46-e8ec8fb4c88e",
          name: "Lunges",
          estimatedTime: 1
        }
      ]
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