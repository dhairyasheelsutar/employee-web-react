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
                'url'  : '/customer/dashboard'
            },
            {
                'id'   : 'customer-attendance-component',
                'title': 'Attendance',
                'type' : 'item',
                'icon' : 'dashboard',
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
                'url'  : '/customer/workers'
            },
            {
                'id'   : 'customer-supervisor-component',
                'title': 'Supervisors',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/customer/supervisors'
            }
        ]
    }
];

export default navigationConfig;
