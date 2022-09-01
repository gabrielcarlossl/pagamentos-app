import { combineReducers } from "redux";
import DashboardReducer from '../dashboard/dashboardReducer'

// definir o rootReducers, ele será a combinação de todos os reducers da aplicação 
const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer