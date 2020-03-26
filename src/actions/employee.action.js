import { employeeConstants } from '../constants/employee.constant';

export const employeeActions = {
    getEmployeesRequest, 
    getEmployeesSuccess,
    getEmployeesFailure,
    
    deleteEmployeeRequest,
    deleteEmployeeSuccess,
    deleteEmployeeFailure,

    addEmployeeRequest,
    addEmployeeSuccess,
    addEmployeeFailure,

    editEmployeeRequest,
    editEmployeeSuccess,
    editEmployeeFailure,
    refreshEmployeeForm,
};

function getEmployeesRequest() {
    return {
        type: employeeConstants.GET_EMPLOYEES_REQUEST
    };
}

function getEmployeesSuccess(employees) {
    return {
        type: employeeConstants.GET_EMPLOYEES_SUCCESS,
        employees
    };
}

function getEmployeesFailure(error) {
    return {
        type: employeeConstants.GET_EMPLOYEES_FAILURE,
        error
    };     
}

function deleteEmployeeRequest(id) {
    return {
        type: employeeConstants.DELETE_EMPLOYEE_REQUEST,
        id
    };
}

function deleteEmployeeSuccess(id) {
    return {
        type: employeeConstants.DELETE_EMPLOYEE_SUCCESS,
        id
    };
}

function deleteEmployeeFailure(id,error) {
    return {
        type: employeeConstants.DELETE_EMPLOYEE_FAILURE,
        error,
        id
    };     
}

function addEmployeeRequest() {
    return {
        type: employeeConstants.ADD_EMPLOYEE_REQUEST,
    };
}

function addEmployeeSuccess(employee) {
    return {
        type: employeeConstants.ADD_EMPLOYEE_SUCCESS,
        employee
    };
}

function addEmployeeFailure(error) {
    return {
        type: employeeConstants.ADD_EMPLOYEE_FAILURE,
        error
    };     
}

function editEmployeeRequest() {
    return {
        type: employeeConstants.EDIT_EMPLOYEE_REQUEST
    };
}

function editEmployeeSuccess(employee) {
    return {
        type: employeeConstants.EDIT_EMPLOYEE_SUCCESS,
        employee
    };
}

function editEmployeeFailure(error) {
    return {
        type: employeeConstants.EDIT_EMPLOYEE_FAILURE,
        error
    };     
}
function refreshEmployeeForm(){
    return{
        type: employeeConstants.REFRESH_EMPLOYEE_FORM,
    }
}
 
 