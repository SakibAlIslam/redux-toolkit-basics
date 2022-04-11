import { authSlice } from "./slice";

const {actions: slice} = authSlice;



// login actions
export const loginActions = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone));
}