import './GridGallery.css'
import {useFetch } from '../hooks/useFetch';
import { Card } from './Card'
import { Paginacion } from './Paginacion';
import { useState } from 'react';

export const GridGallery = ({cat}) => { 

  //estado para la paginacion, por defecto 1 que seria la primera paginacion
  const [page, setPage] = useState(1);

  //const {fotos,cargando}= useLlamadaApi(cat,page)
  const {fotos,cargando}= useFetch(cat,page)

 // console.log(useFetch(cat,page))
    // This function is passed down to Paginacion to handle page changes
  const handlePageChange = (newPage) => {
    setPage(newPage); // Update the page state when a page is changed
  };

  //console.log(page)
  //console.log("respuesta de fetch recibida en gridgallery: ",fotos)

    return (
          <>
              <section>
                <p className='mb20'>Busqueda realizada: {cat}</p>
                <div className='grid mb20'>
                  {
                    
                    cargando?<h1>CARGANDO</h1>:

                    //si fotos no contiene nada
                    fotos.length==0?<p>Lo sentimos no se ha podido establecer conexion con la API</p>:

                    //si no se han encontrado busquedas
                    fotos.total_results==0?<p>Lo sentimos no se han obtenido resultados para {cat}</p>:

                    //si se han encontrado busquedas itera
                    fotos.photos.map((foto)=>(
                        <Card key={foto.id} foto={foto}/>
                      ))
                  }
                  
                </div>
                <div>
                  {
                    
                    //si no se han encontrado busquedas
                    fotos.total_results? 
                    <Paginacion key={fotos.page} total={fotos.total_results} page={fotos.page} next_page={fotos.next_page} onPageChange={handlePageChange}/>:''
                  }
                  
                </div>
              </section>
          </> 
    
    )
  
}
