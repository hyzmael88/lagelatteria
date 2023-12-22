import Image from "next/image";
import React from "react";

function Helado({ helado, eleccion, setEleccion }) {
  return (
    <div
      className="w-[102px] h-[102px] relative cursor-pointer"
      onClick={() => setEleccion(helado)}
    >
      <Image
        src={helado.image}
        alt={helado.name}
        className="w-full h-full object-contain"
      />
      <div
        className={`h-[4px] absolute -bottom-5 bg-white rounded-[10px] transition-all duration-300 transform ${
          eleccion?.name === helado.name ? "w-full" : "w-[0px]"
        }`}
      />
    </div>
  );
}

export default Helado;
