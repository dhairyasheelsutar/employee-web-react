import Dashboard from './Dashboard';
import {authRoles} from 'app/auth';

export const DashboardConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/dashboard',
            component: Dashboard
        }
    ]
};

export default DashboardConfig;