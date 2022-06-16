import { useState } from "react"

export const AddCategory = ({ categories, setCategories }) => {  

  // States
  const [inputValue, setinputValue] = useState('')

  const onInputChange = (e) => {
    // console.log(e.target.value)
    setinputValue( e.target.value )
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // valida que no se permita agregar una string vacio
    if( inputValue.trim().length <=1 ) return
      
    // setCategories( [...categories, inputValue] ); // pasando por props las categories
    setCategories((cat) => [ inputValue, ...cat ]);  // usando el callback de la funcion setCategories
    setinputValue('');
        
  }

  return (
    <form 
      onSubmit={ (e) => onSubmit(e) }  // podemos enviar solo la referencia { onSubmit } 
    >
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ (e) => onInputChange(e) }  // podemos enviar solo la referencia { onInputChange }
      />
    </form>
  )
}
 