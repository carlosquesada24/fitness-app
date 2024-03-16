import { COLORS } from "./variables"

export const INPUT_STYLES = `
    w-full 
    p-2 
    text-[#fcfcfc] 
    rounded-[6px]

    block 
    
    bg-[#3d3d3d] 

    outline-none
    border
    border-solid
    border-[transparent]
    focus:border 
    focus:border-solid
    focus:border-[#D1A8FF]
    transition
    duration-350 
`

export const BUTTON_STYLES = `
    p-2

    bg-[#D1A8FF]
    text-[#000]
    font-bold
    hover:cursor-pointer
    hover:bg-[#cfcfcf]
    transition
    duration-350
`

export const START_WORKOUT_SESSION_BUTTON_STYLES = `
    ${BUTTON_STYLES}
    bg-[${COLORS.PRIMARY}]
`

export const ROUTINE_CARD_STYLES = `
    bg-[#464646]
    border-[#535353]
    p-5
    mb-5
    rounded-md
`

export const EXERCISE_CARD_STYLES = `
    p-5
    bg-[#464646]
    border-[#535353]
    rounded-[6px]

    flex 
    justify-between
    hover:cursor-pointer
    hover:bg-[#525252]
    transition
    duration-350
`

export const WORKOUT_LOGS_CARD_STYLES = `
    bg-[#464646]
    text-[#E0E0E0]

    p-4 
    flex 
                
    rounded-[6px]

    flex-col
    sm:flex-row

    justify-between 
    hover:cursor-pointer
    hover:bg-[#525252]
    transition
    duration-350
`