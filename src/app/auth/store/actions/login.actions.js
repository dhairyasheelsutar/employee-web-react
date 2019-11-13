import jwtService from 'app/services/jwtService';
import {setUserData} from './user.actions';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin(data)
{
    return (dispatch) =>
        jwtService.signInWithEmailAndPassword(data)
            .then((user) => {
                    dispatch(setUserData({displayName: "Dhiraj sutar", email: "sutardhiraj98@gmail.com"}));
                    return dispatch({
                        type: LOGIN_SUCCESS
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: error
                });
            });
}