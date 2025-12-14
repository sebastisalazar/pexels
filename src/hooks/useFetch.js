import React, { useEffect, useState } from 'react'

export const useFetch = (cat) => {

  const [fotos, setFotos] = useState([]);
      
  const [cargando, setCargando] = useState(true);

  const connection=async()=>{

    setCargando(true)

    let query=`${import.meta.env.VITE_URLBASE}/search?query=${cat}&page=1&per_page=4&size=small&locale=es-ES`
    
    //console.log(query)
    try {
        const resp=await fetch(`${query}`,{method:'GET',headers:{'Authorization': import.meta.env.VITE_API_KEY},})
        
        //console.log(resp)

        if (resp.ok) {
            const data= await resp.json();

            //console.log(data)
            setFotos(data); //cambia el estado de fotos al que devuelve el fetch
        }else{
             throw `Ha habido un error al cargar el endpoint ${cat}`
        }

    } catch (error) {
        throw error
    }

    setCargando(false)
  }

  useEffect(() => {
        connection()
  }, [cat])


  return {
        fotos,
        cargando
    }
}
