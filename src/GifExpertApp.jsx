import { useState } from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  console.log(categories);

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gif (Grid de Gifs) */}
      <ol>
        { categories.map(category => (
          <li key={ category }>{ category }</li>
        )) }
      </ol>
        {/* GifItem */}
    </>
  )
}
