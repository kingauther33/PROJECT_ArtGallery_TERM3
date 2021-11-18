import React from 'react';
import { Field } from 'formik';
import { TextField, Typography } from '@mui/material';

const FormText = (props) => {
	const { title, value, fullWidth } = props;

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
				<Typography
					fullWidth={fullWidth}
					variant="p"
					className="text-capitalize"
					style={{ fontSize: '16px' }}
				>
					{value}
				</Typography>
			</div>
			<div className="offset-2 col-md-10 mb-1">&nbsp;</div>
		</>
	);
};

export default FormText;
