import React from 'react'
import chocolate from '../assets/helados/chocolate.png'
import logonav from '../assets/logos/logonav.svg'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='w-full h-[100px]   flex flex-row justify-between  items-center px-10'>
        <div className='w-full '>
            <Image src={logonav} className='' />

        </div>

        <div className='w-full h-full'>
            <ul className='w-full h-full flex flex-row justify-end gap-x-10 items-center
            text-[22px] font-montserrat   
            '>
                <li className='font-bold'>Home</li>
                <li>Specialities</li>
                <li>About Us</li>
                <li>Contact</li>
                </ul>
            
        </div>

    </div>
  )
}

export default Navbar