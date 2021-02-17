import React, { useState } from 'react';
import GridItem from '../../components/Grid/GridItem';
import { Grid, Button, LinearProgress } from '@material-ui/core'
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
} from '@material-ui/pickers';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';

interface Values {
    email: string;
    password: string;
}

const MovieCreate = () => {



    return (
        <React.Fragment>
            <GridItem container item xs={12} style={{ margin: '8px' }}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validate={values => {
                        const errors: Partial<Values> = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            alert(JSON.stringify(values, null, 2));
                        }, 500);
                    }}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form>
                            <Field
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                            />
                            <br />
                            <Field
                                component={TextField}
                                type="password"
                                label="Password"
                                name="password"
                            />
                            {isSubmitting && <LinearProgress />}
                            <br /><br />
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </GridItem>
        </React.Fragment>
    )
}

export default React.memo(MovieCreate);