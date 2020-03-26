import { employeeConstants } from "../constants/employee.constant";
const initState = { isLoading: false, employees: [] };

export default function employeeReducer(state = initState, action) {
  switch (action.type) {
    case employeeConstants.GET_EMPLOYEES_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case employeeConstants.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.employees,
        employeesLoaded: true, 
        isLoading: false
      };

    case employeeConstants.GET_EMPLOYEES_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case employeeConstants.DELETE_EMPLOYEE_REQUEST:
      return {
        ...state,
        selectedEmployeeId: action.id
      };

    case employeeConstants.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.filter(item => item.id !== action.id),
        selectedEmployeeId: null
      };

    case employeeConstants.DELETE_EMPLOYEE_FAILURE:
      return {
        ...state,
        selectedEmployeeId: null
      };

    case employeeConstants.EDIT_EMPLOYEE_REQUEST:
      return {
        ...state,
        formLoading: true
      };

    case employeeConstants.EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.map((employee, i) =>
          employee.id === action.employee.id ? { ...action.employee } : employee
        ),
        formLoading: false,
        formSuccess: true
      };

    case employeeConstants.EDIT_EMPLOYEE_FAILURE:
      return {
        ...state,
        formLoading: false,
        formErrorMessage: action.error,
        formSuccess: false
      };

    case employeeConstants.ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        formLoading: true
      };

    case employeeConstants.ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.employee],
        formLoading: false,
        formSuccess: true
      };

    case employeeConstants.ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        formLoading: false,
        formErrorMessage: action.error,
        formSuccess: false
      };

      case employeeConstants.REFRESH_EMPLOYEE_FORM:
        return {
          ...state,
          formLoading: false,
          formErrorMessage: null,
          formSuccess: null
        };
  

    default:
      return state;
  }
}
