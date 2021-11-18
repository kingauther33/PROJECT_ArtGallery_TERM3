import React from 'react';
import { Field } from 'formik';
import { Checkbox, Typography } from '@mui/material';

const CheckboxInput = (props) => {
	const { title, name, type, errors, touched, fullWidth, checked } = props;

	return (
		<>
			<div className="col-md-3">
				<h6
					className="card-title"
					style={{ margin: '10px 0', letterSpacing: '-0.08em' }}
				>
					{title}
				</h6>
			</div>
			<div className="col-md-9">
				<Field name={name}>
					{({ field, form }) => (
						<Checkbox
							checked={checked}
							onChange={(e) => {
								form.setFieldValue(name, e.target.checked);
							}}
							// fullWidth={fullWidth}
							// type={type}
							// placeholder={title}
							// variant="standard"
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
					)}
				</Field>
			</div>
			<div className="offset-3 col-md-9 mb-3">&nbsp;</div>
		</>
	);
};

export default CheckboxInput;
