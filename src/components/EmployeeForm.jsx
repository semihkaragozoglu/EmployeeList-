import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      fullname: "",
      email: "",
      maritalStatus: "",
      departmentId: ""
    };
    this.formSubmit = this.formSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      ...this.props.employee
    });
  }

  handleCheckBox = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ ...this.state, [name]: !this.state[name] });
  };

  handleChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ ...this.state, [name]: value });
  };

  handleChangeInteger = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ ...this.state, [name]: parseInt(value) });
  };

  formSubmit(e) {
    e.preventDefault();
    const { id, maritalStatus, fullname, email, departmentId } = this.state;
    const employee = { id, maritalStatus, fullname, email, departmentId };
    this.props.onSubmit(employee);
  }
  render() {
    const {
      departments,
      formLoading,
      formSuccess,
      formErrorMessage
    } = this.props;
    const { maritalStatus, fullname, email, departmentId } = this.state;
    return (
      <div>
        {formLoading ? (
          <p>Waiting For Response</p>
        ) : (
          <form onSubmit={this.formSubmit}>
            <FormGroup>
              <Label for="fullname">Name Surname</Label>
              <Input
                required
                type="text"
                name="fullname"
                id="fullname"
                placeholder="with a placeholder"
                value={fullname}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">E-Mail</Label>
              <Input
                required
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="with a placeholder"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup check>
              <Label check for="maritalStatus">
                <Input
                  onChange={this.handleCheckBox}
                  type="checkbox"
                  name="maritalStatus"
                  id="maritalStatus"
                  value={maritalStatus}
                  placeholder="with a placeholder"
                />
                Marital Status
              </Label>
            </FormGroup>

            <FormGroup>
              <Label for="departmentId">Department</Label>
              {!departments ? (
                <p>Departmants Not Found</p>
              ) : (
                <Input
                  required
                  type="select"
                  name="departmentId"
                  id="departmentId"
                  value={departmentId}
                  onChange={this.handleChangeInteger}
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  {departments &&
                    departments.map(dep => (
                      <option value={dep.id}>{dep.title}</option>
                    ))}
                </Input>
              )}
            </FormGroup>
            {formSuccess === false ? (
              <div>
                <div className={"alert alert-danger"}>{formErrorMessage}</div>
                <Button>Submit</Button>
              </div>
            ) : formSuccess === true ? (
              <div className={"alert alert-success"}>
                Form submitted succesfully!
              </div>
            ) : (
              <Button>Submit</Button>
            )}
          </form>
        )}
      </div>
    );
  }
}

export { EmployeeForm };
