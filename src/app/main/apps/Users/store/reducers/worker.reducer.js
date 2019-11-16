import * as Actions from '../actions';

const initialState = {
    workers: []
};

const WorkerReducer = ( state = initialState, action ) => {

    switch (action.type){

        case Actions.GET_WORKERS_CUSTOMER:
            return {
                ...state,
                ...action.payload
            };

        default:
            return {
                ...state
            }
    }

};

export default WorkerReducer;