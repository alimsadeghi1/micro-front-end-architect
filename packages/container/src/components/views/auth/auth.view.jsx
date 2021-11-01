// * Import React
import React from 'react';

// * Import Redux
import { connect } from 'react-redux';
import { AUTH_ACTIONS } from '@/redux/auth';

// * Import Components
import AuthMount from './auth.mount';

function Auth({ signIn, signOut }) {

    // * Props description ==========================================
    // *
    // 1 - signIn :: "signIn" is an action that
    //     is connected to redux and makes "authStatus" true
    //     that means user is sign in now

    // 2 - signOut :: "signOut" is a function that
    //     is connected to redux and makes "authStatus" false
    //     that means user is not sign in anymore
    // *
    // ==============================================================

    return <AuthMount signIn={signIn} signOut={signOut} />;
}

// Get "signIn" and "signOut" actions from redux
const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(AUTH_ACTIONS.SIGN_IN()),
    signOut: () => dispatch(AUTH_ACTIONS.SIGN_OUT()),
});

export default connect(null, mapDispatchToProps)(Auth);
