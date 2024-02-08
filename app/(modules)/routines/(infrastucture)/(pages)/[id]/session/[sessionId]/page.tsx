"use client"

import { useForm } from '@/app/(hooks)/useForm';
import { buttonStyles } from '@/app/(styles)';
import { HEADINGS } from '@/app/(styles)/variables';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRoutines } from '../../../../(hooks)/RoutinesContext';
import { WorkoutSessionLog } from '@/app/(modules)/routines/domain/entities';

const exercises = [
    {
        id: "bf48666a-6686-4457-bc57-f619e70089ec",
        name: "Diamond push-ups",
        estimatedTime: 1,
        sets: 3
    },
    {
        id: "d1a970ec-4f9a-44bb-b382-563f9946dc23",
        name: "Standard push-ups",
        estimatedTime: 1,
        sets: 3
    },
    {
        id: "8da7ff15-f1e7-43d5-affa-56da5ce972b0",
        name: "Standard pull-ups",
        estimatedTime: 1,
        sets: 7
    },
    {
        id: "7f65183c-b28b-47d1-8000-4716c59fda2c",
        name: "Deadlift",
        estimatedTime: 1,
        sets: 3
    },
    {
        id: "f71fa536-5bb4-4c2c-9ec1-3d8075a64cfd",
        name: "Biceps curl",
        estimatedTime: 1,
        sets: 5
    },
    {
        id: "73dfaa6a-80b2-48cd-a707-3abca6e6d431",
        name: "Triceps extensions",
        estimatedTime: 1,
        sets: 4
    },
    {
        id: "57f3d30d-20dc-41d9-aca8-1f8405286942",
        name: "Squats",
        estimatedTime: 1,
        sets: 3
    },
    {
        id: "b84c35c3-b489-4b00-8a46-e8ec8fb4c88e",
        name: "Lunges",
        estimatedTime: 1,
        sets: 3
    }
]

const formInitialState = {
    reps: 0,
    weight: 0,
    weightUnit: "kg",
}

interface Form {
    reps: number;
    weight: number;
    weightUnit: string;
}

const workoutSessionInitialState: WorkoutSessionLog = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    exercises: [],
}


