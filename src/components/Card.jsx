import './Card.css'
export const Card = ({foto}) => {

  console.log(foto)
 const {photographer}=foto
  return (
    <article className='card'>
        {/* <img src={url} alt={desc} /> */}
        {/* <p>{desc}</p> */}
        <h3>{photographer}</h3>

    </article>
  )
}
