import { setAlertAction, removeAlertAction } from "../actions/alertActions";
import { v4 as uuidv4 } from "uuid";

export const setAlertOperation =
  (msg, type, timeout = 5000) =>
  async (dispatch) => {
    const id = uuidv4();
    dispatch(setAlertAction({ msg, type, id }));
    setTimeout(() => dispatch(removeAlertAction(id)), timeout);
  };
