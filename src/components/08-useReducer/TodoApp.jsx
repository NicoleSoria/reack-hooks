import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './style.css';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender react',
  //   done: false
  // }]
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  // const [{ description }, handleInputChange, reset] = useForm({
  //   description: ''
  // });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (description.trim().length >= 1) {
  //     const newTodo = {
  //       id: new Date().getTime(),
  //       desc: description,
  //       done: false
  //     }

  //     const action = {
  //       type: 'add',
  //       payload: newTodo
  //     }

  //     dispatch(action);
  //     reset();
  //   }
  // };

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
  }

  const handleDelete = (id) => {
    const action = {
      type: 'delete',
      payload: id
    }
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = {
      type: 'toggle',
      payload: id
    }
    dispatch(action);
  }

  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
          {/* <ul className='list-group list-group-flush'>
            {
              todos.map((todo, i) => (
                <li key={todo.id} className="list-group-item">
                  <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>{i + 1}- {todo.desc}</p>
                  <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>Borrar</button>
                </li>
              ))
            }

          </ul> */}
        </div>
        <div className='col'>
          <TodoAdd handleAddTodo={handleAddTodo} />
          {/* <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input className='form-control' type="text" name="description"
              placeholder='TODO' autoComplete='off'
              onChange={handleInputChange} value={description} />
            <button type='submit' className='btn btn-outline-primary mt-2 col-12'>Agregar</button>

          </form> */}
        </div>
      </div>


    </div>
  )
}
