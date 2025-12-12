const categoriaAbuscar=()=>{
    //return "patata"
    return `
        <div>
            <h1>COSA</h1>
        </div>
    `
  }

const cosa=()=>{
    const categoria=categoriaAbuscar();
    galeria(categoria)
}

const galeria=(categoria)=>{
    console.log(categoria)
}