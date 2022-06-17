import {
  SET_NEW_TICKER,
  TOGGLE_TICEKR
} from './action'

const IniState = {
  firstTicker: [],
  newTickers: [],
  prevTickers: [],
  inactivatedTickers: []
}

function checkForExistArr(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1
  } else {
    return arr2
  }
}

function checkingForMatchName(el, name) {
  const inactive = Boolean(el.inactive)

  if (el.ticker === name) {
    const inactive = !el.inactive ? true : !el.inactive
    return { ticker: el.ticker, inactive: inactive }
  }

  return Object.assign({}, { ticker: el.ticker }, { inactive: inactive })
}


function toggleDepickting(name, newTickers, inactTickres) {
  let arr = checkForExistArr(newTickers, inactTickres)

  return arr.map((el) => {
    return checkingForMatchName(el, name)
  })
}


export const finance = (state = IniState, action) => {

  switch (action.type) {
    case SET_NEW_TICKER:
      return Object.assign({}, state,
        { prevTickers: JSON.parse(JSON.stringify(state.newTickers)) },
        { newTickers: JSON.parse(JSON.stringify(action.payload)) },
      )
    case TOGGLE_TICEKR:
      return Object.assign({}, state,
        { inactivatedTickers: toggleDepickting(action.payload, state.newTickers, state.inactivatedTickers) })

    default:
      break
  }

  return state
}