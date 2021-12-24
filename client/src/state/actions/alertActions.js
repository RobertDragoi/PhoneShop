import { SET_ALERT, REMOVE_ALERT } from "../../types";

export const setAlertAction = (values) => ({
  type: SET_ALERT,
  payload: values,
});

export const removeAlertAction = (values) => ({
  type: REMOVE_ALERT,
  payload: values,
});
