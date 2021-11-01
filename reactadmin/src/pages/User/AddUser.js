import React, { useMemo, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextInput from 'components/Forms/TextInput';
import SelectInput from 'components/Forms/SelectInput';
import axios from 'axios';
import { API, HeaderOptions } from 'API';
import SnackbarPopup from 'components/SnackbarPopup';

const AddUser = () => {
	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});

	const options = useMemo(
		() => [
			{ value: 'Admin', label: 'Admin' },
			{ value: 'Customer', label: 'Customer' },
			{ value: 'Artist', label: 'Artist' },
		],
		[]
	);

	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		role: '',
		deposit: 0,
		createdAt: Date.now(),
	};

	const validationSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		lastName: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		email: Yup.string()
			.email()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		password: Yup.string()
			.required('Required!')
			.min(8, 'Password is too short - should be 8 chars minimum.')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
				'Password must Contain One Uppercase, One Lowercase, One Number and One Special Case Character'
			),
		confirmPassword: Yup.string()
			.required('Required!')
			.oneOf([Yup.ref('password'), null], 'Passwords must match'),
		role: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		deposit: Yup.number().required('Required!'),
	});

	const handleSubmit = async (values) => {
		const json = JSON.stringify(values);
		await axios
			.post(API.post_user.url, json, API.headers)
			.then((res) => {
				setNotification({
					message: 'Successfully created new user!',
					isOpen: true,
					isSuccess: true,
				});
			})
			.catch((err) => {
				setNotification({
					message: 'Failed to create new user!',
					isOpen: true,
					isSuccess: false,
				});
			});
	};

	return (
		<>
			<div className="panel-header panel-header-sm"></div>
			<div className="content">
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card-header">
								<h5 className="title">Add New User</h5>
							</div>
							<div className="card-body">
								<Formik
									initialValues={initialState}
									onSubmit={handleSubmit}
									validationSchema={validationSchema}
								>
									{({
										values,
										errors,
										setFieldValue,
										touched,
										handleBlur,
										isSubmitting,
									}) => (
										<Form autoComplete="off">
											<div className="row align-items-center px-3">
												<TextInput
													fullWidth={true}
													title="First Name"
													name="firstName"
													type="text"
													errors={errors.firstName}
													touched={touched.firstName}
												/>

												<TextInput
													fullWidth={true}
													title="Last Name"
													name="lastName"
													type="text"
													errors={errors.lastName}
													touched={touched.lastName}
												/>

												<TextInput
													fullWidth={true}
													title="Email"
													name="email"
													type="text"
													errors={errors.email}
													touched={touched.email}
												/>

												<TextInput
													fullWidth={true}
													title="Password"
													name="password"
													type="password"
													errors={errors.password}
													touched={touched.password}
												/>

												<TextInput
													fullWidth={true}
													title="Confirm Password"
													name="confirmPassword"
													type="password"
													errors={errors.confirmPassword}
													touched={touched.confirmPassword}
												/>

												<SelectInput
													options={options}
													title="Role"
													errors={errors.role}
													touched={touched.role}
												/>

												<TextInput
													fullWidth={false}
													title="Deposit"
													name="deposit"
													type="number"
													errors={errors.deposit}
													touched={touched.deposit}
												/>
												<button
													type="submit"
													className="btn btn-primary ml-3"
													style={{ width: '15%' }}
												>
													Submit
												</button>
											</div>
											<pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
										</Form>
									)}
								</Formik>
								<SnackbarPopup
									notification={notification}
									setNotification={setNotification}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddUser;
