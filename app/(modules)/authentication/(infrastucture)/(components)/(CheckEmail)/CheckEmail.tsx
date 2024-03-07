"use client"
import { BUTTON_STYLES, INPUT_STYLES } from '@/app/(styles)';
import React, { useState } from 'react'

interface CheckEmailProps {
  handlePreviousStep: () => void;
}

const CheckEmail = ({ handlePreviousStep }: CheckEmailProps) => {
  const [email, setEmail] = useState('');

  return (
    <>
      <div className='w-full'>
        <span 
          className={`
            ${BUTTON_STYLES} 
            p-1 
            relative
            rounded-[6px] 
            material-symbols-outlined
            text-left
          `}
          onClick={handlePreviousStep}
        >
          arrow_back
        </span>

        <h1 className='text-center inline'>Check your email</h1>
      </div>

      <p>
        To login in instantly, use the Sign In link in the email we sent to carlosquesadaumana@gmail.com.

        Or, enter the 6 digit code included in the email:
      </p>

      <div className="form-group my-5 w-full">
        <label className='block mb-2'>
          Email Code
        </label>
        <input
          className={INPUT_STYLES}
          type="text"
          value={"email"}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <button className={`${BUTTON_STYLES}`}>Sign In</button>
    </>
  )
}

export default CheckEmail