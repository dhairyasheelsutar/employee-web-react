import * as actions from '../actions/dashboard.actions';

const initialState = {
    presentWorkers: 0,
    paidWorkers: 0,
    totalWorkers: 0,
    totalSupervisors: 0,
    presentWorkersList: [],
    paidWorkersList: []
};

const DashBoardReducer = (state = initialState, action) => {

    switch (action.type){

        case actions.GET_DASHBOARD_DATA_CUSTOMER:
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

export default DashBoardReducer;