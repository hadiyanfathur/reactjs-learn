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
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Autocomplete } from '@material-ui/lab';
import { useForm, Controller } from "react-hook-form";

const MovieCreate = () => {

    const { register, handleSubmit, setValue, getValues, control, errors } = useForm({ mode: 'onBlur' });

    const onSubmit = data => {
        alert(JSON.stringify(data?.actors));
    };

    return (
        <React.Fragment>
            <GridItem container xs={12}>
                <Grid container item xs={12} onSubmit={handleSubmit(onSubmit)} component="form" spacing={3}>
                    <Grid item xs={6} >
                        <TextField
                            id="title"
                            label="Title"
                            name="title"
                            color="primary"
                            inputRef={register({
                                maxLength: {
                                    value: 100,
                                    message: "Too Many Characters"
                                },
                                required: {
                                    value: true,
                                    message: "required"
                                }
                            })}
                            error={errors.title !== undefined}
                            helperText={errors.title?.message}
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <Controller
                            render={({ ref, ...rest }) => (
                                <KeyboardDatePicker
                                    clearable
                                    value={getValues('actors')}
                                    onChange={date => setValue('actors', date)}
                                    format="DD-MM-YYYY"
                                    error={errors.actors !== undefined}
                                    helperText={errors.actors?.message} 
                                    {...rest}
                                />
                            )}
                            defaultValue={null}
                            name="actors"
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            render={({ onChange }) => (
                                <Autocomplete
                                    options={[{ title: 'Startup', year: 2020 }, { title: 'Avatar', year: 2020 }, { title: 'Kingdom', year: 2020 }]}
                                    getOptionLabel={option => `${option.title} - ${option.year}`}
                                    getOptionSelected={(option, value) => option.title === value.title}
                                    renderOption={option => (
                                        <span>
                                            {option.title} - {option.year}
                                        </span>
                                    )}
                                    renderInput={params => (
                                        <TextField
                                            {...params}
                                            label="Choose a Movies"
                                            variant="standard"
                                        />
                                    )}
                                    onChange={(e, data) => onChange(data?.title)}
                                />
                            )}
                            defaultValue={null}
                            name="movies"
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" color="primary" variant="outlined">Submit</Button>
                    </Grid>
                </Grid>
            </GridItem>
        </React.Fragment>
    )
}

export default React.memo(MovieCreate);