import './GridGallery.css'
import { useLlamadaApi } from '../hooks/useLlamadaApi';
import {useFetch } from '../hooks/useFetch';
import { Card } from './Card'
import { Paginacion } from './Paginacion';

export const GridGallery = ({cat}) => { 

  //const {fotos,cargando}= useLlamadaApi(cat)
  const {fotos,cargando}= useFetch(cat)

  console.log("respuesta de fetch recibida en gridgallery: ",fotos)
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
                {
                  <Paginacion key={fotos.page} 
                  total={fotos.total_results} 
                  page={fotos.page} 
                  next_page={fotos.next_page}/> 
                  }
              </div>
            </section>
        </> 
   
  )
}
