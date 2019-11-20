import Help from './Help';
import {authRoles} from "../../auth";

const HelpConfig = {
    settings: {
        layout: {}
    },
    auth: authRoles.customer,
    routes: [
        {
            path: "/customer/help",
            component: Help
        }
    ]
};

export default HelpConfig;