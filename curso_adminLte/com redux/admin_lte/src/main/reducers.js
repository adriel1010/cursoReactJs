import { combineReducers } from 'redux'
import todoReducer from '../components/todoReducer'

//criando o redux
const rootReducer = combineReducers ({
    // vai ser o estado da aplicação 
    todo:  todoReducer
})

export default rootReducer