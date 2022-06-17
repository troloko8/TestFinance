import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { finance } from './finance/reducer'


const rootReducer = combineReducers({
  finance
})

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  })
}