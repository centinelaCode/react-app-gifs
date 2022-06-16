import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  // States
  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategory = ( newCategory ) => {
    // console.log(newCategory);

    setCategories( [ newCategory, ...categories ] );
    // setCategories( cat => [...cat, "Valorant"] );  // por medio del callback de useState
  }

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory         
        // setCategories={ setCategories }
        onNewCategory={ (value)=> onAddCategory(value) }
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
