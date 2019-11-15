import React, {Component} from 'react';
import {FuseSplashScreen} from '@fuse';
import {connect} from 'react-redux';
import * as userActions from 'app/auth/store/actions';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import jwtService from 'app/services/jwtService';
import history from '@history';

class Auth extends Component {

    state = {
        waitAuthCheck: true
    }

    componentDidMount()
    {
        return Promise.all([
            // Comment the lines which you do not use
                this.jwtCheck()
        ]).then((user) => {
            this.setState({waitAuthCheck: false});
        })
    }

    jwtCheck = () => new Promise(resolve => {

        jwtService.on('onAutoLogin', () => {

            this.props.showMessage({message: 'Logging in with JWT'});

            /**
             * Sign in and retrieve user data from Api
             */
            jwtService.signInWithToken()
                .then(user => {

                    this.props.setUserData(user);

                    resolve(user);
                    this.props.showMessage({message: 'Logged in with JWT'});

                })
                .catch(error => {

                    this.props.showMessage({message: error});

                    resolve();
                })
        });

        jwtService.on('onAutoLogout', (message) => {

            if ( message )
            {
                this.props.showMessage({message});
            }

            this.props.logout();

            resolve();
        });

        jwtService.on('onNoAccessToken', () => {

            resolve();
        });

        jwtService.init();

        return Promise.resolve();
    })

    render()
    {
        return this.state.waitAuthCheck ? <FuseSplashScreen/> : <React.Fragment children={this.props.children}/>;
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            logout             : userActions.logoutUser,
            setUserData        : userActions.setUserData,
            showMessage        : Actions.showMessage,
            hideMessage        : Actions.hideMessage
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
