import { departmentConstants } from '../constants';

export const departmentActions = {
    getDepartmentsRequest, 
    getDepartmentsSuccess,
    getDepartmensFailure,
 
};

function getDepartmentsRequest() {
    return {
        type: departmentConstants.GET_DEPARTMENTS_REQUEST
    };
}

function getDepartmentsSuccess(departments) {
    return {
        type: departmentConstants.GET_DEPARTMENTS_SUCCESS,
        departments
    };
}

function getDepartmensFailure(error) {
    return {
        type: departmentConstants.GET_DEPARTMENTS_FAILURE,
        error
    };
}
 