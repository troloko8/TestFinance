import React, { useState } from 'react'
import { connect } from 'react-redux'
import { io } from "socket.io-client";
const socket = io.connect('http://localhost:4000')


function addRemove(e, addName, removeName) {
  if (Boolean(addName) || Boolean(removeName)) {
    if (Boolean(addName)) {
      socket.emit('addOrRemove', addName)
    }
    if (Boolean(removeName)) {
      socket.emit('addOrRemove', removeName)
    }
    alert('Great, whait pls new updating to see result')
  } else {
    alert('Ooops I suppose you forgot choose action')
  }

}

function checkFor(value, arr, setState) {
  const arrOfNames = arr.map(el => el.ticker)
  if (arrOfNames.includes(value)) {
    setState('')
    alert(`You already have this ticker try choose another one`)
  }
}

const AddRemoveTicker = (props) => {
  const [nameOfAdding, setNameOfAdding] = useState('')
  const [nameOfRemoving, setNameOfRemoving] = useState('')

  return (
    <div className='addRemove' onSubmit={e => {
      e.preventDefault()
      setNameOfAdding('')
      setNameOfRemoving('')
    }}>
      <form className='addRemove__form'>
        <div className='addRemove__container'>
          <div className='addRemove__add'>
            <h3 className='addRemove__title' >Name ticker which you wand to add</h3>
            <input
              data-testid='text-input'
              value={nameOfAdding}
              onChange={(e) => setNameOfAdding(e.target.value)}
              onBlur={e => checkFor(e.target.value, props.newTickers, setNameOfAdding)}
              className='addRemove__input-add'
              type='text'
              placeholder='Type ticker name'
            />
          </div>
          <div className='addRemove__remove'>
            <h3 className='addRemove__title' >Name ticker which you wand to delete</h3>
            <select
              data-testid='select-input'
              value={nameOfRemoving}
              onChange={(e) => setNameOfRemoving(e.target.value)}
            >
              <option value=''>Choose ticker</option>
              {props.newTickers.map(el => <option key={el.ticker} value={el.ticker}>{el.ticker}</option>)}
            </select>
          </div>

          <button
            data-testid='apply-btn'
            onClick={(e) => addRemove(e, nameOfAdding, nameOfRemoving)}
            className='addRemove__btn'
          >
            Apply
          </button>
        </div>
      </form>
    </div >
  )
}

const mapStateToProps = (state) => ({
  newTickers: state.finance.newTickers
})


export default connect(mapStateToProps)(AddRemoveTicker)