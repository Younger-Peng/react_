import { createStore } from 'redux'
import counterReducer from './reducer'

const initialState = {
  First: 0,
  Second: 10,
  Third: 20
}

const store = createStore(counterReducer, initialState)
export default store