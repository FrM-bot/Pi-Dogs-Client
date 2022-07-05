import React from 'react'
import inputStyles from '../styles/input.module.css'

const InputComponent = ({ handlerInputChange, labelName, error, type, name, minLength, minValue, maxValueLength }) => {
  return (<>
    <div className={'flex w-100 gap-1 md-col'}>
        <label htmlFor="name" className='subline'>
        {
          labelName
        }:
          </label>
    
    <div className='flex w-100 flex-column'>
      {
        type === 'text' && 
        <div className='subline w-100'>
            <input className={ error ?  `${inputStyles.input_error}` : `${inputStyles.input}`}
                onChange={handlerInputChange} type={`${type}`} name={`${name}`} required minLength={minLength} />
        </div>
      }
      {
        type === 'number' && 
        <div className='subline w-100'>
            <input className={ error ?  `${inputStyles.input_error}` : `${inputStyles.input}`}
                onChange={handlerInputChange} type={`${type}`} name={`${name}`} required min={minValue} maxLength={maxValueLength} />
        </div>
      }
    </div>
</div>
    {
        error && 
            <span className='error'>
                {
                    error
                }
            </span>
    }   
</>

  )
}

export default InputComponent