import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import LoginConfig from 'app/main/Login/LoginConfigs';
import DashboardConfig from 'app/main/apps/Dashboard/DashboardConfigs';
import AttendanceConfig from 'app/main/apps/Attendance/AttendanceConfigs';
import UserConfig from 'app/main/apps/Users/UserConfigs';
import HelpConfig from 'app/main/Help/HelpConfigs';
import Error404PageConfig from 'app/main/Errors/Error404PageConfig';

const routeConfigs = [
    LoginConfig,
    DashboardConfig,
    AttendanceConfig,
    UserConfig,
    HelpConfig,
    Error404PageConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: '/',
        exact: true,
        component: () => <Redirect to={"/login"} />
    },
    {
        component: () => <Redirect to="/404" />
    }
];

export default routes;
