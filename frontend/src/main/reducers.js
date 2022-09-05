import { combineReducers } from "redux";

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from "../common/tab/tabReducer";

// definir o rootReducers, ele será a combinação de todos os reducers da aplicação 
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer // TabReducer agora é responsavel pela parte do estado dos components TAB
})

export default rootReducer