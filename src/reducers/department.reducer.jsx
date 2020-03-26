import { departmentConstants } from '../constants/department.constant';
const initState = { isLoading: false }

export default function departmentReducer(state = initState, action) {
    switch (action.type) {
        case departmentConstants.GET_DEPARTMENTS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case departmentConstants.GET_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                departments: action.departments,
                isLoading: false, 
            };

        case departmentConstants.GET_DEPARTMENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                
            };
 
        default:
            return state;
    }
}