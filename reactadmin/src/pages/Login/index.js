import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from './Login.module.css';
import images from 'assets'; // BAO GỒM TẤT CẢ CÁC ẢNH
import { Form, Formik, Field } from 'formik';

import * as Yup from 'yup';
import { Typography } from '@mui/material';

import { API } from 'API';
import axios from 'axios';

const Login = () => {
	const [submitError, setSubmitError] = useState({
		isSubmitError: false,
		errorMessage: '',
	});

	//INITIAL FORM VALUES
	const initialValues = {
		email: '',
		password: '',
	};

	// VALIDATION FORM
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid Email!').required('Required!'),
		password: Yup.string().required('Password is required'),
	});

	const handleFormSubmit = async (values) => {
		const json = JSON.stringify(values);

		await axios
			.post(API.login.url, json, {
				headers: {
					'Content-Type': 'application/json',
					'Accress-Control-Allow-Origin': '*',
				},
			})
			.then((response) => {
				if (response.data.role === 'Admin') {
					localStorage.setItem('token', response.data.token);
					localStorage.setItem('role', response.data.role);
					localStorage.setItem('firstName', response.data.firstName);
					localStorage.setItem('lastName', response.data.lastName);
					window.location.reload();
				} else {
					setSubmitError({
						isSubmitError: true,
						errorMessage: 'Please login using Admin Account!!',
					});
				}
			})
			.catch((err) => {
				console.log(err);
				setSubmitError({
					isSubmitError: true,
					errorMessage: 'Invalid Email or Password!!',
				});
			});
	};

	return (
		<>
			{localStorage.getItem('token') && <Redirect to="/admin-dashboard" />}

			<div className={styles['limiter']}>
				<div className={styles['container-login100']}>
					<div className={styles['wrap-login100']}>
						<div className={`${styles['login100-pic']}`} data-tilt>
							<img src={images.Login.hero} alt="IMG" />
						</div>
						<Formik
							initialValues={initialValues}
							onSubmit={handleFormSubmit}
							validationSchema={validationSchema}
						>
							{({
								values,
								errors,
								touched,
								handleBlur,
								setFieldValue,
								isSubmitting,
							}) => (
								<Form autoComplete="off" className={styles['login100-form']}>
									<span className={styles['login100-form-title']}>
										Member Login
									</span>

									{/* EMAIL FIELD */}
									<div
										className={`${styles['wrap-input100']} ${styles['validate-input']}`}
									>
										<Field name="email">
											{({ field, form }) => (
												<div>
													<input
														value={values.email}
														onChange={form.handleChange}
														className={styles['input100']}
														id="email-input"
														type="email"
														name="email"
														placeholder="Email"
													/>
													<span className={styles['focus-input100']}></span>
													<span className={styles['symbol-input100']}>
														<i
															className="fa fa-envelope"
															aria-hidden="true"
														></i>
													</span>
												</div>
											)}
										</Field>
									</div>
									{errors.email && (
										<div className="mt-0 pt-0 ms-2 mb-2 text-danger">
											<Typography variant="inherit" color="error">
												{errors.email}
											</Typography>
										</div>
									)}

									{/* PASSWORD FIELD */}
									<div
										className={`${styles['wrap-input100']} ${styles['validate-input']}`}
									>
										<Field name="password">
											{({ field, form }) => (
												<div>
													<input
														value={values.password}
														onChange={form.handleChange}
														className={styles['input100']}
														type="password"
														id="password-input"
														name="password"
														placeholder="Password"
													/>
													<span className={styles['focus-input100']}></span>
													<span className={styles['symbol-input100']}>
														<i className="fa fa-lock" aria-hidden="true"></i>
													</span>
												</div>
											)}
										</Field>
									</div>
									{errors.password && (
										<div className="mt-0 pt-0 ms-2 mb-0 text-danger">
											<Typography variant="inherit" color="error">
												{errors.password}
											</Typography>
										</div>
									)}

									{/* SUBMIT BUTTON */}
									<div className={styles['container-login100-form-btn']}>
										<button
											type="submit"
											className={styles['login100-form-btn']}
										>
											Login
										</button>
									</div>
									{submitError.isSubmitError && (
										<div className="mt-0 pt-0 ms-2 mb-2 text-danger text-center">
											<Typography variant="inherit" color="error">
												{submitError.errorMessage}
											</Typography>
										</div>
									)}

									<div className="text-center pt-3">
										<span className={styles['txt1']}>Forgot </span>
										<Link className={styles['txt2']} to="#">
											Username / Password?
										</Link>
									</div>

									<div className="text-center pt-5 mt-5">
										<Link className={styles['txt2']} to="#">
											Create your Account
											<i
												className="fa fa-arrow-right ms-2"
												aria-hidden="true"
											></i>
										</Link>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
