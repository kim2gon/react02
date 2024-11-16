import React, { createElement, useRef } from 'react'

/*
    useRef사용법 2. Animation 제어
*/

const Step02 = () => {
    const animationRef = useRef(null);
  return (
    <>
        <div className='box'></div>
        <button onClick={()=>{
            animationRef.current.classList.add('animate')
        }}>CLICK</button>
    </>
  )
}

export default Step02