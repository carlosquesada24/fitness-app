"use client"

import { useForm } from '@/app/(hooks)/useForm';
import { buttonStyles } from '@/app/(styles)';
import { HEADINGS } from '@/app/(styles)/variables';
import Link from 'next/link';
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
    weightUnit: "kg",
}

interface Form {
    reps: number;
    weight: number;
    weightUnit: string;
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
        !((formValues as Form).reps > 0 && (formValues as Form).weight > 0)
    
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
            >Finish</Link>
        </>
    )
}

export default page