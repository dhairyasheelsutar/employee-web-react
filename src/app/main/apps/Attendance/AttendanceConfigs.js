import Attendance from './Attendance';
import {authRoles} from 'app/auth';

export const AttendanceConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/attendance',
            component: Attendance
        }
    ]
};

export default AttendanceConfig;