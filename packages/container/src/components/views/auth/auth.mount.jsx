// * Import Components imported from "Micro Front End"
import { mount } from 'auth/AuthApp';

// * Import Tools
import useMFEParentRouteHandler from '@/utils/helpers/mfe-parent-route-hanlder/mfe-parent-route-handler';

function AuthMount({ signIn }) {
    
    // * Props description ==========================================
    // *
    // 1 - signIn :: "signIn" is an action that
    //     is connected to redux and makes "authStatus" true
    //     that means user is sign in now
    // *
    // ==============================================================

    // * "useMFEParentRouteHandler" description =======================
    // *
    //   This will handle routing setting .
    //   This will returns the rendered project
    //   This can gives 2 argument .
    //   1 - The imported MFE project !! (necessary) !!
    //   2 - An object of any data that you want to convey
    //       to the project
    // *
    // ================================================================

    const mountedComponent = useMFEParentRouteHandler(mount, { signIn });

    return mountedComponent;
}

export default AuthMount;
