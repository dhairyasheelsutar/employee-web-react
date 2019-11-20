import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { FusePageSimple } from "../../../../../@fuse";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

function Supervisor(){

    const dispatch = useDispatch();
    const selector = useSelector(({userAppCustomer}) => userAppCustomer.SupervisorReducer);
    useEffect(() => {
        dispatch(Actions.getSupervisors());
        console.log(selector);
    }, []);

    return(
        <FusePageSimple

            classes={{
                content: "flex md:px-64 px-24",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}

            header={
                <div className="w-full flex items-center justify-center">
                    <h1>All supervisors</h1>
                    <Button className="ml-12" component={Link} to={"/customer/supervisor/add"} variant={"contained"}>Add new</Button>
                </div>
            }

            content={
                <div className="w-full">
                    <MaterialTable
                        title={"All supervisors"}
                        columns={[
                            {title: "Name", field: "fullName"},
                            {title: "Email", field: "email"},
                            {title: "Mobile number", field: "mobileNo", type: "numeric"}
                        ]}
                        data={selector.supervisors}
                        actions={[
                            {
                                icon: "delete_outline",
                                tooltip: "Delete user",
                                onClick: (event, row) => console.log(row)
                            }
                        ]}

                        options={{
                            toolbar: false,
                            actionsColumnIndex: -1
                        }}
                    />
                </div>
            }
        />
    );
};

export default withReducer('userAppCustomer', reducer)(Supervisor);