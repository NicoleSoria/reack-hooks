import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('Hola!');
  }, []);

  useEffect(() => {
    // console.log('Cambio de formulario');
  }, [formState]);

  useEffect(() => {
    // console.log('Cambio de email');
  }, [email]);



  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect - Simple form</h1>
      <hr />

      <div className='form-group'>
        <input type="text"
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          value={name}
          autoComplete='off'
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group mt-2 mb-5'>
        <input type="email"
          name='email'
          className='form-control'
          placeholder='TuEmail@x.com'
          value={email}
          autoComplete='off'
          onChange={handleInputChange}
        />
      </div>

      {(name == '123') && <Message />}
    </>
  )
}
