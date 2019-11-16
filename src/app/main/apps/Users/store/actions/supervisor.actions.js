import axios from 'axios';
import * as constants from '../../../../../Constants';
import * as MessageActions from '../../../../../store/actions/fuse/message.actions';

export const GET_SUPERVISORS_CUSTOMER = '[USER] GET_SUPERVISOR_CUSTOMER';

function getToken(){
    return window.localStorage.getItem("jwt_access_token");
}

export function getSupervisors(){

    const token = getToken();
    const request = axios.post(constants.API_KEY + 'customer/supervisors', {
        token: token
    });

    return (dispatch) => {

        request.then(response => {
            dispatch({
                type: GET_SUPERVISORS_CUSTOMER,
                payload: {
                    supervisors: response.data
                }
            });
        });
    };
}

export function addSupervisor(model){

    const token = getToken();
    const request = axios.post(constants.API_KEY + 'customer/supervisor/register', {
        token: token,
        ...model
    });

    return dispatch => {

        dispatch(MessageActions.showMessage({message: "Please wait ...", autoHideDuration: null}));
        request.then(data => {
            dispatch(MessageActions.showMessage({message: "Supervisor successfully saved"}));
        });

    };

}