
import { useState } from 'react'
import { GridGallery } from './GridGallery'
import { Formulario } from './Formulario'
export const Galeria = () => {

  //const categorias=["naturaleza","tecnologia"] //almacena busquedas hechas
  const [categorias,setCategorias]=useState([])
  const addCategoria=(valor)=>{

    //comprobar si existe palabra en categorias
    
      setCategorias([...categorias,valor])

      //console.log('valor recibido en Galeria',valor)
      
  }

  return (  
    <>
      <Formulario addCategoria={addCategoria}/>
      
    { 
      categorias.map((cat)=>(
       
        //console.log(cat)

              //GRID GALLERY
        <GridGallery key={cat} cat={cat}/>
                  //cards
                  //paginacion
          
      ))
    }
         
    </>
  )
}
