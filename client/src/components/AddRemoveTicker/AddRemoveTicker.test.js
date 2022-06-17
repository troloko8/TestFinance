import { screen, render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from '../../App';
import { renderWithRedux } from '../../helpers/renderWithRedux';
import AddRemoveTicker from './AddRemoveTicker';

const testArr = [
  {
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "price": 279.29,
    "change": 64.52,
    "change_percent": 0.84,
    "dividend": 0.56,
    "yield": 1.34,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  },
  {
    "ticker": "Some",
    "exchange": "NASDAQ",
    "price": 279.29,
    "change": 64.52,
    "change_percent": 0.84,
    "dividend": 0.56,
    "yield": 1.34,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  }
]

describe('AddRemoveTicker', () => {
  test('render AddRemoveTicker', () => {
    render(renderWithRedux(<AddRemoveTicker />), { finance: { newTickers: testArr } })
    expect(screen.getByTestId('text-input')).toBeInTheDocument()
    expect(screen.getByTestId('select-input')).toBeInTheDocument()
    expect(screen.getByTestId('apply-btn')).toBeInTheDocument()
  })


  test('events in AddRemoveTicker', async () => {
    render(renderWithRedux(<App />))

    const inputText = screen.getByTestId('text-input')
    const btn = screen.getByTestId('apply-btn')
    userEvent.type(inputText, '123')
    const items = await screen.findAllByTestId('ticker-item')

    userEvent.click(btn)
    await new Promise((r) => setTimeout(r, 6000));
    const newItems = await screen.findAllByTestId('ticker-item')
    expect(newItems.length).toBe(items.length + 1)


    const inputSelect = screen.getByTestId('select-input')
    userEvent.selectOptions(inputSelect, ['123'])
    userEvent.click(btn)

    await new Promise((r) => setTimeout(r, 6000));

    const newestItems = await screen.findAllByTestId('ticker-item')
    expect(newestItems.length).toBe(items.length)
  }, 15000)

})