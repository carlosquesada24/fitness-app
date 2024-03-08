import { INPUT_STYLES } from '@/app/(styles)'
import React from 'react'

interface TypeNameInputProps {
    name: string;
    handleInputChange: (e: any) => void;
}

const TypeNameInput = ({name, handleInputChange}: TypeNameInputProps) => {
  return (
    <div className="form-group mb-5 w-full">
        <label className='block mb-2'>
          Name
        </label>
        <input
        name='name' 
          className={INPUT_STYLES}
          placeholder='John'
          type="text" 
          value={name} 
          onChange={e => handleInputChange(e.target.value)} required 
        />
      </div>
  )
}

export default TypeNameInput