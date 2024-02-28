"use client"

import { useForm } from '@/app/(hooks)/useForm';
import { BUTTON_STYLES } from '@/app/(styles)';
import { HEADINGS } from '@/app/(styles)/variables';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRoutines } from '../../../../(hooks)/RoutinesContext';
import { EXERCISE_DEFAULT_VALUE, ROUTINE_DEFAULT_VALUE, Routine, SessionForm } from '@/app/(modules)/routines/(domain)/entities';
import { INITIAL_SET, sessionFormInitialState, workoutSessionInitialState } from '@/app/(modules)/routines/(domain)/data';

const Page = ({ params }: any) => {
    const {
        addWorkoutSession,
        routinesList,
        setRoutinesList
    } = useRoutines()

    const [routine, setRoutine] = useState(
        () => routinesList
            .find(
                (routine: any) => routine.id === params.id
            )
            ?? ROUTINE_DEFAULT_VALUE
    )

    const [currentExercise, setCurrentExercise] = useState(
        routine?.exercisesList[0] ?? EXERCISE_DEFAULT_VALUE
    )
    const [currentSet, setCurrentSet] = useState(INITIAL_SET)
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [workoutSession, setWorkoutSession] = useState(workoutSessionInitialState)

    useEffect(() => {

        setRoutine(
            routinesList.find(
                (routine: any) => routine.id === params.id
            ) ?? ROUTINE_DEFAULT_VALUE
        )

        setCurrentExercise(routine?.exercisesList[0]
            ?? EXERCISE_DEFAULT_VALUE)

    }, [routine])

    const { values: formValues, handleInputChange } = useForm(sessionFormInitialState)

    const newSetFormatter = (formValues: any) => ({
        number: currentSet,
        formValues: {
            reps: parseInt(formValues.reps),
            weight: parseInt(formValues.weight),
            weightUnit: formValues.weightUnit
        }
    })

    const routineListFormatter = ({
        routineId,
        workoutSessionId,
        exerciseId,
        newSet,
    }: {
        routineId: string;
        workoutSessionId: string;
        exerciseId: string;
        newSet: any;
    }) => {
        return routinesList.map(routine => {

            const createNewWorkoutSessionObject = {
                ...routine,
                workoutSessionLogsList: [...routine.workoutSessionLogsList, {
                    id: workoutSessionId,
                    date: new Date().toISOString(),
                    exercises: [{
                        id: exerciseId,
                        name: currentExercise.name,
                        sets: [newSetFormatter(newSet)]
                    }]
                }]
            }

            const editWorkoutSessionObject = {
                ...routine,
                workoutSessionLogsList: routine.workoutSessionLogsList.map(workoutSessionNested => {
                    if (workoutSessionNested.id === workoutSessionId) {

                        const exerciseExists = workoutSessionNested.exercises.some(exercise => exercise.id === exerciseId);

                        console.log("CABEZA")

                        if (exerciseExists) {
                            console.log("CODO")
                            return {
                                ...workoutSessionNested,
                                exercises: workoutSessionNested.exercises.map(exercise => {
                                    console.log({exerciseId, id: exercise.id})
                                    if (exercise.id === exerciseId) {
                                        console.log("MUÑECA")
                                        return {
                                            ...exercise,
                                            sets: [...exercise.sets, newSetFormatter(newSet)],
                                        };
                                    } else {
                                        console.log("CUELLO")
                                        return exercise;
                                    }
                                }),
                            };
                        } else {
                            console.log("MANO")
                            return {
                                ...workoutSessionNested,
                                exercises: [...workoutSessionNested.exercises, {
                                    id: exerciseId,
                                    name: currentExercise.name,
                                    sets: [newSetFormatter(newSet)],
                                }],
                            };
                        }
                    } else {
                        console.log("HOMBRO")
                        return workoutSessionNested;
                    }
                }),
            };

            const exerciseExistsFormatter = ({ workoutSessionNested }: { workoutSessionNested: any }) => ({
                ...workoutSessionNested,
                exercises: workoutSessionNested.exercises.map((exercise: any) => {
                    if (exercise.id === exerciseId) {
                        return {
                            ...exercise,
                            sets: [...exercise.sets, newSetFormatter(newSet)],
                        };
                    } else {
                        return exercise;
                    }
                }),
            })

            if (routine.id === routineId) {
                const workoutSessionExists = routine.workoutSessionLogsList.some(workoutSession => workoutSession.id === workoutSessionId);

                console.log({workoutSessionExists})

                if (workoutSessionExists) {
                    return editWorkoutSessionObject
                } else {
                    return createNewWorkoutSessionObject
                }
            } else {
                return routine;
            }
        });
    }

    const allSets = currentExercise.sets
    const isCurrentSetLast = currentSet === allSets
    const isLastExercise = currentExerciseIndex === routine?.exercisesList.length - 1
    const isNextDisabled =
        !((formValues as SessionForm).reps > 0 && (formValues as SessionForm).weight > 0)

    const nextExercise = routine?.exercisesList[currentExerciseIndex + 1]

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
        const workoutSessionId = params.sessionId;

        // Define the routine id where you want to add the new workout session log
        const routineId = params.id;

        const newRoutinesList = routineListFormatter({
            routineId,
            workoutSessionId,
            exerciseId,
            newSet
        })

        console.log({workoutSessionId, newRoutinesList, title: "next set"})

        setRoutinesList(newRoutinesList)
    }

    const handleNextExercise = () => {
        if (currentSet === allSets) {
            setCurrentSet(1);
            let nextExerciseIndex = currentExerciseIndex + 1;

            // If we're at the end of the exercises array, go back to the first exercise
            if (nextExerciseIndex === routine?.exercisesList.length) {
                nextExerciseIndex = currentExerciseIndex;
            }


            const newSet = {
                number: currentSet,
                ...formValues
            };


            // Define the exercise id where you want to add the new set
            const exerciseId = currentExercise.id;

            // Define the workout session id where you want to add the new exercise
            const workoutSessionId =params.sessionId;

            // Define the routine id where you want to add the new workout session log
            const routineId = params.id;


            const newRoutinesList = routineListFormatter({
                routineId,
                workoutSessionId,
                exerciseId,
                newSet
            })

            console.log({newRoutinesList, title: "next exercise"})

            setRoutinesList(newRoutinesList)

            setCurrentExerciseIndex(nextExerciseIndex);
            setCurrentExercise(routine?.exercisesList[nextExerciseIndex]);
        }
    }

    const repsInputValue =
        (formValues as SessionForm).reps === 0
            ? ""
            : (formValues as SessionForm).reps
    const weightInputValue =
        (formValues as SessionForm).weight === 0
            ? ""
            : (formValues as SessionForm).weight


    const sessionPageStyles = {
        pageTitle: `${HEADINGS.H2} font-bold`,
        formGroup: "my-5 flex justify-center flex-col",
        formLabel: "text-center text-[24px] mb-2",
        formInput: `
            block 
            p-2 
            bg-[#3d3d3d] 
            w-full 
            text-center
            rounded-[6px]
            outline-none
            border
            border-solid
            border-[transparent]
            focus:border 
            focus:border-solid
            focus:border-[#D1A8FF]
            transition
            duration-350
        `,
        nextExerciseSpan: `text-[18px] ${isCurrentSetLast && !isLastExercise ? "block" : "hidden"} lg:m-auto text-center`,
        buttons: {
            nextSet: `
                block 
                font-bold 
                ${isCurrentSetLast ? "hidden" : "block"}
                ${BUTTON_STYLES}
                ${isNextDisabled ? "bg-[#777777] hover:bg-[#777777]" : "bg-[#3d3d3d]"}
                lg:m-auto
                rounded-[6px]
                p-2
                bg-[#D1A8FF]
                text-[#000]
                hover:cursor-pointer
                hover:bg-[#cfcfcf]
                transition
                duration-350
            `,
            nextExercise: `
                font-bold 
                ${isCurrentSetLast && !isLastExercise ? "block" : "hidden"} 
                ${BUTTON_STYLES} 
                lg:m-auto 
                rounded-[6px] 
                p-2
                bg-[#D1A8FF]
                text-[#000]
                hover:cursor-pointer
                hover:bg-[#cfcfcf]
                transition
                duration-350    
            `,
            finish: `
                
                inline-block
                text-center
                font-bold 
                ${isCurrentSetLast && isLastExercise ? "block" : "hidden"} 
                ${BUTTON_STYLES} 
                lg:m-auto 
                rounded-[6px] 
                p-2
                bg-[#D1A8FF]
                text-[#000]
                hover:cursor-pointer
                hover:bg-[#cfcfcf]
                transition
                duration-350
            `,
        }
    }

    const handleFinish = () => {
        const newSet = {
            number: currentSet,
            ...formValues
        };

        // Define the exercise id where you want to add the new set
        const exerciseId = currentExercise.id;

        // Define the workout session id where you want to add the new exercise
        const workoutSessionId = params.sessionId;

        // Define the routine id where you want to add the new workout session log
        const routineId = params.id;

        const newRoutinesList = routineListFormatter({
            routineId,
            workoutSessionId,
            exerciseId,
            newSet
        })

        console.log({newRoutinesList, title: "finish"})

        setRoutinesList(newRoutinesList)
        addWorkoutSession(newRoutinesList as Routine[])
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

            <div className='w-full text-center'>
                <Link
                    href={`/`}
                    className={sessionPageStyles.buttons.finish}
                    onClick={handleFinish}
                >Finish</Link>
            </div>
        </>
    )
}

export default Page