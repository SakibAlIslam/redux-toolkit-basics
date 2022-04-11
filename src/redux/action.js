import { authSlice } from "./slice";

const {actions: slice} = authSlice;

// login actions
export const loginActions = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone));
}
export const logOutActions = (phone) => (dispatch) => {
    dispatch(slice.setLogout(phone));
}