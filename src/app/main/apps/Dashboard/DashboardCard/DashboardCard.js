import React from 'react';
import {Icon, Typography, Paper, IconButton, Grid} from '@material-ui/core';

const dashboardCard = (props) => {
    return (
        <Grid item md={3} sm={6} xs={12}>
            <Paper className="w-full rounded-8 shadow-none border-1">
                <div className="text-center pt-12 pb-28">
                    <Typography
                        className={props.class}>{props.value}</Typography>
                    <Typography className="text-16" color="textSecondary">{props.title}</Typography>
                </div>
            </Paper>
        </Grid>
    );
}

export default React.memo(dashboardCard);
