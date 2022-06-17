import React from 'react'
import { connect } from 'react-redux'
import { FinanceHeader } from './FinanceHeader/FinanceHeader'
import FinanceRow from './FinanceRow/FinanceRow'

function findTicker(tickerName, arr) {
  return arr.find(el => tickerName === el.ticker)
}

export const Finance = ({ newTickers, prevTickers }) => {

  return (
    <ul className='finance' >
      <FinanceHeader />
      {
        newTickers.map(el => <FinanceRow newTicker={el} key={el.ticker} prevTicker={findTicker(el.ticker, prevTickers)} />)
      }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  newTickers: state.finance.newTickers,
  prevTickers: state.finance.prevTickers

})

export default connect(mapStateToProps)(Finance)