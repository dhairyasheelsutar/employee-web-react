import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardCard from './DashboardCard/DashboardCard';
import Grid from '@material-ui/core/Grid/Grid';
import MaterialTable from 'material-table';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import { FuseSuspense } from "../../../../@fuse";
import * as actionCreators from './store/actions/dashboard.actions';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store/reducers/index';
import withReducer from 'app/store/withReducer';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        overflowX: "hidden"
    },
    content: {
        padding: theme.spacing(3),
        textAlign: "center"
    }
}));



function Dashboard() {

    const dispatch = useDispatch();
    const selector = useSelector(({dashboardCustomerApp}) => dashboardCustomerApp.DashboardReducer);


    useEffect(() => {
        dispatch(actionCreators.getData());
        console.log(selector);
    }, [dispatch]);

    const classes = styles();

    return(
        <FuseSuspense>
            <div>
                <div className={classes.root}>
                    <Grid className={classes.content} container spacing={3}>
                        <DashboardCard title="Present workers" class="text-72 leading-none text-blue" value={selector.presentWorkers}/>
                        <DashboardCard title="Paid workers" class="text-72 leading-none text-red" value={selector.paidWorkers}/>
                        <DashboardCard title="Total workers" class="text-72 leading-none text-orange" value={selector.totalWorkers}/>
                        <DashboardCard title="Total supervisors" class="text-72 leading-none text-green" value={selector.totalSupervisors}/>
                    </Grid>

                </div>
                <Grid container className={classes.content} spacing={3}>
                    <Grid item md={6} sm={12} xs={12}>
                        <div>
                            <Card style={{background: "#2D323E"}}>
                                <CardHeader style={{color: "#fff"}} title={"Present workers"} />
                            </Card>
                            <MaterialTable
                                title={"Present workers"}
                                columns={[
                                    {title: "Name", field: "name"},
                                    {title: "Time", field: "time"}
                                ]}
                                data={[
                                    {
                                        name: "Dhiraj", time: "8.12 AM"
                                    },
                                    {
                                        name: "Piyush", time: "11.34 AM"
                                    }
                                ]}
                                options={{
                                    toolbar: false,
                                    actionsColumnIndex: -1
                                }}
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <div>
                            <Card style={{background: "#2D323E"}}>
                                <CardHeader style={{color: "#fff"}} title={"Paid workers"} />
                            </Card>
                            <MaterialTable
                                title={"Paid workers"}
                                columns={[
                                    {title: "Name", field: "name"},
                                    {title: "Amount paid", field: "amount"},
                                    {title: "Date", field: "date"}
                                ]}
                                data={[
                                    {
                                        name: "Dhiraj", amount: "2653", date: "10/11/2019"
                                    },
                                    {
                                        name: "Piyush", amount: "2653", date: "10/11/2019"
                                    }
                                ]}
                                options={{
                                    toolbar: false,
                                    actionsColumnIndex: -1
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </FuseSuspense>

    )
};

export default withReducer('dashboardCustomerApp', reducer)(Dashboard);