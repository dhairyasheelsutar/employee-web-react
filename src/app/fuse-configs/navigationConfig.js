const navigationConfig = [
    {
        'id': 'analytics',
        'title': 'Analytics',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id'   : 'dashboard-component',
                'title': 'Dashboard',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/dashboard'
            },
            {
                'id'   : 'attendance-component',
                'title': 'Attendance',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/attendance'
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
                'id'   : 'worker-component',
                'title': 'Workers',
                'type' : 'item',
                'icon' : 'group',
                'url'  : '/workers'
            },
            {
                'id'   : 'supervisor-component',
                'title': 'Supervisors',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/supervisors'
            }
        ]
    }
];

export default navigationConfig;
