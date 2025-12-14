
export const Paginacion = ({total,page,next_page}) => {
  return (
    <div>
      <p>{total}</p>
      <p>{page}</p>
      <p>{next_page}</p>
      <ul>
        <li><a href="">{page}</a></li>
        <li><a href={next_page}>{page+1}</a></li>
      </ul>
    </div>
  )
}
