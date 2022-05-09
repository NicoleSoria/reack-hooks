import React, { useRef } from 'react'

export const FocusScreem = () => {

  const inputRef = useRef();
  // console.log(ref);

  const handleClick = () => {
    // document.querySelector('input').focus();
    inputRef.current.select();
  }

  return (
    <div>
      <h1>FocusScreem</h1>
      <hr />

      <input ref={inputRef} className='form-control' placeholder='Su nombre' />
      <button className='mt-5 btn btn-outline-primary'
        onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}
