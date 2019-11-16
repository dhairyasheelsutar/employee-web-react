import { combineReducers } from 'redux';
import SupervisorReducer from './supervisor.reducer';
import WorkerReducer from './worker.reducer';

const reducer = combineReducers({
    SupervisorReducer,
    WorkerReducer
});

export default reducer;