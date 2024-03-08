"use client"
import React from 'react'
import { useState } from 'react'
import CheckEmail from '../(CheckEmail)/CheckEmail';
import TypeEmail from '../(TypeEmail)/TypeEmail';
import { API_ROUTES } from '@/app/routes';
import { BUTTON_STYLES } from '@/app/(styles)';
import TypeNameInput from '../(TypeNameInput)/TypeNameInput';

const LOG_IN_FORM_STEPS = {
  TYPE_EMAIL: 'TYPE_EMAIL',
  CHECK_EMAIL: 'CHECK_EMAIL',
}

const SIGN_UP_FORM_STEPS = {
  PERSONAL_INFORMATION: "PERSONAL_INFORMATION"
}

const Form = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [receiveEmails, setReceiveEmails] = useState(false);

  const isLogIn = location.pathname.includes('login');
  const isSignUp = !isLogIn

  const [currentFormStep, setCurrentFormStep] =
    useState(
      isLogIn
        ? LOG_IN_FORM_STEPS.TYPE_EMAIL
        : SIGN_UP_FORM_STEPS.PERSONAL_INFORMATION
    );

  const handleSendSignInLink = async (e: any) => {
    e.preventDefault()

    const res = await fetch(
      API_ROUTES.LOGIN_WITHOUT_PASSWORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      })
    })

    setCurrentFormStep(LOG_IN_FORM_STEPS.CHECK_EMAIL);
  }

  const handleSignUp = async (e: any) => {
  }

  const handleNextStep = () => {

  }

  const handlePreviousStep = () => {
    setCurrentFormStep(LOG_IN_FORM_STEPS.TYPE_EMAIL);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleTestResend = async () => {
    const res = await fetch(
      API_ROUTES.LOGIN_WITHOUT_PASSWORD, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify({
        email
      })
    })

    const data = await res.json()

  }

  return (
    <>
      <form
        className='
          flex 
          flex-col 
          w-[50%] 
          p-5 
          m-auto 
          bg-[#444444] 
          border 
          border-solid 
          border-[#5b5b5b] 
          rounded-[6px]
        '
        onSubmit={handleSubmit}
      >

        {
          currentFormStep === LOG_IN_FORM_STEPS.TYPE_EMAIL &&
          <>
            <TypeEmail
              email={email}
              handleInputChange={(e: any) => setEmail(e)}
              handleNextStep={handleNextStep}
            />

            <button
              className={`p-2 ${BUTTON_STYLES} mb-5 rounded-[6px]`}
              onClick={handleSendSignInLink}
            >Send sign in link</button>
          </>

        }

        {
          isLogIn && currentFormStep === LOG_IN_FORM_STEPS.CHECK_EMAIL &&
          <CheckEmail
            handlePreviousStep={handlePreviousStep}
          />
        }

        {
          isSignUp && currentFormStep === SIGN_UP_FORM_STEPS.PERSONAL_INFORMATION &&
          <>
            <TypeEmail
              email={email}
              handleInputChange={(e: any) => setEmail(e)}
              handleNextStep={handleNextStep}
            />

            <TypeNameInput
              name={name}
              handleInputChange={(e: any) => setName(e)}
            />

            <button
              className={`p-2 ${BUTTON_STYLES} mb-5 rounded-[6px]`}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </>

        }

        <p className='text-center mt-6'>
          {
            isLogIn
              ? <>Don't have an account? <a href="/authentication/sign-up">Sign up</a></>
              : <>Have an account? <a href="/authentication/login">Log in</a></>
          }
        </p>


        <button onClick={handleTestResend}>
          Test Resend
        </button>
      </form>
    </>
  )
}

export default Form