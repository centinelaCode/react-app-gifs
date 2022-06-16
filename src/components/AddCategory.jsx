import { useState } from "react"

export const AddCategory = () => {

  const [inputValue, setinputValue] = useState('')

  const onInputChange = (e) => {
    // console.log(e.target.value)
    setinputValue( e.target.value )
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue)
    
  }

  return (
    <form 
    onSubmit={ (e) => onSubmit(e) }
    >
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ (e) => onInputChange(e) }
      />
    </form>
  )
}
 