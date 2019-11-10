import React, { useRef, useState } from 'react';
import Formsy from 'formsy-react';
import {TextFieldFormsy, FuseUtils} from '@fuse';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    productImageUpload      : {
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
    }
}));

function handleUploadChange(e)
{
    const file = e.target.files[0];
    if ( !file )
    {
        return;
    }
}

const onFormSubmit = () => {
    console.log("Form submitted");
};

function WorkerRegister(){

    const classes = useStyles();

    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);
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
                    Add worker
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
                    name="firstName"
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
                    name="lastName"
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
                    name="mobile"
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

                <div>
                    <input
                        accept="image/*"
                        className="hidden"
                        id="button-file"
                        type="file"
                        name={"file"}
                        onChange={handleUploadChange}
                    />
                    <div className="flex justify-center sm:justify-start flex-wrap">
                        <label
                            htmlFor="button-file"
                            className={
                                clsx(
                                    classes.productImageUpload,
                                    "flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                )}
                        >
                            <Icon fontSize="large" color="action">cloud_upload</Icon>
                        </label>
                    </div>
                </div>

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
};

export default WorkerRegister;