import { fetchHelper, authHeader } from '../helpers';
const apiUrl = 'http://localhost:3004/';
export const departmentService = {
     getList
};

function getList() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: "same-origin"
    }; 
    return fetch(apiUrl + 'departments' , requestOptions).then(fetchHelper.handleResponse, fetchHelper.handleError);
}
 