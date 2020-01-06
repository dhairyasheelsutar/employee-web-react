import axios from 'axios';
import * as constants from '../../../../../Constants';

export const GET_ATTENDANCE_EMPLOYEES = '[ATTENDANCE] GET_ATTENDANCE_EMPLOYEES';

function getToken(){
    return window.localStorage.getItem("jwt_access_token");
}

export function get_workers_attendance(){

    const token = getToken();
    const request = axios.post(constants.API_KEY + 'customer/monthlyStatus', {
        token: token
    });

    let data = [];

    return (dispatch) => {

        request.then(response => {

            response.data.map((item) => {

                let daysAttended = item['attendanceLogs'].length ? item['attendanceLogs'].length : 0;

                data.push({
                    name: item['fullName'],
                    dayAttended: daysAttended,
                    payment: item['stipendPerDay']*daysAttended
                });

                dispatch({
                    type: GET_ATTENDANCE_EMPLOYEES,
                    payload: data
                });

            });

        });

    }

}