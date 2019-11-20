import Worker from './Workers/Workers';
import Supervisor from './Supervisors/Supervisor';
import SupervisorRegister from './Supervisors/Register/Register';
import WorkerRegister from './Workers/Register/Register';
import {authRoles} from "../../../auth";

export const UserConfigs = {
    settings: {
        layout: {}
    },
    auth: authRoles.customer,
    routes: [
        {
            path: "/customer/workers",
            component: Worker
        },
        {
            path: "/customer/supervisors",
            component: Supervisor
        },
        {
            path: "/customer/worker/add",
            component: WorkerRegister
        },
        {
            path: "/customer/supervisor/add",
            component: SupervisorRegister
        }
    ]
};

export default UserConfigs;