import { combineReducers } from "redux";


// definir o rootReducers, ele será a combinação de todos os reducers da aplicação 
const rootReducer = combineReducers({
    dashboard: () => ({summary: {credit: 100, debt:50}})
})

export default rootReducer