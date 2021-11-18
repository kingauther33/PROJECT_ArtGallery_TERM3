import React from 'react';
import { Field } from 'formik';
import { TextField, Typography } from '@mui/material';

const TextInput = (props) => {
	const { title, name, type, errors, touched, fullWidth } = props;

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
					{({ field }) => (
						<TextField
							{...field}
							fullWidth={fullWidth}
							type={type}
							placeholder={title}
							variant="standard"
						/>
					)}
				</Field>
			</div>
			{errors && touched ? (
				<div className="offset-3 col-md-9 mb-3">
					<Typography variant="inherit" color="error">
						{errors}
					</Typography>
				</div>
			) : (
				<div className="offset-3 col-md-9 mb-3">&nbsp;</div>
			)}
		</>
	);
};

export default TextInput;
