import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { data } = state;
  const { quote } = !!data && data[0];


  const pTag = useRef();
  const [size, setSize] = useState({});

  useLayoutEffect(() => {
    setSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p className='mb-2' ref={pTag}>{quote}</p>
      </blockquote>

      <pre>{JSON.stringify(size, null, 3)}</pre>

      <button className='btn btn-primary'
        onClick={() => increment(1)}>
        Siguiente quote
      </button>
    </div>
  )
}
