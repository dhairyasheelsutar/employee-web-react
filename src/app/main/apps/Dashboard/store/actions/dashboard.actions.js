import axios from 'axios';
import * as constants from '../../../../../Constants';

export const GET_DASHBOARD_DATA_CUSTOMER = '[DASHBOARD] GET_DASHBOARD_DATA_CUSTOMER';

export function getData(){

    const token = window.localStorage.getItem("jwt_access_token");
    const requests = axios.all([
        axios.post(constants.API_KEY + 'customer/supervisor/index', {token: token}),
        axios.post(constants.API_KEY + 'customer/supervisor/allPresentWorkers', {token: token})
    ]);

    return (dispatch) => {

        requests.then(axios.spread((data1, data2) => {

            let payload = {};
            payload["presentWorkers"] = data1.data["allPresentworkers"];
            payload["totalWorkers"] = data1.data["totalworkers"];
            payload["presentWorkersList"] = data2.data;

            dispatch({
                type: GET_DASHBOARD_DATA_CUSTOMER,
                payload: payload
            });

        }));

    };


}