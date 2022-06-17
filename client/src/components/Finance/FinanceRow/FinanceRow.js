import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { toggleTicker } from './../../../store/finance/action'
import InactiveRow from './InactiveRow/InactiveRow'

export function getClass(firstValue, newValue) {

  if (+firstValue > +newValue) {
    return 'increased'
  } else if (+firstValue < +newValue) {
    return 'decreased'
  } else {
    return ''
  }
}

export function getInactiveState(tickerName, inactivatedArr) {
  return inactivatedArr.find((el) => el.ticker === tickerName)?.inactive
}

const FinanceRow = (props) => {

  const { ticker, exchange, price, change, change_percent, dividend, last_trade_time: time, yield: newYield } = props.newTicker
  const {
    price: firstPrice,
    change: firstChange,
    change_percent: firstChange_percent,
    dividend: firstDividend,
    yield: firstYield

  } = props.prevTicker ?? props.newTicker

  if (getInactiveState(ticker, props.inactivatedTickers)) {
    return <InactiveRow ticker={ticker} />
  }

  return (
    <li className='finance__item'
      data-testid='ticker-item'
    >
      <div className="finance__ticker">{ticker}</div>
      <div className="finance__exchange">{exchange}</div>
      <div className={`finance__price ${getClass(firstPrice, price)}`}>{price}</div>
      <div className={`finance__change ${getClass(firstChange, change)}`}>{change}</div>
      <div className={`finance__change-percent ${getClass(firstChange_percent, change_percent)}`}>{change_percent}</div>
      <div className={`finance__divident ${getClass(firstDividend, dividend)}`}>{dividend}</div>
      <div className={`finance__yield ${getClass(firstYield, newYield)}`}>{newYield}</div>
      <div className="finance__timestamp">{moment(time).format('h:mm:ss')}</div>
      <div
        className='finance__btn'
        onClick={() => props.toggleTicker(ticker)}
        data-testid='act-btn'
      >-</div>
    </li >
  )
}

const mapStateToProps = (state) => ({
  inactivatedTickers: state.finance.inactivatedTickers,
})

const mapDispatchToProps = {
  toggleTicker
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanceRow)