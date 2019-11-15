import {authRoles} from "../auth";

const navigationConfig = [
    {
        'id': 'analytics',
        'title': 'Analytics',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id'   : 'customer-dashboard-component',
                'title': 'Dashboard',
                'type' : 'item',
                'icon' : 'dashboard',
                'auth': authRoles.customer,
                'url'  : '/customer/dashboard'
            },
            {
                'id'   : 'customer-attendance-component',
                'title': 'Attendance',
                'type' : 'item',
                'icon' : 'dashboard',
                'auth': authRoles.customer,
                'url'  : '/customer/attendance'
            }
        ]
    },
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'customer-worker-component',
                'title': 'Workers',
                'type' : 'item',
                'icon' : 'group',
                'auth': authRoles.customer,
                'url'  : '/customer/workers'
            },
            {
                'id'   : 'customer-supervisor-component',
                'title': 'Supervisors',
                'type' : 'item',
                'icon' : 'person',
                'auth': authRoles.customer,
                'url'  : '/customer/supervisors'
            }
        ]
    }
];

export default navigationConfig;
