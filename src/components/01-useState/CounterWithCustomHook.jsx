import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className='btn btn-primary' onClick={() => increment(2)}> +1 </button>
      <button className='btn btn-primary ms-2' onClick={reset}> Reset </button>
      <button className='btn btn-primary ms-2' onClick={() => decrement(1)}> -1 </button>
    </>
  )
}
