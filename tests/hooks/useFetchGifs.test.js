import { renderHook, waitFor } from '@testing-library/react';
import { useFecthGifs } from '../../src/hooks/useFecthGifs';

describe('Pruebas en custom hook useFetchGifs', () => {

  test('debe de regresar el estado incial', () => {
    
    // simula una ejecución en un componente
    const { result } = renderHook( () => useFecthGifs('One Punch'))
    // console.log(result)

    // result retorna un objeto: 
    // { current: { images: [], isLoading: true} }

    // destructuramos de result.current => images y isLoading
    const { images, isLoading } = result.current;
    // console.log(images, isLoading)

    expect( images.length ).toBe( 0 );
    expect( isLoading ).toBe( true )    
	})


  test('debe retornar un arreglo de imagenes y isLoading en false', async() => {
    
    // simula una ejecución en un componente
    const { result } = renderHook( () => useFecthGifs('One Punch'))    
    
    // simulamos el espearar a que...images.length se amayor ue cero usando el waitFor
    await waitFor(
      () => expect( result.current.images.length  ).toBeGreaterThan(0)
    );
    
    const { images, isLoading } = result.current;
    // console.log(images, isLoading)

    expect( images.length ).toBeGreaterThan( 0 );
    expect( isLoading ).toBe( false )    
    
	})

});