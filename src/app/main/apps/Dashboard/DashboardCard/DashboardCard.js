import React from 'react';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider/Divider';

const dashboardCard = (props) => {
    return(
        <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card style={{borderBottom: "3px solid #ff1a75"}}>
                <CardHeader title={props.title} />
                <Divider/>
                <CardContent>
                    <Typography variant={"h3"} component={"h4"} >{props.value}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
};

export default dashboardCard;
