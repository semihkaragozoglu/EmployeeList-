import { combineReducers } from 'redux'; 

import employeeReducer from './employee.reducer'; 
import departmentReducer from './department.reducer'; 

const rootReducer = combineReducers({
  employeeReducer,
  departmentReducer
})

export default rootReducer