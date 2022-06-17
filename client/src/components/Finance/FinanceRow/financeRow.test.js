import { render } from '@testing-library/react';
import { renderWithRedux } from '../../../helpers/renderWithRedux';
import FinanceRow, { getClass } from './FinanceRow'
import { getInactiveState } from './FinanceRow'

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
  }
]

const inactivatedTickers = [
  { ticker: 'a', inactive: false },
  { ticker: 'b', inactive: false },
  { ticker: 'c', inactive: true },
]

describe('FinanceRow tests', () => {
  test('for getClass fynction', () => {
    expect(getClass(1, 2)).toBe('decreased')
    expect(getClass(2, 1)).toBe('increased')
    expect(getClass(1, 1)).toBe('')

    expect(getClass(-1, -1)).toBe('')
    expect(getClass(-1, -3)).toBe('increased')
    expect(getClass(-31, -1)).toBe('decreased')

    expect(getClass(1.33, 0.55)).toBe('increased')
    expect(getClass(0.89, 0.9)).toBe('decreased')
    expect(getClass(0.1, 0.1)).toBe('')

    expect(getClass(-0.5, -0.1)).toBe('decreased')
    expect(getClass(-0.1, -0.5)).toBe('increased')
    expect(getClass(-0.1, -0.1)).toBe('')

    expect(getClass('1', '2')).toBe('decreased')
    expect(getClass('2', '1')).toBe('increased')
    expect(getClass('1', '1')).toBe('')

    expect(getClass(undefined, undefined)).toBe('')
    expect(getClass(null, null)).toBe('')
    expect(getClass(null, undefined)).toBe('')
  })

  test('getInactiveState', () => {
    expect(getInactiveState('a', inactivatedTickers)).toBe(false)
    expect(getInactiveState('c', inactivatedTickers)).toBe(true)
    expect(getInactiveState('f', inactivatedTickers)).toBe(undefined)
    expect(getInactiveState(undefined, inactivatedTickers)).toBe(undefined)
  })


  test('render Finance Row', () => {
    render(renderWithRedux(<FinanceRow newTicker={testArr} />))
  })

})