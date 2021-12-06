import React, { useState } from "react";
import { useCartContext } from '../../context/CartContext';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";



const ModalBuyer = ( {data, total, id} ) => {
  const {setCartList} = useCartContext ()   
  const [modal, setModal] = useState(false);
 const toggle = () => { setModal(!modal);}
 const cleanCart = () => { setCartList([]);}

 
  
return (
        
    <div style={{ textAlign: "center" }}>
      <Button type='submit' onClick={toggle}>Orden de compra</Button>
      <Modal size="m" isOpen={modal} toggle={toggle}>
        <ModalHeader className='card-header'>Orden de compra</ModalHeader>
        <ModalBody style={{ height: "65vh" }}>
          
          <div>
          <h2> ¡Gracias por su compra {data.name}! </h2>
          <img className='w-50' src="https://almusan.com/images/2021/01/26/envio.camion.gif" alt="" srcset="" />
          <h3> Su pago por: $ {total} ya esta realizado</h3>
          <h4> Su ID de compra es: {id} </h4><h4>En 3 dias recibirá su pedido</h4>
          </div>
        </ModalBody>
        <ModalFooter className='card-footer'>
         <Button color="success" onClick={cleanCart}>
            OK
          </Button>
         
        </ModalFooter>
      </Modal>
    </div>
  );
};
 
export default ModalBuyer;