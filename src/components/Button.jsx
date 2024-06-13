import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
  
    <button className="bg-secondary text-white w-fit py-2 px-12 rounded-xl text-2xl font-bold hover:bg-primary"  type='submit'>{props.cta}</button>
  )
}

export default Button