import { fetchHelper, authHeader } from "../helpers";
const apiUrl = "http://localhost:3004/";
export const employeeService = {
  getList,
  getById,
  updateById,
  insertEmployee,
  deleteById
};

function getList() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(apiUrl + "employees", requestOptions).then(
    fetchHelper.handleResponse,
    fetchHelper.handleError
  );
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(apiUrl + "employees/" + id, requestOptions).then(
    fetchHelper.handleResponse,
    fetchHelper.handleError
  );
}

function updateById(employee) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  };

  return fetch(apiUrl + "employees/" + employee.id, requestOptions).then(
    fetchHelper.handleResponse,
    fetchHelper.handleError
  );
}

function insertEmployee(employee) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  };

  return fetch(apiUrl + "employees/", requestOptions).then(
    fetchHelper.handleResponse,
    fetchHelper.handleError
  );
}

function deleteById(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(apiUrl + "employees/" + id, requestOptions).then(
    fetchHelper.handleResponse,
    fetchHelper.handleError
  );
}
