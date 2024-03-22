"use client"
import { INPUT_STYLES } from '@/app/(styles)';
import React from 'react'

interface TypeEmailProps {
  password: string;
  handleInputChange: (e: any) => void;
}

const TypePassword = ({ 
  password,
  handleInputChange, 
}: TypeEmailProps) => {
  return (
    <>
      <div className="form-group mb-5 w-full">
        <label className='block mb-2'>
          Password
        </label>
        <input 
          className={INPUT_STYLES}
          placeholder='klj2!$$fds'
          type="password" 
          value={password} 
          onChange={e => handleInputChange(e.target.value)} required 
        />
      </div>
    </>
  )
}

export default TypePassword