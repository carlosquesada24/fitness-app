import { COLORS } from "./variables"

export const BUTTON_STYLES = `
    p-2

    bg-[#D1A8FF]
    text-[#000]
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