import React from 'react';
import { Field } from 'formik';
import { Checkbox, Typography } from '@mui/material';

const CheckboxInput = (props) => {
	const { title, name, type, errors, touched, fullWidth, checked } = props;

	return (
		<>
			<div className="col-md-2">
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
			{errors && touched ? (
				<div className="offset-2 col-md-10 mb-3">
					<Typography variant="inherit" color="error">
						{errors}
					</Typography>
				</div>
			) : (
				<div className="offset-2 col-md-10 mb-3">&nbsp;</div>
			)}
		</>
	);
};

export default CheckboxInput;
