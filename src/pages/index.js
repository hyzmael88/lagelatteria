import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import logo from '../assets/logos/logo.svg'
import chocolate from '../assets/helados/chocolate.png'
import pistaccio from '../assets/helados/pistaccio.png'
import fresa from '../assets/helados/fresa.png'
import blueberry from '../assets/helados/blueberry.png'
import { useState } from 'react'
import Sombra1 from '@/components/Sombras/sombra1'
import Sombra2 from '@/components/Sombras/Sombra2'
import Piezas from '@/components/Piezas/Piezas'
import Helado from '@/components/Helado'
import Heladote from '@/components/Heladote'
import { AnimatePresence } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

const helados = [
  {
    name: 'Chocolate',
    description: 'Chocolate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    image: chocolate,
    color: '#984A3B'
  },
  {
    name: 'Pistaccio',
    description: 'Pistaccio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    image: pistaccio,
    color: '#769F21'
  },
  {
    name: 'Fresa',
    description: 'Fresa Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    image: fresa,
    color: '#F67B59'
    
  },
  {
    name: 'Blueberry',
    description: 'Blueberry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    image: blueberry,
    color: '#643B5A'
  },
]


export default function Home() {

  const [eleccion, setEleccion] = useState(helados[0])
  
  return (
  <div className='w-full h-screen max-w-[1444px] mx-auto overflow-hidden relative '>
    <Navbar/>
    <div className='w-full h-full flex flex-row px-4'>
      <div className='w-full h-full flex flex-col gap-y-8 mt-20  '>
        <Image src={logo} alt='logo' width={1444} height={1080} layout='responsive' className='z-10'/>
        <p className='font-montserrat font-400 text-white z-10 '>
        {eleccion.description}
        </p>
        <div className='w-full  flex flex-row justify-start gap-4 items-center z-10'>
          {helados.map((helado, index) => (
           <Helado
           key={index}
            helado={helado}
            eleccion={eleccion}
            setEleccion={setEleccion}
           />
          ))}
        </div>

            

      </div>
        
      <div className='w-full h-full flex flex-col justify-center items-center'>
      <AnimatePresence mode='wait'>
                <Heladote key={eleccion.name} eleccion={eleccion} />
                </AnimatePresence>
           
        </div>
      <Sombra1
      eleccion={eleccion}
      />
       <AnimatePresence mode='wait'>
      <Piezas
      key={eleccion.name}
      eleccion={eleccion}
      />
      </AnimatePresence>
      <Sombra2
      eleccion={eleccion}
      />

    </div>

  </div>
  )
}
