import Dashboard from './Dashboard';
import {authRoles} from 'app/auth';

export const DashboardConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.customer,
    routes  : [
        {
            path     : '/customer/dashboard',
            component: Dashboard
        }
    ]
};

export default DashboardConfig;