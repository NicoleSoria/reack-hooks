import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('email cambio');
  }, [email]);

  const habldeSubmit = (e) => {
    e.preventDefault(); //Para que no se recargue la página

    console.log(formValues);
  }

  return (
    <>
      <form onSubmit={habldeSubmit}>
        <h1>Form with Custom Hook</h1>
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
        <div className='form-group mt-2'>
          <input type="email"
            name='email'
            className='form-control'
            placeholder='TuEmail@x.com'
            value={email}
            autoComplete='off'
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group mt-2 mb-5'>
          <input type="password"
            name='password'
            className='form-control'
            placeholder='TuPassword'
            value={password}
            autoComplete='off'
            onChange={handleInputChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>

    </>
  )
}
