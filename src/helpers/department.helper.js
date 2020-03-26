import { departmentService } from "../services";
import { departmentActions } from "../actions";

export const departmentHelper = {
  getList
};

function getList(dispatch) {
  dispatch(departmentActions.getDepartmentsRequest());
  departmentService.getList().then(
    departments => {
      dispatch(departmentActions.getDepartmentsSuccess(departments));
    },
    error => {
      dispatch(departmentActions.getDepartmentsFailure(error));
    }
  );
}
