import React from 'react'

export const FinanceHeader = (props) => {

  return (
    <li className='finance__item-title' data-testid='ticker-header' >
      <div className="finance__ticker-title">Ticker</div>
      <div className="finance__exchange-title">Exchange</div>
      <div className="finance__price-title">Price</div>
      <div className="finance__change-title">Change</div>
      <div className="finance__change-percent-title">%</div>
      <div className="finance__divident-title">Divident</div>
      <div className="finance__yield-title">Yield</div>
      <div className="finance__timestamp-title">Time</div>
    </li>
  )
}
