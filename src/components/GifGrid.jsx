// llamada a la API por fuera del copponente
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifItem } from './GifItem';



export const GifGrid = ({ category }) => {

  // my Custo Hook para la petición a la API
  const { images, isLoading } = useFecthGifs( category );
  // console.log( isLoading );


  return (
    <>
      <h3>{ category }</h3>

      {
        isLoading && (<h2>Cargando...</h2>)
      }      

      <div className="card-grid">
        {
          // { ...image } significa exparcir todas las propiedades de image que son: title|id|url
          // para que todas las propiedas se pasen como props
          images.map( ( image ) => (                                             
            <GifItem 
              key={image.id}
              { ...image }              
            />
          ))
        }
      </div>
     
    </>
  )
}
