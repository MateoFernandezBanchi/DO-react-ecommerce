import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
 
const ModalBuyer = ( {data, total, errorValue, id} ) => {
  const [modal, setModal] = useState(false);
 const toggle = () => setModal(!modal);
  console.log(errorValue)
 
  
return (
        
    <div style={{ textAlign: "center" }}>
      <Button type='submit' onClick={toggle}>Finalizar Compra</Button>
      <Modal size="m" isOpen={modal} toggle={toggle}>
        <ModalHeader className='card-header'>Orden de compra</ModalHeader>
        <ModalBody style={{ height: "75vh" }}>
          
          <div>
          {errorValue? <><h2>No ha completado todos los datos</h2> <img className='w-50' src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="" srcset="" /> <h3>¡Vuelva a intentarlo!</h3></> :
              <><h1> ¡Gracias por su compra {data.name}! </h1><img className='w-50' src="https://almusan.com/images/2021/01/26/envio.camion.gif" alt="" srcset="" /><h3> Su pago por: $ {total} ya esta realizado</h3><h4> Su ID de compra es: {id} </h4><h4>En 3 dias recibirá su pedido</h4></>}
          </div>
        </ModalBody>
        <ModalFooter className='card-footer'>
          <Button color="success" onClick={toggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
 
export default ModalBuyer;