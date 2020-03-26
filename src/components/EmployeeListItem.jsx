import * as React from "react";
import { Link } from "react-router-dom";

export default class EmployeeListItem extends React.PureComponent {
  render() {
    const {
      id,
      fullname,
      email,
      maritalStatus,
      departmentId
    } = this.props.data;
    const { deleteEmployee, departmentTitle, selectedEmployeeId } = this.props;
    return (
      <tr key={`employee_${id}`}>
        <td>{fullname}</td>
        <td>{email}</td>
        <td>{maritalStatus ? "Evli" : "Bekar"}</td>
        <td> {departmentTitle(departmentId)}</td>
        <td>
          <Link to={"/employee/" + id}>
            <button className="btn btn-info ">
              <span>Edit</span>
            </button>
          </Link>
        </td>
        <td>
          <button
            onClick={() => {
              deleteEmployee(id);
            }}
            className="btn btn-danger"
            disabled={selectedEmployeeId === id}
          >
            <span>Delete 
            </span> 
          </button>
          {selectedEmployeeId == id && (
              <img className={'image-loader'} src="https://samherbert.net/svg-loaders/svg-loaders/spinning-circles.svg" />
            )} 
        </td>
      </tr>
    );
  }
}
