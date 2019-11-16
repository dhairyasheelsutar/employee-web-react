import axios from 'axios';
import * as constants from '../../../../../Constants';
import * as MessageActions from '../../../../../store/actions/fuse/message.actions';

export const GET_WORKERS_CUSTOMER = '[USER] GET_WORKERS_CUSTOMER';

function getToken(){
    return window.localStorage.getItem("jwt_access_token");
}

export function getWorkers(){

    const token = getToken();
    const request = axios.post(constants.API_KEY + 'customer/workers', {
        token: token
    });

    return (dispatch) => {

        request.then(response => {
            dispatch({
                type: GET_WORKERS_CUSTOMER,
                payload: {
                    workers: response.data
                }
            });
        });
    };
}

export function addWorker(model, file){

    const token = getToken();
    const nodeRequest = axios.post(constants.API_KEY + 'customer/worker/register', {
        token: token,
        ...model
    });

    console.log({
        token: token,
        ...model
    });


    return dispatch => {


        dispatch(MessageActions.showMessage({message: "Please wait ...", autoHideDuration: null}));
        nodeRequest.then(data => {

            console.log(data);

            dispatch(MessageActions.showMessage({message: "Creating worker data"}));

            let form = new FormData();
            form.append("file", file);
            form.append("profileId", data["data"]["profileId"]);

            axios.post(constants.FLASK_API_KEY + 'employee/register', form).then(response => {
                dispatch(MessageActions.showMessage({message: "Worker created successfully"}));
            });

        });

    };

}
