import React from 'react';
import { FusePageSimple } from "../../../@fuse";
import MaterialTable from 'material-table';

const help = () => {
    return (
        <FusePageSimple
            classes={{
                content: "flex md:px-64 px-24",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}

            header={
                <div className="w-full flex items-center justify-center">
                    <h1>Attendance</h1>
                </div>
            }

            content={
                <div className="w-full">
                    <MaterialTable
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

                        options={{
                            toolbar: false,
                            actionsColumnIndex: -1
                        }}
                    />
                </div>
            }

            innerScroll

        />
    );
};

export default help;
