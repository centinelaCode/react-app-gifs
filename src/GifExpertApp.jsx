import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  // States
  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories( [ "Samurai X", ...categories ] );
    // setCategories( cat => [...cat, "Valorant"] );  // por medio del callback de useState
  }

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        categories={ categories }
        setCategories={ setCategories }
      />

      {/* Listado de Gif (Grid de Gifs) */}
      {/* <button onClick={ onAddCategory } >Agregar</button> */}
      <ol>
        { categories.map(category => (
          <li key={ category }>{ category }</li>
        )) }
      </ol>
        {/* GifItem */}
    </>
  )
}
