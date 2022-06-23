import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => {


  test('debe de cambiar el valor de la caja de texto', () => {    
    // sujeto de prueba
    render( <AddCategory onNewCategory={ ()=> {} } />);
    // screen.debug();

    const input = screen.getByRole('textbox');
    // console.log(input.value);

    // simulamos que se ingreso en el input la plabra saitama
    fireEvent.input(input, { target: {value: 'Saitama'} });


    expect( input.value ).toBe('Saitama');
    // screen.debug();	  
	})


  test('debe de llamar onNewCategory si el input tien un valor', () => {    
    const inputValue = 'Saitama';
    // TODO:

    // sujeto de prueba
    render( <AddCategory onNewCategory={ ()=> {} } />);
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // simulamos los eventos
    fireEvent.input(input, { target: {value: inputValue} });
    fireEvent.submit(form);
    // screen.debug();	  

    expect( input.value ).toBe('');



    // expect( input.value ).toBe('Saitama');
	})
  

})