import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
        <input type="text" name="busqueda" placeholder="Busqueda"/>
        <input type="submit" />
    </form>
  )
}
