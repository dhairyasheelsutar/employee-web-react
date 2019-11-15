import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';
import * as constants from '../../Constants.js';

class jwtService extends FuseUtils.EventEmitter {

    init()
    {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.crossDomain = true;
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if ( err.status === 401 && err.config && !err.config.__isRetryRequest )
                {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    console.log("Error");
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if ( !access_token )
        {
            this.emit('onNoAccessToken');

            return;
        }

        if ( this.isAuthTokenValid(access_token) )
        {
            this.setSession(access_token);
            this.emit('onAutoLogin', true);
        }
        else
        {
            this.setSession(null);
            this.emit('onAutoLogout', 'access_token expired');
        }
    };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {

            const token = this.getAccessToken();
            const userData = this.getData();

            axios.post(constants.API_KEY + 'customer/admin/signInWithToken', {
                token: token
            })
                .then(response => {

                    console.log(response);

                    if ( response.data.auth )
                    {
                        this.setSession(token);
                        resolve(userData);
                    }
                    else
                    {
                        this.logout();
                        reject('Failed to login with JWT');
                    }
                })
                .catch(error => {
                    this.logout();
                    reject('Failed to login with token.');
                });
        });
    };

    signInWithEmailAndPassword = ({data, userRole}) => {
        return new Promise((resolve, reject) => {
            axios.post(constants.API_KEY + 'customer/admin/auth', data).then(response => {
                if ( response.data.token )
                {
                    this.setSession(response.data.token);

                    const userData = {
                        role: userRole,
                        data: {
                            email: response.data.email,
                            displayName: response.data.fullName
                        }
                    };

                    this.setData(userData);
                    console.log("Resolved");
                    resolve(userData);
                }
                else
                {
                    console.log("Rejected");
                    reject(response);
                }
            }).catch(err => console.log(err));
        });
    };

    updateUserData = (user) => {
        return axios.post('/api/auth/user/update', {
            user: user
        });
    };

    setData = data => {
        if(data){
            localStorage.setItem('user_data', JSON.stringify(data));
        }else{
            localStorage.removeItem('user_data');
        }
    };

    setSession = access_token => {
        if ( access_token )
        {
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        this.setSession(null);
        this.setData(null);
    };

    isAuthTokenValid = access_token => {
        if ( !access_token )
        {
            return false;
        }
        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if ( decoded.exp < currentTime )
        {
            console.warn('access token expired');
            return false;
        }
        else
        {
            return true;
        }
    };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };

    getData = () => {
        return JSON.parse(window.localStorage.getItem("user_data"));
    };
}

const instance = new jwtService();

export default instance;
