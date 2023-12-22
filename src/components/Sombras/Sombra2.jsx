import React from 'react'
import { motion } from 'framer-motion'

function Sombra2({eleccion}) {
  return (
    <>
      {eleccion?.name === 'Chocolate' && (
        <motion.div 
          className='w-[1083px] h-[1083px] rounded-full bg-[#984A3B] absolute -bottom-[50%] -z-10 -right-[50%]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
      {eleccion?.name === 'Pistaccio' && (
        <motion.div 
          className='w-[1083px] h-[1083px] rounded-full bg-[#769F21] absolute -bottom-[50%] -z-10 -right-[50%]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
      {eleccion?.name === 'Fresa' && (
        <motion.div 
          className='w-[1083px] h-[1083px] rounded-full bg-[#F67B59] absolute -bottom-[50%] -z-10 -right-[50%]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
      {eleccion?.name === 'Blueberry' && (
        <motion.div 
          className='w-[1083px] h-[1083px] rounded-full bg-[#643B5A] absolute -bottom-[50%] -z-10 -right-[50%]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
    </>
  )
}

export default Sombra2