import { createStore } from 'redux'
import menuReduce from './reduces/menuReduce'

const store = createStore(menuReduce)

export default store