import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from './helpers/renderWithRedux';

test('render Main component', () => {
  render(renderWithRedux(<App />));
  const mainElem = screen.getByTestId('main-elem')
  expect(mainElem).toBeInTheDocument();
});
