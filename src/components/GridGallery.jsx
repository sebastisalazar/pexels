import './GridGallery.css'
import {useFetch } from '../hooks/useFetch';
import { Card } from './Card'
import { Paginacion } from './Paginacion';
import { useEffect, useState } from 'react';

export const GridGallery = ({cat}) => { 

  //estado para la paginacion, por defecto 1 que seria la primera paginacion
  const [page, setPage] = useState(1);

  //const {fotos,cargando}= useLlamadaApi(cat)
  const {fotos,cargando}= useFetch(cat,page)

    // This function is passed down to Paginacion to handle page changes
  const handlePageChange = (newPage) => {
    setPage(newPage); // Update the page state when a page is changed
  };

  //console.log(page)
  //console.log("respuesta de fetch recibida en gridgallery: ",fotos)

  return (
        <>
            <section>
              <h1 className='mb20'>{cat}</h1>
              <div className='grid mb20'>
                {
                  
                  cargando 
                  ?<h1>CARGANDO</h1>
                  :fotos.photos.map((foto)=>(
                      <Card key={foto.id} foto={foto}/>
                  ))
                }
                
              </div>
              <div>
                <Paginacion key={fotos.page} total={fotos.total_results} page={fotos.page} next_page={fotos.next_page} onPageChange={handlePageChange}/>
              </div>
            </section>
        </> 
   
  )
}
