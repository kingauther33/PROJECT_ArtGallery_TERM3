import { Typography } from '@mui/material';
import { Field } from 'formik';
import React from 'react';
import Select from 'react-select';

const SelectInput = (props) => {
    const { options, title, errors, touched, name } = props;

    return (
        <>
            <div className="col-md-2">
                <h6
                    className="card-title"
                    style={{
                        margin: '10px 0',
                        letterSpacing: '-0.08em',
                    }}
                >
                    {title}
                </h6>
            </div>
            <div className="col-md-10">
                <Field name={name}>
                    {({ field, form }) => (
                        <Select
                            options={options}
                            name={field.name}
                            value={
                                options
                                    ? options.find((option) => option.value === field.value)
                                    : ''
                            }
                            onChange={(option) => {
                                form.setFieldValue(field.name, option.value);
                            }}
                            onBlur={field.onBlur}
                        />
                    )}
                </Field>
            </div>
            {errors && touched ? (
                <div className="offset-2 col-md-10">
                    <Typography variant="inherit" color="error">
                        {errors}
                    </Typography>
                </div>
            ) : (
                <div className="offset-2 col-md-10">&nbsp;</div>
            )}
        </>
    );
};

export default SelectInput;
