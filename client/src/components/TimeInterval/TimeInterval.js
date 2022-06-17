import React from 'react'

export const TimeInterval = ({ interval, fn }) => {

  return (
    <div className='timeInterval'>
      <h3 className='timeInterval__title'>Choose your interval of updating</h3>
      <select
        value={interval}
        onChange={(e) => fn(e.target.value)}
        data-testid="select-interval"
      >
        <option value='5000'>5 seconds</option>
        <option value='10000'>10 seconds</option>
        <option value='30000'>30 seconds</option>
        <option value='60000'>1 minute</option>
        <option value='300000'>5 minute</option>
      </select>
    </div>
  )
}