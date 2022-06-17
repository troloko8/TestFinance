export const SET_NEW_TICKER = 'SET_NEW_TICKER'
export const TOGGLE_TICEKR = 'TOGGLE_TICEKR'


export const setNewTicker = (obj) => ({
  type: SET_NEW_TICKER,
  payload: obj
})

export const toggleTicker = (name) => ({
  type: TOGGLE_TICEKR,
  payload: name
})