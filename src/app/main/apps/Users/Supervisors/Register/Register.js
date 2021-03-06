import React, { useRef, useState } from 'react';
import Formsy from 'formsy-react';
import {TextFieldFormsy} from '@fuse';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';
import * as Actions from '../../store/actions';
import {useDispatch} from 'react-redux';


function SupervisorRegister(){

    const dispatch = useDispatch();
    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    const onFormSubmit = (model) => {
        dispatch(Actions.addSupervisor(model));
        formRef.current.reset();
    };

    return(
        <div className={"w-full"}>

            <Formsy
                onValidSubmit={onFormSubmit}
                onValid={() => setIsFormValid(true)}
                onInvalid={() => setIsFormValid(false)}
                ref={formRef}
                className="flex flex-col justify-center md:p-64 p-24"
            >

                <Typography variant={"h5"}>
                    Add supervisor
                </Typography>

                <TextFieldFormsy
                    className="mb-16 mt-16"
                    type="email"
                    name="email"
                    label="Email"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="firstname"
                    label="First name"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="lastname"
                    label="Last name"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="mobileNo"
                    label="Mobile number"
                    validations={{
                        minLength: 10
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 10'
                    }}
                    variant="outlined"
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="w-full mx-auto mt-16 normal-case"
                    aria-label="LOG IN"
                    disabled={!isFormValid}
                    value="legacy"
                >
                    Save
                </Button>

            </Formsy>
        </div>
    );
}

export default SupervisorRegister;