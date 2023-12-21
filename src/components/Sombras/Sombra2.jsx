import React from 'react'

function Sombra2({eleccion}) {
  return (
    <>
      {eleccion?.name === 'Chocolate' && (
        <div className='w-[1083px] h-[1083px] rounded-full bg-[#984A3B] absolute -bottom-[50%] -z-10 -right-[50%]'/>
      )}
      {eleccion?.name === 'Pistaccio' && (
        <div className='w-[1083px] h-[1083px] rounded-full bg-[#769F21] absolute -bottom-[50%] -z-10 -right-[50%]'/>
      )}
      {eleccion?.name === 'Fresa' && (
        <div className='w-[1083px] h-[1083px] rounded-full bg-[#F67B59] absolute -bottom-[50%] -z-10 -right-[50%]'/>
      )}
      {eleccion?.name === 'Blueberry' && (
        <div className='w-[1083px] h-[1083px] rounded-full bg-[#643B5A] absolute -bottom-[50%] -z-10 -right-[50%]'/>
      )}
    </>
  )
}

export default Sombra2