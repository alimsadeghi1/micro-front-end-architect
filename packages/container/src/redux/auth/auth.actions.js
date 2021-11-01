// * Import Accessories
import AUTH_TYPES from "./auth.types";

const signIn = () => ({ type: AUTH_TYPES.SIGN_IN });

const signOut = () => ({ type: AUTH_TYPES.SIGN_OUT });

const AUTH_ACTIONS = {
    SIGN_IN: signIn,
    SIGN_OUT: signOut
}

export default AUTH_ACTIONS;