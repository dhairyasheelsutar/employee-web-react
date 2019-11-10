import React from 'react';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = makeStyles(theme => ({

    content: {
        padding: theme.spacing(3)
    }

}));

const worker = () => {

    const classes = styles();

    return(
        <Container className={classes.content}>

            <Button style={{marginBottom: "10px"}} component={Link} to={"/worker/add"} variant={"contained"} color={"primary"}>Add new</Button>

            <MaterialTable
                title={"All workers"}
                columns={[
                    {title: "Name", field: "name"},
                    {title: "Email", field: "email"},
                    {title: "Mobile number", field: "mobileNo", type: "numeric"}
                ]}
                data={[
                    {
                        name: "Dhiraj", email: "sutardhiraj98@gmail.com", mobileNo: 8788332232
                    },
                    {
                        name: "Piyush", email: "thetechnolover7@gmail.com", mobileNo: 9158674554
                    }
                ]}
                actions={[
                    {
                        icon: "delete_outline",
                        tooltip: "Delete user",
                        onClick: (e) => alert("Clicked")
                    }
                ]}
            />
        </Container>
    );
};

export default worker;