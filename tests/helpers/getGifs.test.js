import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {

  test('debe retrornar un arreglo de gifs', async() => {
    
    const gifs = await getGifs('One Punch');
    // console.log(gifs) // trae el array d elos gifs

    // solo verifica .lenght >10
    expect( gifs.length ).toBeGreaterThan( 0 );  

    // verifica que el array en posicion 0 tenga un object con la estructura 
    // {id, title, url}
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    })

    
	})

});