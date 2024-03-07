"use client"
import { BUTTON_STYLES, INPUT_STYLES } from '@/app/(styles)';
import React, { useState } from 'react'

interface TypeEmailProps {
  handleNextStep: () => void;
}

const TypeEmail = ({ handleNextStep }: TypeEmailProps) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [receiveEmails, setReceiveEmails] = useState(false);

  const SIGN_UP_FORM_STEPS = {
    TYPE_EMAIL: 'TYPE_EMAIL',
    CHECK_EMAIL: 'CHECK_EMAIL',
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <div className="form-group mb-5 w-full">
        <label className='block mb-2'>
          Email
        </label>
        <input 
          className={INPUT_STYLES}
          placeholder='admin@example.com'
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} required 
        />
      </div>

      {/* <div className="form-group mb-5">
          <label className='mr-4'>
            Do you want to receive emails of new releases?
          </label>
          <input type="checkbox" checked={receiveEmails} onChange={e => setReceiveEmails(e.target.checked)} />
        </div> */}

      <button 
        className={`p-2 ${BUTTON_STYLES} mb-5 rounded-[6px]`}
        type="submit"
        onClick={handleNextStep}
      >Send sign in link</button>
    </>
  )
}

export default TypeEmail