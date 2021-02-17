import React, { useState } from 'react';
import GridItem from '../../components/Grid/GridItem';
import { Grid } from '@material-ui/core'
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
} from '@material-ui/pickers';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const MovieCreate = () => {

    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <React.Fragment>
            <GridItem container item xs={12} style={{margin:'8px'}}>
                <Grid item xs={4}>
                    <DatePicker value={selectedDate} onChange={handleDateChange} />
                </Grid>
                <Grid item xs={4}>
                    <TimePicker value={selectedDate} onChange={handleDateChange} />
                </Grid>
                <Grid item xs={4}>
                    <DateTimePicker value={selectedDate} onChange={handleDateChange} />
                </Grid>
            </GridItem>
            <GridItem container item xs={12} style={{margin:'8px'}}>
                <div>
                    <h1>Anywhere in your app!</h1>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                        </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </GridItem>
            <GridItem container item xs={12} style={{margin:'8px'}}``>
                <div>
                    <h1>Any place in your app!</h1>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                            </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </GridItem>
        </React.Fragment>
    )
}

export default React.memo(MovieCreate);