export const ROUTES = {
    HOME: '/',
    ROUTINES: '/routines',
    PROFILE: '/profile',

    SIGN_UP: "/authentication/sign-up",
    LOGIN: "/authentication/login",
}

export const API_ROUTES = {
    SIGN_UP: "/api/authentication/sign-up",
    LOGIN_WITHOUT_PASSWORD: "/api/authentication/log-in-without-password",
    LOGIN_WITH_PASSWORD: "/api/authentication/log-in-with-password",
    RECOVER_PASSWORD: "/api/authentication/recover-password",
}

export const unauthenticatedLinksList = [
    { href: ROUTES.SIGN_UP, text: 'Sign Up' },
    // <Link
    //     className={`
    //         p-2 
    //         bg-[#D1A8FF] 
    //         text-[#000] 
    //         rounded-[6px] 
    //         cursor-pointer 
                   
    //         ${BUTTON_STYLES}
    //         bg-[${COLORS.PRIMARY}]

    //         text-center
    //         m-auto
    //         `} 
    //     href={ROUTES.SIGN_UP}
    // >
    //     <span className='lg:inline'>Sign Up</span>
    // </Link>
]

export const authenticatedLinksList = [
    { href: ROUTES.HOME, text: 'Home', symbolText: 'home' },
  { href: ROUTES.ROUTINES, text: 'Routines', symbolText: 'fitness_center' },
]