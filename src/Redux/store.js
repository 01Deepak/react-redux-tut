// import { createStore } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import CakeReducer from './Cake/CakeReducer'

const store = createStore(CakeReducer)

export default store