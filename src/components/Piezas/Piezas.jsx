import React, { useEffect, useState } from 'react'

import berries from '../../assets/piezas/berries.png'
import chocolates from '../../assets/piezas/chocolates.png'
import fresas from '../../assets/piezas/fresas.png'
import pistaches from '../../assets/piezas/pistaches.png'
import Image from 'next/image'

import { motion } from 'framer-motion';

const piezas = [
    chocolates,
    pistaches,
    fresas,
    berries,
]



function Piezas({eleccion}) {

        const [pieza, setPieza] = useState(piezas[0])
        
        useEffect(() => {
          switch (eleccion?.name) {
            case 'Chocolate':
              setPieza(piezas[0])
              break;
            case 'Pistaccio':
              setPieza(piezas[1])
              break;
            case 'Fresa':
              setPieza(piezas[2])
              break;
            case 'Blueberry':
              setPieza(piezas[3])
              break;
            default:
              break;
          }
        
        }, [eleccion])

       

        
    return (
      <motion.div
      className={`w-[1128px] h-[482px] absolute top-[30%] -left-[17%] -rotate-[10deg] transition-all duration-300 `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
  >
      <Image src={pieza} alt={eleccion?.name} className='w-full h-full object-contain' style={{ opacity: 0.2 }} />
  </motion.div>
    )
}

export default Piezas