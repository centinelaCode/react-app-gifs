
// llamada a la API por fuera del copponente
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    // console.log(images)
  }
    
  useEffect(() => {
    getImages();
  },[])

 
  return (
    <>
      <h3>{ category }</h3>

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
