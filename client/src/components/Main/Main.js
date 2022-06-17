import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import { connect } from 'react-redux'

import Finance from './../Finance/Finance';
import { setNewTicker } from './../../store/finance/action'
import { TimeInterval } from '../TimeInterval/TimeInterval';
import AddRemoveTicker from '../AddRemoveTicker/AddRemoveTicker';

function accertToUpdating(props, tickers, interval = 500000) {
  const newTimeStamp = Date.parse(tickers[0]?.last_trade_time)
  const oldTimeStamp = Date.parse(props.finance.newTickers[0]?.last_trade_time)

  if (Number.isNaN(oldTimeStamp)) {
    props.setNewTicker(tickers)
  } else if (newTimeStamp - oldTimeStamp >= +interval) {
    props.setNewTicker(tickers)
  }
}

const socket = io.connect('http://localhost:4000')
socket.emit('start');

const Main = (props) => {
  const [tickers, setTickers] = useState([])
  const [interval, setInterval] = useState(5000)


  useEffect(() => {
    socket.on("ticker", (obj) => {
      setTickers(obj)
    })

    return function () {
      socket.removeAllListeners()
    }
  }, [])

  useEffect(() => {
    accertToUpdating(props, tickers, interval)
  }, [tickers])

  return (
    <div className='wrapper' data-testid="main-elem">
      <TimeInterval interval={interval} fn={setInterval} />
      <Finance />
      <AddRemoveTicker />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { finance: state.finance }
}

const mapDispatchToProps = {
  setNewTicker
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)