"use client"

import { useForm } from '@/app/(hooks)/useForm';
import React, { useState } from 'react'

const exercises = [
    {
        id: 1,
        name: "Standard bench press",
        estimatedTime: 1,
        sets: 5,
    },
    {
        id: 2,
        name: "Incline bench press",
        estimatedTime: 1,
        sets: 7,
    },
    {
        id: 3,
        name: "Pecs flys",
        estimatedTime: 1,
        sets: 5,
    },
    {
        id: 4,
        name: "Pecs extensions",
        estimatedTime: 1,
        sets: 7,
    },
];

const formInitialState = {
    reps: 0,
    weight: 0,
}

interface Form {
    reps: number;
    weight: number;
}

const page = ({ params }: any) => {
    const [currentExercise, setCurrentExercise] = useState(exercises[0])
    const [currentSet, setCurrentSet] = useState(1)
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

    const [formValues, handleInputChange] = useForm<Form>(formInitialState)

    const allSets = currentExercise.sets
    const isCurrentSetLast = currentSet === allSets
    const isLastExercise = currentExerciseIndex === exercises.length - 1
    const isNextDisabled =
        (
            (formValues as Form).reps === 0 ||
            Number((formValues as Form).reps) === 0 ||
            (formValues as Form).reps === null
        ) ||
        (
            (formValues as Form).weight === 0 ||
            Number((formValues as Form).weight) === 0 ||
            (formValues as Form).weight === null
        )
    const nextExercise = exercises[currentExerciseIndex + 1]

    const handleNextSet = () => {
        if (currentSet < allSets) {
            setCurrentSet(currentSet + 1)
        }
    }

    const handleNextExercise = () => {
        if (currentSet === allSets) {
            setCurrentSet(1);
            let nextExerciseIndex = currentExerciseIndex + 1;

            // If we're at the end of the exercises array, go back to the first exercise
            if (nextExerciseIndex === exercises.length) {
                nextExerciseIndex = currentExerciseIndex;
            }

            setCurrentExerciseIndex(nextExerciseIndex);
            setCurrentExercise(exercises[nextExerciseIndex]);
        }
    }

    return (
        <div>
            <h2>{currentExercise.name}</h2>

            <h4>Set {currentSet}/{allSets}</h4>

            <div className='my-5'>
                <label htmlFor="reps">Reps</label>
                <input
                    className='block bg-slate-500'
                    name="reps"
                    type="text"
                    value={(formValues as Form).reps}
                    onChange={handleInputChange}
                />
            </div>

            <div className='my-5'>
                <label htmlFor="weight">Weight</label>
                <input
                    className='block bg-slate-500'
                    name="weight"
                    type="text"
                    value={(formValues as Form).weight}
                    onChange={handleInputChange}
                />
            </div>


            <button
                className={`
                    block 
                    font-bold 
                    ${isCurrentSetLast ? "hidden" : "block"}
                    ${isNextDisabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer"}
                `}
                disabled={isNextDisabled}
                onClick={handleNextSet}
            >Next set</button>
            <button className={`font-bold ${isCurrentSetLast && !isLastExercise ? "block" : "hidden"}`} onClick={handleNextExercise}>Next exercise</button>
            <span className={`inline text-[18px] ${isCurrentSetLast && !isLastExercise ? "block" : "hidden"}`}  >
                {nextExercise?.name ?? ""}
            </span>

            <button className={`inline text-[18px] font-bold ${isCurrentSetLast && isLastExercise ? "block" : "hidden"}`}>Finish</button>
        </div>
    )
}

export default page