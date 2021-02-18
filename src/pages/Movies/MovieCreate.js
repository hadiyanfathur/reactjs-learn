import React, { useState } from 'react';
import GridItem from '../../components/Grid/GridItem';
import {
    Grid,
    Button,
    LinearProgress,
    Checkbox,
    Input,
    Select,
    TextField
} from '@material-ui/core'
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
} from '@material-ui/pickers';
import { useForm, Controller } from "react-hook-form";

const MovieCreate = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    return (
        <React.Fragment>
            <GridItem container xs={12}>
                <Grid container item xs={12} onSubmit={handleSubmit(onSubmit)} component="form" spacing={3}>
                    <Grid item xs={6} >
                        <TextField
                            id="first_name"
                            label="First Name"
                            name="firstName"
                            color="primary"
                            inputRef={register({
                                maxLength: {
                                    value: 50,
                                    message: "Too Many Characters"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Too Few Characters"
                                }
                            })}
                            error={errors.firstName !== undefined}
                            helperText={errors.firstName?.message}
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField
                            id="last_name"
                            name="lastName"
                            label="Last Name"
                            color="primary"
                            inputRef={register({
                                maxLength: {
                                    value: 50,
                                    message: "Too Many Characters"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Too Few Characters"
                                }
                            })}
                            error={errors.lastName !== undefined}
                            helperText={errors.lastName?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" color="primary" variant="outlined">Submit</Button>
                    </Grid>
                </Grid>
            </GridItem>
        </React.Fragment >
    )
}

export default React.memo(MovieCreate);