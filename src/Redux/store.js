import {creactStore} from 'react-redux'
import CakeReducer from './Cake/CakeReducer'

const store = creactStore(CakeReducer)

export default store