const Page = ({ params }: any) => {
    const [currentExercise, setCurrentExercise] = useState(exercises[0])
    const [currentSet, setCurrentSet] = useState(1)
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [workoutSessionT, setWorkoutSession] = useState(workoutSessionInitialState)

    const { addWorkoutSession, routinesList, setRoutinesList } = useRoutines()
    const { values: formValues, handleInputChange } = useForm(formInitialState)

    const allExercisesList = routinesList.map(routine => routine.exercisesList).flat()

    const allSets = currentExercise.sets
    const isCurrentSetLast = currentSet === allSets
    const isLastExercise = currentExerciseIndex === exercises.length - 1
    const isNextDisabled =
        !((formValues as Form).reps > 0 && (formValues as Form).weight > 0)

    const nextExercise = exercises[currentExerciseIndex + 1]

    const routine = routinesList.find((routine: any) => routine.id === params.id) ?? { id: "", exercisesList: [] }

    const exerciseIndex = routine?.exercisesList.findIndex(
        (exercise: any) => {
            return exercise.id === currentExercise.id
        }
    );
    const handleNextSet = () => {
        if (currentSet < allSets) {
            setCurrentSet(currentSet + 1)
        }

        const newSet = {
            number: currentSet,
            ...formValues
        };

        // Define the exercise id where you want to add the new set
        const exerciseId = currentExercise.id;

        // Define the workout session id where you want to add the new exercise
        const workoutSessionId = workoutSessionT.id;

        // Define the routine id where you want to add the new workout session log
        const routineId = params.id;

        const newRoutinesList = routinesList.map(routine => {
            if (routine.id === routineId) {

                const workoutSessionExists = routine.workoutSessionLogsList.some(workoutSession => workoutSession.id === workoutSessionId);

                if (workoutSessionExists) {
                    return {
                        ...routine,
                        workoutSessionLogsList: routine.workoutSessionLogsList.map(workoutSessionNested => {
                            if (workoutSessionNested.id === workoutSessionId) {

                                const exerciseExists = workoutSessionNested.exercises.some(exercise => exercise.id === exerciseId);

                                if (exerciseExists) {
                                    return {
                                        ...workoutSessionNested,
                                        exercises: workoutSessionNested.exercises.map(exercise => {

                                            if (exercise.id === exerciseId) {

                                                return {
                                                    ...exercise,
                                                    sets: [...exercise.sets, newSet],
                                                };

                                            } else {

                                                return exercise;
                                            }
                                        }),
                                    };
                                } else {
                                    return {
                                        ...workoutSessionNested,
                                        exercises: [...workoutSessionNested.exercises, {
                                            id: exerciseId,
                                            name: currentExercise.name,
                                            sets: [newSet],
                                        }],
                                    };
                                }
                            } else {

                                return workoutSessionNested;
                            }
                        }),
                    };
                } else {
                    return {
                        ...routine,
                        workoutSessionLogsList: [...routine.workoutSessionLogsList, {
                            id: workoutSessionId,
                            date: new Date().toISOString(),
                            exercises: [{
                                id: exerciseId,
                                name: currentExercise.name,
                                sets: [newSet]
                            }]
                        }]
                    }
                }

            } else {


                return routine;
            }
        });

        setRoutinesList(newRoutinesList)
    }

    const handleNextExercise = () => {
        if (currentSet === allSets) {
            setCurrentSet(1);
            let nextExerciseIndex = currentExerciseIndex + 1;

            // If we're at the end of the exercises array, go back to the first exercise
            if (nextExerciseIndex === exercises.length) {
                nextExerciseIndex = currentExerciseIndex;
            }


            const newSet = {
                number: currentSet,
                ...formValues
            };

            // Define the exercise id where you want to add the new set
            const exerciseId = currentExercise.id;

            // Define the workout session id where you want to add the new exercise
            const workoutSessionId = workoutSessionT.id;

            // Define the routine id where you want to add the new workout session log
            const routineId = params.id;


            const newRoutinesList = routinesList.map(routine => {
                if (routine.id === routineId) {
                    const workoutSessionExists = routine.workoutSessionLogsList.some(workoutSession => workoutSession.id === workoutSessionId);

                    if (workoutSessionExists) {
                        return {
                            ...routine,
                            workoutSessionLogsList: routine.workoutSessionLogsList.map(workoutSessionNested => {
                                if (workoutSessionNested.id === workoutSessionId) {
    
                                    const exerciseExists = workoutSessionNested.exercises.some(exercise => exercise.id === exerciseId);
    
                                    if (exerciseExists) {
                                        return {
                                            ...workoutSessionNested,
                                            exercises: workoutSessionNested.exercises.map(exercise => {
                                                if (exercise.id === exerciseId) {
                                                    return {
                                                        ...exercise,
                                                        sets: [...exercise.sets, newSet],
                                                    };
                                                } else {
                                                    return exercise;
                                                }
                                            }),
                                        };
                                    } else {
                                        return {
                                            ...workoutSessionNested,
                                            exercises: [...workoutSessionNested.exercises, {
                                                id: exerciseId,
                                                name: currentExercise.name,
                                                sets: [newSet],
                                            }],
                                        };
                                    }
                                } else {
                                    return workoutSessionNested;
                                }
                            }),
                        };
                    } else {
                        return {
                            ...routine,
                            workoutSessionLogsList: [...routine.workoutSessionLogsList, {
                                id: workoutSessionId,
                                date: new Date().toISOString(),
                                exercises: [{
                                    id: exerciseId,
                                    name: currentExercise.name,
                                    sets: [newSet]
                                }]
                            }]
                        }
                    }                    
                } else {
                    return routine;
                }
            });

            setRoutinesList(newRoutinesList)

            setCurrentExerciseIndex(nextExerciseIndex);
            setCurrentExercise(exercises[nextExerciseIndex]);
        }
    }

    const repsInputValue =
        (formValues as Form).reps === 0
            ? ""
            : (formValues as Form).reps
    const weightInputValue =
        (formValues as Form).weight === 0
            ? ""
            : (formValues as Form).weight


    const sessionPageStyles = {
        pageTitle: `${HEADINGS.H2} font-bold`,
        formGroup: "my-5 flex justify-center flex-col",
        formLabel: "text-center text-[24px] mb-2",
        formInput: "block p-2 bg-[#3d3d3d] w-full text-center",
        nextExerciseSpan: `text-[18px] ${isCurrentSetLast && !isLastExercise ? "block" : "hidden"} lg:m-auto text-center`,
        buttons: {
            nextSet: `
                block 
                font-bold 
                ${isCurrentSetLast ? "hidden" : "block"}
                ${buttonStyles}
                ${isNextDisabled ? "bg-[#777777] hover:bg-[#777777]" : "bg-[#3d3d3d]"}
                lg:m-auto
            `,
            nextExercise: `
                font-bold ${isCurrentSetLast && !isLastExercise ? "block" : "hidden"} ${buttonStyles} lg:m-auto`,
            finish: `text-[18px] font-bold ${isCurrentSetLast && isLastExercise ? "block" : "hidden"} ${buttonStyles} lg:m-auto`,
        }
    }

    const handleFinish = () => {
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

        addWorkoutSession(params.id, newWorkoutSessionLog)
    }

    return (
        <>
            <h2 className={sessionPageStyles.pageTitle}>{currentExercise.name}</h2>

            <h4>Set {currentSet}/{allSets}</h4>

            <div className={sessionPageStyles.formGroup}>
                <label className={sessionPageStyles.formLabel} htmlFor="reps">Reps</label>
                <input
                    className={sessionPageStyles.formInput}
                    name="reps"
                    type="text"
                    value={
                        repsInputValue
                    }
                    placeholder='0'
                    onChange={handleInputChange}
                />
            </div>

            <div className={sessionPageStyles.formGroup}>
                <label className={sessionPageStyles.formLabel} htmlFor="weight">Weight</label>
                <input
                    className={sessionPageStyles.formInput}
                    name="weight"
                    placeholder='0'
                    type="text"
                    value={
                        weightInputValue
                    }
                    onChange={handleInputChange}
                />
            </div>

            <div className='my-5 flex justify-center flex-col'>
                <label className={sessionPageStyles.formLabel} htmlFor="weightUnit">Weight Unit</label>
                <select name="weightUnit" className={sessionPageStyles.formInput} onChange={handleInputChange}>
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                </select>
            </div>


            <button
                style={{
                    cursor: isNextDisabled ? "not-allowed" : "pointer",
                }}
                className={sessionPageStyles.buttons.nextSet}
                disabled={isNextDisabled}
                onClick={handleNextSet}
            >Next set</button>
            <button className={sessionPageStyles.buttons.nextExercise} onClick={handleNextExercise}>Next exercise</button>
            <span className={sessionPageStyles.nextExerciseSpan}  >
                {nextExercise?.name ?? ""}
            </span>

            <Link
                href={`/`}
                className={sessionPageStyles.buttons.finish}
                onClick={handleFinish}
            >Finish</Link>
        </>
    )
}

export default Page