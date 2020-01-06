import * as Actions from '../actions/attendance.actions';

const initialState = {
    attendance: []
};

const AttendanceReducer = ( state = initialState, action ) => {

    switch (action.type){

        case Actions.GET_ATTENDANCE_EMPLOYEES:
            return {
                ...state,
                attendance: action.payload
            };

        default:
            return {
                ...state
            }

    }

};

export default AttendanceReducer;