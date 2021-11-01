// * Import Accessories
import AUTH_TYPES from "./auth.types";

const INITIAL_STATE = false;

function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_TYPES.SIGN_IN: return true;
        case AUTH_TYPES.SIGN_OUT: return false;
        default: return state;
    }
}

export default authReducer;