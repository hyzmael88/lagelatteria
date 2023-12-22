import React from 'react'
import { motion } from 'framer-motion';

function Sombra1({eleccion}) {
  console.log(eleccion)
  return (
    <>
      {eleccion?.name === 'Chocolate' && (
       <motion.svg
       xmlns="http://www.w3.org/2000/svg"
       className="absolute top-0 left-0 -z-10"
       width="925" height="946" viewBox="0 0 925 946" fill="none"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 1.5 }}

   >
        <path d="M-95.4324 -3.13379C-189.206 188.447 -11.7402 315.047 -127.382 493.324C-254.765 689.708 -182.986 883.078 6.49165 938.675C195.969 994.272 322.58 684.639 542.246 712.749C879.613 755.905 1021.3 362.552 853.736 197.794C612.983 -38.921 806.471 -107.737 586.179 -277.472C418.312 -406.81 43.9222 -287.797 -95.4322 -3.10725L-95.4324 -3.13379Z" fill="#984A3B"/>
        </motion.svg>
      )}
      {eleccion?.name === 'Pistaccio' && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 -z-10"
          width="925"
          height="946"
          viewBox="0 0 925 946"
          fill="#769F21"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
  transition={{ duration: 1.5 }}
        >
          <path d="M-95.4324 -3.13384C-189.206 188.447 -11.7402 315.047 -127.382 493.324C-254.765 689.708 -182.986 883.078 6.49165 938.675C195.969 994.272 322.58 684.639 542.246 712.749C879.613 755.905 1021.3 362.552 853.736 197.794C612.983 -38.9211 806.471 -107.737 586.179 -277.472C418.312 -406.81 43.9222 -287.797 -95.4322 -3.1073L-95.4324 -3.13384Z" />
        </motion.svg>
      )}
      {eleccion?.name === 'Fresa' && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 -z-10"
          width="925"
          height="946"
          viewBox="0 0 925 946"
          fill="#F67B59"
          initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       duration={3}
       transition={{ duration: 1.5 }}
        >
          <path d="M-95.4324 -3.13379C-189.206 188.447 -11.7402 315.047 -127.382 493.324C-254.765 689.708 -182.986 883.078 6.49165 938.675C195.969 994.272 322.58 684.639 542.246 712.749C879.613 755.905 1021.3 362.552 853.736 197.794C612.983 -38.921 806.471 -107.737 586.179 -277.472C418.312 -406.81 43.9222 -287.797 -95.4322 -3.10725L-95.4324 -3.13379Z" />
        </motion.svg>
      )}
      {eleccion?.name === 'Blueberry' && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 -z-10"
          width="925"
          height="946"
          viewBox="0 0 925 946"
          fill="#643B5A"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
  transition={{ duration: 1.5 }}
        >
          <path d="M-95.4324 -3.13391C-189.206 188.447 -11.7402 315.047 -127.382 493.324C-254.765 689.708 -182.986 883.078 6.49165 938.675C195.969 994.272 322.58 684.639 542.246 712.749C879.613 755.905 1021.3 362.552 853.736 197.794C612.983 -38.9211 806.471 -107.737 586.179 -277.472C418.312 -406.81 43.9222 -287.797 -95.4322 -3.10738L-95.4324 -3.13391Z" />
        </motion.svg>
      )}
    </>
  );
}

export default Sombra1