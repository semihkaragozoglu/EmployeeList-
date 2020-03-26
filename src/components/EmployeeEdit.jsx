import React from "react";
import { connect } from "react-redux";
import { EmployeeForm } from "./EmployeeForm";
import { employeeService } from "../services";
import { employeeActions } from "../actions";
import { departmentHelper, employeeHelper } from "../helpers";

class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      employee: {},
      errorMessage: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    const { dispatch, departments } = this.props;
    if (!departments || departments.length == 0) {
      departmentHelper.getList(dispatch);
    }
    employeeService.getById(this.props.match.params.id).then(
      employee => {
        this.setState({ employee: employee, isLoading: false });
      },
      error => {
        this.setState({ errorMessage: error, isLoading: false });
      }
    );
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(employeeActions.refreshEmployeeForm());
  }

  onSubmit(employee) {
    const { dispatch } = this.props;
    employeeHelper.edit(dispatch, employee);
  }
  render() {
    const { isLoading, errorMessage, employee } = this.state;
    const {
      formLoading,
      formSuccess,
      formErrorMessage,
      departments
    } = this.props;
    return (
      <div>
        {isLoading ? (
          <p>Form is loading</p>
        ) : errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <EmployeeForm
            onSubmit={this.onSubmit}
            employee={employee}
            departments={departments}
            formLoading={formLoading}
            formSuccess={formSuccess}
            formErrorMessage={formErrorMessage}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { departments, isLoading } = state.departmentReducer;
  const { formLoading, formSuccess, formErrorMessage } = state.employeeReducer;
  return {
    isLoading,
    departments,
    formLoading,
    formSuccess,
    formErrorMessage
  };
}
const connectedEmployeeEdit = connect(mapStateToProps)(EmployeeEdit);
export { connectedEmployeeEdit as EmployeeEdit };
