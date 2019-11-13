import React from 'react';
import MaterialTable from 'material-table';
import { FusePageSimple } from "../../../../../@fuse";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const supervisor = () => {


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

export default supervisor;