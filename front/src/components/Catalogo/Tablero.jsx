import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../redux/prosupuestoSlice';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Tablero = () => {
  const dispatch = useDispatch();
  //const formattedTitle = title.toLowerCase().trim().replace(/\.$/, '').replace(/ /g, "");
  const count = useSelector((state) => state.presupuesto);
  console.log(count)
  return (
    <div className="bg-white text-black mx-8 mt-4 rounded-md h-[20rem] md:h-[30rem] w-[80%] overflow-y-auto">
      {Object.keys(count).length === 0 ? (
        <h1>Selecciona tu pedido</h1>
      ) : (
        Object.entries(count).map(([clave, valor]) => (
          <div key={clave} className="text-left pl-2 border-b ">
            <strong className='text-sm '>{capitalizeFirstLetter(clave)}:</strong> {valor}
          </div>
        ))
      )}
    </div>
  );
}

export default Tablero
// bols
// cubo
// ficusblanco
// ficusp
// formiosrubra
// incarústica
// jardinera
// mariana
// mate
// mixhelechos
// monstera
// oletexana
// palmito
// pinoslimon
// piramidal
// raphis
// sansiverias
// spathiphyllum
// sterlizian
// washintonia

