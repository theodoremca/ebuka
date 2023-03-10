import React, { ChangeEventHandler } from 'react'

type InputProps = {
  type: string,
  name: string,
  value: string,
  handleOnChange: any
}

const Input = ({type, name, value, handleOnChange}: InputProps) => {
  return (
    <div className='d-flex flex-column align-content-start justify-items-center p-2'>
        <label className='fs-6'>{name.toUpperCase()}</label>
        <input className='p-3 rounded outline-none border-none' type={type} name={name} value={value} onChange={handleOnChange} />
    </div>
  )
}

export default Input;