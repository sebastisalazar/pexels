
import { createClient } from "pexels";
import { useEffect, useState } from "react";

export const useLlamadaApi = (cat) => {

    //fotos: almacena fotos  // setFotos: estado Inicial del resultado de fetch, array vacio
    const [fotos, setFotos] = useState([]);
    
    const [cargando, setCargando] = useState(true);

    const llamadaApi = createClient(import.meta.env.VITE_API_KEY);
    
    const consulta=()=>{
        setCargando(true)
        llamadaApi.photos //objeto del cliente pexels
          .search({ query: cat,size:"medium",page:1,per_page:4,locale:"es-ES" }) //categoria a buscar + propiedades de la API
          .then((result) => { //resuelve promesa
            //console.log(result)
            setFotos(result.photos); //remplaza el valor de Fotos en useState
          }).catch((error)=>{
            console.log(error)
          });
           setCargando(false)
    }

    useEffect(() => {
      consulta()
    }, [cat])
      

  return {
            fotos,
            cargando
        }
}
