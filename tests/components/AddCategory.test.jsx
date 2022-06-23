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
    const onNewCategory = jest.fn();

    // sujeto de prueba
    render( <AddCategory onNewCategory={ onNewCategory } />);
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // simulamos los eventos
    fireEvent.input(input, { target: {value: inputValue} });
    fireEvent.submit(form);
    // screen.debug();	  
    expect( input.value ).toBe('');

    // evaluamo la funcion haya sido llamada
    expect( onNewCategory ).toHaveBeenCalled();

    // evaluamo la funcion haya sido llamada solo una vez
    expect( onNewCategory ).toHaveBeenCalledTimes(1);

    // evalua que haya sido llamada con el valor del inputvalue (='saitama')
    expect( onNewCategory ).toHaveBeenCalledWith(inputValue);    
	})

  test('no debe de llamar el onNewCategory si el input esta vacio', () => {

    const onNewCategory = jest.fn();

    // sujeto de prueba
    render( <AddCategory onNewCategory={ onNewCategory } />);

    // const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // simulamos los eventos
    fireEvent.submit(form);

    // evaluamo la funcion haya sido llamada solo una vez
    expect( onNewCategory ).toHaveBeenCalledTimes(0);

    //Otra forma de hacerlo con la negación
    expect( onNewCategory ).not.toHaveBeenCalled();

  })
  

})