import './GridGallery.css'
import { useLlamadaApi } from '../hooks/useLlamadaApi';
import { Card } from './Card'
import { useEffect, useState } from "react";


export const GridGallery = ({cat}) => { 

  const {fotos,cargando}= useLlamadaApi(cat)

  
  return (
        <>
            <section >
              <h1>{cat}</h1>
              <div className='flexContainer'>
                {
                  cargando 
                  ?<h1>CARGANDO</h1>
                  :fotos.map((foto)=>(
                      <Card key={foto.id} foto={foto}/>

                  ))
                }

              </div>
            </section>
        </> 
   
  )
}
