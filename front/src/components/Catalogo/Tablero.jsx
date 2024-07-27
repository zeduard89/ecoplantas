import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../redux/prosupuestoSlice';
import emailjs from 'emailjs-com'; // Asegúrate de instalar emailjs-com si no lo has hecho

// Variables de Entorno
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsUserId = import.meta.env.VITE_EMAILJS_USER_ID;

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Tablero = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.presupuesto);

  const handleEmailSend = () => {
    const templateParams = {
      // Ajusta estos parámetros según tu plantilla de EmailJS
      to_email: 'example@example.com', // Reemplaza con tu dirección de correo
      subject: 'Detalles del pedido',
      message: Object.entries(count).map(([clave, valor]) => `${capitalizeFirstLetter(clave)}: ${valor}`).join('\n'),
    };

    emailjs.send(emailJsServiceId, emailJsTemplateId, templateParams, emailJsUserId)
      .then(response => {
        console.log('Correo enviado con éxito', response);
        // Limpiar el contenido del tablero después de enviar el correo
        dispatch(reset());
      })
      .catch(error => {
        console.error('Error al enviar el correo', error);
      });
  };

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

