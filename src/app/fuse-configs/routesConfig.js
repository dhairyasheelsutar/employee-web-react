import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import LoginConfig from 'app/main/Login/LoginConfigs';
import DashboardConfig from 'app/main/apps/Dashboard/DashboardConfigs';
import AttendanceConfig from 'app/main/apps/Attendance/AttendanceConfigs';
import UserConfig from 'app/main/apps/Users/UserConfigs';
import HelpConfig from 'app/main/Help/HelpConfigs.js'

const routeConfigs = [
    LoginConfig,
    DashboardConfig,
    AttendanceConfig,
    UserConfig,
    HelpConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/login"/>
    }
];

export default routes;
