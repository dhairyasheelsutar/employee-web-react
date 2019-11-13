import Attendance from './Attendance';
import {authRoles} from 'app/auth';

export const AttendanceConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.customer,
    routes  : [
        {
            path     : '/customer/attendance',
            component: Attendance
        }
    ]
};

export default AttendanceConfig;