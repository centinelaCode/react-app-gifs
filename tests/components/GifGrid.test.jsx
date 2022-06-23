import { fireEvent, render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFecthGifs } from '../../src/hooks/useFecthGifs';

jest.mock('../../src/hooks/useFecthGifs');

describe('Pruebas en <GifGrid />', () => {
  
  const category = 'One Punc';

  test('debe de mostrar el loading inicalmente ', () => {  

    // simulación de lo que nos retorna el useFetchGifs
    useFecthGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    // preparamos sujeto de preubas
    render( <GifGrid category={ category } />)
    // screen.debug();

    expect ( screen.getByText('Cargando...') );
    expect ( screen.getByText( category ) );
   
	})
 


  test('debe de mostrar items cuando se cargan las imagenes del useFetcGifs', () => {  

    // simulación del array que retorna el useFecthGifs
      const gifs = [
        {
          id: 'ABC',
          title: 'Saitama',
          url: 'https://localhost/saitama.jpg'
        },
        {
          id: '123',
          title: 'goku',
          url: 'https://localhost/goku.jpg'
        }
      ]

      // simulación de lo que nos retorna el useFetchGifs
      useFecthGifs.mockReturnValue({
        images: gifs,
        isLoading: false
      })

    // preparamos sujeto de preubas
    render( <GifGrid category={ category } />)
    // screen.debug()

    // se evalua que se hayan renderizado 2 imagenes
    expect( screen.getAllByRole('img').length ).toBe(2);


	})


  

})