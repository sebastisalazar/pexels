import './Card.css'
export const Card = ({foto}) => {

  //console.log(foto)
 const {src,alt}=foto

  return (
    <article className='card'>
        <img src={src.small} alt={alt} />
         <p>{alt}</p>

    </article>
  )
}
