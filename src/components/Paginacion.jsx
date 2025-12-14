export const Paginacion = ({ page, total, next_page, onPageChange}) => {

  //resultados por pagina
  const perPage = 4;

  const totalButtons=10;
  
  // calculo del total de paginas
  const totalPages = total / perPage;

  

  const calcularRango = () => {
    // Calcular grupo actual: (página actual - 1) dividido por totalButtons
    // Convertir a entero dividiendo y truncando
    const grupoActual = parseInt((page - 1) / totalButtons);
    
    // Calcula el primer botón del grupo actual
    const firstButton = grupoActual * totalButtons + 1;
    
    // Calcula el último botón del grupo actual
    let lastButton = firstButton + totalButtons - 1;
    
    // Asegura que no exceda el total de páginas
    if (lastButton > totalPages) {
      lastButton = totalPages;
    }
    
    return { firstButton, lastButton };
  };

  const { firstButton, lastButton } = calcularRango();

   // Crea el array de números de página
  const pageNumbers = [];
  for (let i = firstButton; i <= lastButton; i++) {
    pageNumbers.push(i);
  }


  // Hanlde para ir a la pagina donde se hace click
  const handleGoToPage = (pageNum) => {
    if (pageNum !== page) { //si la pagina en la que se encuentra es distinta a la que se ha echo click
      onPageChange(pageNum);//setea el numero de pagina en el padre
    }
  };

  // Handle solo para el boton de ir a la anterior pagina
  const handlePreviousPage = () => {
    if (page > 1) { //si la pagina es mayor a 1
      onPageChange(page-1);
    }
  };
  // Handle solo para el boton de ir a la siguiente pagina
  const handleNextPage = () => {
    if (page < totalPages) {//si la pagina es menor que la ultima
      onPageChange(page+1);
    }
  };
  return (
    <div>
      {
        <div>
          {/* Boton atras */}
          <button disabled={page <= 1} onClick={handlePreviousPage}>
            Anterior
          </button>

          {/* Numeracion paginas */}
          {pageNumbers.map((pageNum) => (
            <button key={pageNum} onClick={() => handleGoToPage(pageNum)}>
              {pageNum}
            </button>
          ))}

          {/* Boton siguiente */}
          <button onClick={handleNextPage}>
            Siguiente
          </button>
        </div>
      }
    </div>
  );
};
