import React, { useState } from 'react'

const Event02 = () => {
    const [msg, setMsg] = useState('마우스 올려보세요.')

    const handleMouseOver = () =>{
        setMsg('마우스 오버됨')
    }

    const handleMouseLeave = () =>{
        setMsg('마우스 아웃됨')
    }
  return (
    <>
        <p onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>{msg}</p>
    </>
  )
}

export default Event02