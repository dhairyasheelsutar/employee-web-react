import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { FusePageSimple } from "../../../../@fuse";
import {useSelector, useDispatch} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions/attendance.actions';
import reducer from './store/reducers';

function Attendance() {

    const dispatch = useDispatch();
    const selector = useSelector(({attendanceWorkers}) => attendanceWorkers.AttendanceReducer);
    useEffect(() => {
        dispatch(Actions.get_workers_attendance());
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
                    <h1>Attendance</h1>
                </div>
            }

            content={
                <div className="w-full">
                    <MaterialTable
                        title={"Workers attendance"}
                        columns={[
                            {title: "Name", field: "name"},
                            {title: "Days attended", field: "dayAttended", type: "numeric"},
                            {title: "Calculated payment", field: "payment", type: "numeric"}
                        ]}
                        data={selector.attendance}
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
        />
    );
};

export default withReducer('attendanceWorkers',  reducer)(Attendance);