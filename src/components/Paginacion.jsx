import "./Paginacion.css"
export const Paginacion = ({ page, total, onPageChange}) => {

  //resultados por pagina
  const perPage = 4;

  // calculo del total de paginas
  const totalPages = total / perPage;

  // El primer boton (al inicio)
  let firstButton = 1;
    
  // El ultimo boton sera el valor 10(al inicio)
  let lastButton = 10;

  // cuando el page sea mayor al lastButton actual, salta al siguiente grupo de 10
  while (page > lastButton) {
    firstButton = lastButton + 1;
    lastButton = firstButton + 9;
  }
  
  // Si el último botón pasa del total, se ajusta
  if (lastButton > totalPages) {
    lastButton = totalPages;
  }

   // Crea el array de números de página
  const pageNumbers = [];

  // Guarda el numero de los botones en el array
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

  const handleLastPage = () => {
      onPageChange(totalPages); //setea el estado en el padre
  };

  const handleFirstPage = () => {
      onPageChange(1); ////setea el estado en el padre
  };


  return (
    <div>
      {
        <div className="pagination">

          {/* Boton Primera pagina */}
          <button disabled={page <= 1} onClick={handleFirstPage}>
            Primera página
          </button>

          {/* Boton atras */}
          <button disabled={page <= 1} onClick={handlePreviousPage}>
            Atras
          </button>

          {/* Numeracion paginas */}
          {pageNumbers.map((pageNum) => (
            <button key={pageNum} onClick={() => handleGoToPage(pageNum) } className={pageNum === page ? 'currentPage' : ''}>
              {pageNum}
            </button>
          ))}

          {/* Boton siguiente */}
          <button disabled={page == totalPages} onClick={handleNextPage}>
            Siguiente
          </button>

          {/* Boton Ultmima pagina */}
          <button disabled={page == totalPages} onClick={handleLastPage}>
            Ultima página
          </button>
        </div>
      }
    </div>
  );
};
