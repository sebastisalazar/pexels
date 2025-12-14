import "./Paginacion.css"
export const Paginacion = ({ total, page, setPage }) => {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Anterior
      </button>

      <span>Página {page}</span>

      <button onClick={() => setPage(page + 1)}>
        Siguiente
      </button>
    </div>
  )
}

