import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardCard from './DashboardCard/DashboardCard';
import Grid from '@material-ui/core/Grid/Grid';
import MaterialTable from 'material-table';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        overflowX: "hidden"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        justifyContent: "center",
        textAlign: "center"
    }
}));

const dashboard = () => {

    const classes = styles();

    return(
        <div>
            <div className={classes.root}>
                <Grid className={classes.content} container spacing={3}>
                    <DashboardCard title="Present workers" value={40}/>
                    <DashboardCard title="Paid workers" value={40}/>
                    <DashboardCard title="Total workers" value={40}/>
                    <DashboardCard title="Total supervisors" value={40}/>
                </Grid>

            </div>
            <Grid container className={classes.content} spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
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
                    />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
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
                    />
                </Grid>
            </Grid>
        </div>
    )
};

export default dashboard;