import { combineReducers } from 'redux'
import page from './page'
import user from './user'

const initialState = {
  name: 'Alex',
  surname: 'Elizarov',
  age: 26
};

export default function userstate(state = initialState) {
  return state
}

export default combineReducers({
  page,
  user
})