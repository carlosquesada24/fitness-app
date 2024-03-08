"use client"
import { INPUT_STYLES } from '@/app/(styles)';
import React from 'react'

interface TypeEmailProps {
  email: string;
  handleInputChange: (e: any) => void;
  handleNextStep: () => void;
}

const TypeEmail = ({ 
  email,
  handleInputChange, 
}: TypeEmailProps) => {
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
          onChange={e => handleInputChange(e.target.value)} required 
        />
      </div>
    </>
  )
}

export default TypeEmail