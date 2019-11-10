import React from 'react';
import Worker from './Workers/Workers';
import Supervisor from './Supervisors/Supervisor';
import SupervisorRegister from './Supervisors/Register/Register';
import WorkerRegister from './Workers/Register/Register';

export const UserConfigs = {
    settings: {
        layout: {}
    },
    routes: [
        {
            path: "/workers",
            component: Worker
        },
        {
            path: "/supervisors",
            component: Supervisor
        },
        {
            path: "/worker/add",
            component: WorkerRegister
        },
        {
            path: "/supervisor/add",
            component: SupervisorRegister
        }
    ]
};

export default UserConfigs;