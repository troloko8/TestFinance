import {
  SET_NEW_TICKER,
  TOGGLE_TICEKR
} from './action'
import { finance } from './reducer'

const arr = [
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
  { "ticker": "GOOGL", "exchange": "NASDAQ", "price": 237.08, "change": 154.38, "change_percent": 0.10, "dividend": 0.46, "yield": 1.18, "last_trade_time": "2021-04-30T11:53:21.000Z" },
  { "ticker": "MSFT", "exchange": "NASDAQ", "price": 261.46, "change": 161.45, "change_percent": 0.41, "dividend": 0.18, "yield": 0.98, "last_trade_time": "2021-04-30T11:53:21.000Z" },
  { "ticker": "AMZN", "exchange": "NASDAQ", "price": 260.34, "change": 128.71, "change_percent": 0.60, "dividend": 0.07, "yield": 0.42, "last_trade_time": "2021-04-30T11:53:21.000Z" },
  { "ticker": "FB", "exchange": "NASDAQ", "price": 266.77, "change": 171.92, "change_percent": 0.75, "dividend": 0.52, "yield": 1.31, "last_trade_time": "2021-04-30T11:53:21.000Z" },
  { "ticker": "TSLA", "exchange": "NASDAQ", "price": 272.13, "change": 158.76, "change_percent": 0.10, "dividend": 0.96, "yield": 1.00, "last_trade_time": "2021-04-30T11:53:21.000Z" }
]

const shortFinance = (type, arr, state = undefined) => {
  return finance(state, {
    type: type,
    payload: arr
  })
}

describe('Test finance reducer', () => {


  test('SET_NEW_TICKER test', () => {
    expect(shortFinance(SET_NEW_TICKER, arr).newTickers).toEqual(arr)

    expect(shortFinance(SET_NEW_TICKER, arr).newTickers).toStrictEqual(arr)

    expect(shortFinance(SET_NEW_TICKER, arr).newTickers).not.toBe(arr)

    expect(shortFinance(SET_NEW_TICKER, arr).newTickers[0]).not.toBe(
      shortFinance(SET_NEW_TICKER, arr).newTickers[0])

    expect(shortFinance(SET_NEW_TICKER, arr).newTickers[0]).toStrictEqual(
      shortFinance(SET_NEW_TICKER, arr).newTickers[0])

  })

  test('TOGGLE_TICEKR test', () => {

    const state = {
      firstTicker: arr,
      newTickers: arr,
      inactivatedTickers: []
    }

    const tickerName = arr[0].ticker
    const resultOfReducing = shortFinance(TOGGLE_TICEKR, tickerName, state)

    expect(resultOfReducing.inactivatedTickers[0].ticker).toBe(arr[0].ticker)

    expect(resultOfReducing.inactivatedTickers.length).toBe(arr.length)

    expect(resultOfReducing.inactivatedTickers.find(el => el.ticker === arr[0].ticker).inactive).toBe(true)


    expect(resultOfReducing.inactivatedTickers.find(el => el.ticker === arr[1].ticker).inactive).toBe(false)

    expect(
      shortFinance(TOGGLE_TICEKR, tickerName,
        resultOfReducing
      ).inactivatedTickers[0]).not.toBe(shortFinance(TOGGLE_TICEKR, tickerName, state).inactivatedTickers[0])
  })
})