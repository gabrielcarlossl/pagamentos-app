import { combineReducers } from "redux";

import { reducer as formReducer} from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

// definir o rootReducers, ele será a combinação de todos os reducers da aplicação 
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer, // TabReducer agora é responsavel pela parte do estado dos components TAB
    billingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer