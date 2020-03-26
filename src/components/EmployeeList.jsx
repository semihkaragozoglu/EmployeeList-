import React from "react";
import { connect } from "react-redux";
import { employeeHelper } from "../helpers";
import { employeeService } from "../services";
import { departmentHelper } from "../helpers";
import EmployeeListItem from "./EmployeeListItem";

class EmployeeList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  getDepartmentTitle = id => {
    const department = this.props.departments.find(x => x.id === id);
    return (department && department.title) || "";
  };
  componentDidMount() { 
    const { dispatch, departments, employeesLoaded } = this.props; 
    if (!employeesLoaded) {
      employeeHelper.getList(dispatch);
    }
    if (!departments || departments.length == 0) {
      departmentHelper.getList(dispatch);
    }
  }
  deleteEmployee(id) {
    const { dispatch } = this.props;
    employeeHelper.deleteEmployee(dispatch, id);
  }
  render() {
    const {
      employees,
      departments,
      isLoading,
      selectedEmployeeId
    } = this.props;

    return (
      <div className="content">
        {isLoading || !departments ? (
          <p>loading</p>
        ) : (
          <table className={"table table-striped"}>
            <thead>
              <tr>
                <th>Ad</th>
                <th>Email</th>
                <th>Medeni Durum</th>
                <th>Departman</th>
                <th>Güncelle</th>
                <th style={{ width: "150px" }}>Sil</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(item => (
                <EmployeeListItem
                  data={item}
                  selectedEmployeeId={selectedEmployeeId}
                  departmentTitle={this.getDepartmentTitle}
                  deleteEmployee={this.deleteEmployee}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    isLoading,
    employees,
    selectedEmployeeId,
    employeesLoaded,
  } = state.employeeReducer;
  const { departments } = state.departmentReducer;
  return {
    isLoading,
    employees,
    departments,
    selectedEmployeeId,
    employeesLoaded
  };
}

const connectedEmployeeList = connect(mapStateToProps)(EmployeeList);
export { connectedEmployeeList as EmployeeList };
