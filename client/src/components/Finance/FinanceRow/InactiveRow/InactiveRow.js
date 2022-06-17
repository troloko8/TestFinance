import React from 'react'
import { connect } from 'react-redux'

import { toggleTicker } from './../../../../store/finance/action'

export const InactiveRow = ({ ticker, toggleTicker }) => {

  return (

    <li className='finance__item inactive' data-testid='inact-item' >
      <div className="finance__ticker">{ticker}</div>
      <div className="finance__exchange"> </div>
      <div className="finance__price"></div>
      <div className="finance__change"></div>
      <div className="finance__change-percent"></div>
      <div className="finance__divident"></div>
      <div className="finance__yield"></div>
      <div className="finance__timestamp"></div>
      <div
        className='finance__btn'
        onClick={() => toggleTicker(ticker)}
        data-testid='inact-btn'
      >+</div>
    </li >
  )
}

const MapDispathcToProps = {
  toggleTicker
}

export default connect(undefined, MapDispathcToProps)(InactiveRow)