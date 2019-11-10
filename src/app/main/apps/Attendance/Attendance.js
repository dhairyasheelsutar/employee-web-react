import React from 'react';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container/Container';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3)
    }
}));

const attendance = () => {

    const classes = styles();

    return(
        <Container className={classes.content}>
            <MaterialTable
                title={"Workers attendance"}
                columns={[
                    {title: "Name", field: "name"},
                    {title: "Days attended", field: "dayAttended", type: "numeric"},
                    {title: "Calculated payment", field: "payment", type: "numeric"}
                ]}
                data={[
                    {
                        name: "Dhiraj", dayAttended: 23, payment: 4500
                    },
                    {
                        name: "Piyush", dayAttended: 25, payment: 7000
                    }
                ]}
                actions={[
                    {
                        icon: "payment",
                        tooltip: "Pay worker",
                        onClick: (e) => alert("Paid")
                    }
                ]}
            />
        </Container>
    );
};

export default attendance;