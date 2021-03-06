import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length >= 1) {
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false
      }

      handleAddTodo(newTodo);
      reset();
    }
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input className='form-control' type="text" name="description"
          placeholder='TODO' autoComplete='off'
          onChange={handleInputChange} value={description} />
        <button type='submit' className='btn btn-outline-primary mt-2 col-12'>Agregar</button>

      </form>
    </>
  )
}
