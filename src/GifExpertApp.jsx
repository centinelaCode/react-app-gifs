import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // States
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    // console.log(newCategory);

    // validación para no permitir categorias repetidas
    if( categories.includes(newCategory) ) return;

    setCategories( [ newCategory, ...categories ] );
    // setCategories( cat => [...cat, "Valorant"] );  // por medio del callback de useState
  }

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>


      {/* Component for Input */}
      <AddCategory         
        // setCategories={ setCategories }
        onNewCategory={ (value)=> onAddCategory(value) }
      />


      {/* Listado de Gif (Grid de Gifs) */}
        {/* GifItem */}      
      { categories.map(category => (
        <GifGrid 
          key={ category }
          category={ category }
        />
      )) }
              
    </>
  )
}
