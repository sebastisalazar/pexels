import React, { useState } from 'react'
import "./Formulario.css"
export const Formulario = ({addCategoria}) => {

    //inicio de formulario con array vacio como valor por defecto
    //const [categoria,setCategoria]= useState('')

    const handleSubmit=(ev)=>{
      ev.preventDefault();

      //console.log('desde formulario:',ev.target.busqueda)
      const {value}=ev.target.busqueda

        //setCategoria(value)
        addCategoria(value)
    } 


  return (
    <form onSubmit={handleSubmit} className='search-form'>
        <input type="text" name="busqueda" placeholder="Busqueda"/>
        <input type="submit" />
    </form>
  )
}
