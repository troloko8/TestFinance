import { screen, render } from '@testing-library/react';
import App from '../../App';
import { renderWithRedux } from '../../helpers/renderWithRedux';
import { TimeInterval } from './TimeInterval';
import userEvent from "@testing-library/user-event";



describe('TimerInterval  test', () => {
  test('render RimetInterval', () => {
    render(renderWithRedux(<TimeInterval />))
    const title = screen.getByText(/Choose/)
    expect(title).toBeInTheDocument()
  })


  test('wotking TimerInterval functionality', async () => {
    render(renderWithRedux(<App />))

    const intervalSelect = screen.getByTestId('select-interval')
    const items = await screen.findAllByTestId('ticker-item')
    const priceFirstItem = items[0].children[3].textContent

    expect(intervalSelect.value).toBe('5000')
    userEvent.selectOptions(intervalSelect, ['10000'])
    expect(intervalSelect.value).toBe('10000')


    await new Promise((r) => setTimeout(r, 5000));
    expect(priceFirstItem).toEqual(items[0].children[3].textContent)
    await new Promise((r) => setTimeout(r, 5000));

    const newPriceFirstItem = items[0].children[3].textContent
    expect(priceFirstItem).not.toEqual(newPriceFirstItem)
    userEvent.selectOptions(intervalSelect, ['5000'])
  }, 15000)

})