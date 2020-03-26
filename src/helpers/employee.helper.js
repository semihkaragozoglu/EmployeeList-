import { employeeService } from "../services";
import { employeeActions } from "../actions";
import { history } from '../helpers/history';

export const employeeHelper = {
  getList,
  deleteEmployee,
  edit,
  add
};

function getList(dispatch) {
  dispatch(employeeActions.getEmployeesRequest());
  employeeService.getList().then(
    employees => {
      dispatch(employeeActions.getEmployeesSuccess(employees));
    },
    error => {
      dispatch(employeeActions.getEmployeesFailure(error));
    }
  );
}

function deleteEmployee(dispatch,id) {
  dispatch(employeeActions.deleteEmployeeRequest(id));
  employeeService.deleteById(id).then(
    employee => {
      dispatch(employeeActions.deleteEmployeeSuccess(id));
    },
    error => {
      dispatch(employeeActions.deleteEmployeeFailure(error));
    }
  );
}
function edit(dispatch, id) {
  dispatch(employeeActions.editEmployeeRequest(id));
  employeeService.updateById(id).then(
    employee => {
      dispatch(employeeActions.editEmployeeSuccess(employee));
      history.push('/');
    },
    error => {
      dispatch(employeeActions.editEmployeeFailure(error));
    }
  );
}
function add(dispatch, employee) {
  dispatch(employeeActions.addEmployeeRequest(employee.id));
  employeeService.insertEmployee(employee).then(
    employee => {
      dispatch(employeeActions.addEmployeeSuccess(employee));
      history.push('/');
    },
    error => {
      dispatch(employeeActions.addEmployeeFailure(error));
    }
  );
}