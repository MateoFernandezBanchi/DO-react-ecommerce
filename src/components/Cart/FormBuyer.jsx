import React, {useState} from 'react'
import {getFirestore} from '../../services/getFirestore';
import firebase from 'firebase';
import ModalBuyer from './ModalBuyer'
import { useCartContext } from '../../context/CartContext'
const FormBuyer = () => {
    const { CartList, cartTotal} = useCartContext ()

    const [formData, setFormData] = useState ( {
        name: '',
        email: '',
        email2:'',
        phone: ''
  
      } ) 
      const [error, guardarError] = useState (false)
      const [orderId, setOrderId] = useState ()
      const [submit, setSubmit] = useState (false)
      const [mensajeError, setMensajeError] = useState ('')
      

    const generarOrden = (e) => {
        e.preventDefault()
        if (formData.email.trim() === '' || formData.name.trim() === '' || formData.phone.trim()=== '') {
          guardarError(true)
          setMensajeError('Todos los campos son obligatorios')
          return;
        } 
        else if (formData.email !== formData.email2) {
          guardarError(true)
          setMensajeError('El email ingresado no es válido')
          console.log(formData.email)
          console.log(formData.email2)
          console.log(error)
          return;
         
        } else {
        guardarError(false)
        setSubmit (true)
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer = formData
        orden.total = cartTotal
        orden.items = CartList.map (cartItem => {
          const id = cartItem.id;
          const nombre = cartItem.nombre;
          const precio = cartItem.subtotal;
          return {id, nombre, precio}
        } )

      
        const dbQuery = getFirestore ()
        dbQuery.collection ('orders').add(orden)
        .then(({id} ) => { 
          setOrderId(id)  })
        .then(resp => console.log(resp))
        .catch (err=> console.log (err))   
            console.log (orderId)
  }}

    const handleChange = (e) => { setFormData ( {...formData,[e.target.name]: e.target.value})}

    return ( 
        <>
            <div className="container formContainer col-lg-3">
                
                <form className="d-flex flex-column container pt-5 pb-5 formContainer" 
                onSubmit={generarOrden} onChange={handleChange}>
                  <div className='form-group'>
                    <input className="form-control" type="text" name="name" placeholder="nombre" 
                    value={formData.name} onChange={handleChange}></input>
                  </div>
                  <div className='form-group'>
                    <input className="form-control" type="text" 
                    name="phone" placeholder="telefono" value={formData.phone} onChange={handleChange}></input>
                  </div>
                  <div className='form-group'>
                    <input className="form-control" type="text" 
                    name="email" placeholder="email" value={formData.email} onChange={handleChange}></input>
                  </div>
                  <div className='form-group'>
                    <input className="form-control" type="text" 
                    name="email2" placeholder="verifique email" value={formData.email2} onChange={handleChange}></input>
                  </div>
                  {error? <p className='btn-danger'> {mensajeError} </p> : null}
                  <div>
                    {submit ? <ModalBuyer data= {formData} total= {cartTotal} id= {orderId}/>
                    : <button className='buttonCount2' type='submit' onClick= {generarOrden} > Finalizar compra</button> }
                  </div>
                </form>
              </div>
        
        </>
     );
}
 
export default FormBuyer;