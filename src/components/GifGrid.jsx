
// llamada a la API por fuera del copponente
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';



export const GifGrid = ({ category }) => {
  
  // const [first, setfirst] = useState(second)

  useEffect(() => {
    getGifs(category);
  },[])

 
  return (
    <>
      <h3>{ category }</h3>
     
    </>
  )
}
