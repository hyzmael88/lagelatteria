import { AnimatePresence, animate, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function Heladote({eleccion}) {
    const variants = {
        initial: {  x: "0", y:"70vh",  },
        out: { rotate: 720, x: "50vw", y:"0px",  transition: { duration: 2 } },
        in: { rotate: 360, y: 0, x: 0, transition: { duration: 2 } }
    };
    const [animate, setAnimate] = useState("in")

    useEffect(() => {
        setAnimate("out")
    }, [eleccion])
    

    return (
        <div>
            {eleccion && (
                <motion.div
                    key={eleccion.name}
                    variants={variants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    className='w-[615px] h-[612px]'
                >
                    <Image src={eleccion.image} alt={eleccion.name} className='w-full h-full object-contain'/>
                </motion.div>
            )}
            </div>
    )
}

export default Heladote