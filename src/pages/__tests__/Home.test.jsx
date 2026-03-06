import { describe, it, expect } from 'vitest';
//screen, nos va a ayudar a poder revisar elementos en la pantalla
import { screen } from '@testing-library/react';
import renderWithRouter from '../../test/utils';
import { Home } from '../Home';

//describe agrupa pruebas relacionadas
describe('Tests del componente Home', () => {
  //it define una prueba individual
  it("debe renderizar el título", () => {
    //renderizamos el componente Home utilizando la función personalizada renderWithRouter
    renderWithRouter(<Home />);
    //queries de testing-library para buscar el título en la pantalla
    const titulo = screen.getByText("Bienvenido a E-Commerce");
    //expect para hacer una afirmación sobre el resultado esperado
    expect(titulo).toBeInTheDocument();
  })
});
