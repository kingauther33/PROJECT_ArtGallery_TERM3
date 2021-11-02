import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from 'components/Forms/TextInput';
import SelectInput from 'components/Forms/SelectInput';
import axios from 'axios';
import { API, HeaderOptions } from 'API';
import SnackbarPopup from 'components/SnackbarPopup';
import CustomBackdrop from 'components/CustomBackdrop';
import { Redirect } from 'react-router-dom';

const EditUser = () => {
	const params = useParams();
	const [openBackdrop, setOpenBackdrop] = useState(false);
	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});

	const options = useMemo(
		() => [
			{ value: 'Customer', label: 'Customer' },
			{ value: 'Artist', label: 'Artist' },
		],
		[]
	);

	const [initialState, setInitialState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		role: '',
		deposit: 0,
		createdAt: new Date(),
	});

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

	const fetchEditUser = useCallback(async () => {
		await axios
			.get(API.get_user_by_id.url + params.id, HeaderOptions)
			.then((res) => {
				console.log(res);
				setInitialState(res.data);
			})
			.catch((err) => console.log(err))
			.finally(() => setOpenBackdrop(false));
	}, [params.id]);

	useEffect(() => {
		setOpenBackdrop(true);
		fetchEditUser();
	}, [fetchEditUser]);

	const handleSubmit = async (values) => {
		const json = JSON.stringify(values);

		await axios
			.put(API.edit_user.url + params.id, json, HeaderOptions)
			.then((res) => {
				setNotification({
					message: 'Successfully edit user!',
					isOpen: true,
					isSuccess: true,
				});
			})
			.catch((err) => {
				setNotification({
					message: 'Failed to edit user!',
					isOpen: true,
					isSuccess: false,
				});
			});
	};

	return (
		<>
			{notification.message === 'Successfully edit user!' && (
				<Redirect to="/manage-user" />
			)}
			<div className="panel-header panel-header-sm"></div>
			<div className="content">
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card-header">
								<h5 className="title">Edit {initialState.lastName}</h5>
							</div>
							<div className="card-body">
								<Formik
									initialValues={initialState}
									onSubmit={handleSubmit}
									validationSchema={validationSchema}
									enableReinitialize
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

			<CustomBackdrop openBackdrop={openBackdrop} />
		</>
	);
};

export default EditUser;
