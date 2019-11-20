import * as Actions from '../actions';

const initialState = {
    supervisors: []
};

const SupervisorReducer = ( state = initialState, action ) => {

    switch (action.type){

        case Actions.GET_SUPERVISORS_CUSTOMER:
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

export default SupervisorReducer;