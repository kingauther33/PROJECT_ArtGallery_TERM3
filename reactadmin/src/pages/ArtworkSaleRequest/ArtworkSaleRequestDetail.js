import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API, HeaderOptions } from 'API';
import CustomBackdrop from 'components/CustomBackdrop';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from 'components/Forms/TextInput';
import SelectInput from 'components/Forms/SelectInput';
import SnackbarPopup from 'components/SnackbarPopup';
import { Redirect } from 'react-router-dom';
import CheckboxInput from 'components/Forms/CheckboxInput';
import FormText from 'components/Forms/FormText';
import DateInput from 'components/Forms/DateInput';
import { Typography } from '@mui/material';
import { format } from 'date-fns';
import ImagePreview from 'components/Forms/ImagePreview';

const ArtworkSaleRequestDetail = () => {
	const defaultValues = useMemo(
		() => ({
			name: '',
			author: '',
			description: '',
			location: '',
			startingPrice: 0,
			status: 0,
			fixedPrice: 0,
			year: 0,
			checkDecline: true,
			unapproveReason: '',
			endDate: new Date(),
		}),
		[]
	);

	const [initialValues, setInitialValues] = useState(defaultValues);
	/* const [categoryOptions, setCategoryOptions] = useState([
		{ value: '', label: '' },
	]); */

	const [openBackdrop, setOpenBackdrop] = useState(false);
	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});
	const { id: artworkId } = useParams();

	const validationSchema = Yup.object().shape({
		// name: Yup.string()
		// 	.min(2, 'Too short!')
		// 	.max(50, 'Too long!')
		// 	.required('Required!'),
		// author: Yup.string()
		// 	.min(2, 'Too short!')
		// 	.max(50, 'Too long!')
		// 	.required('Required!'),
		// description: Yup.string()
		// 	.min(2, 'Too short!')
		// 	.max(300, 'Too long!')
		// 	.required('Required!'),
		// location: Yup.string()
		// 	.min(2, 'Too short!')
		// 	.max(50, 'Too long!')
		// 	.required('Required!'),
		// year: Yup.number().required('Required!'),
		// categoryName: Yup.string()
		// 	.min(2, 'Too short!')
		// 	.max(50, 'Too long!')
		// 	.required('Required!'),
		startingPrice: Yup.number().min(1).required('Required!'),
		fixedPrice: Yup.number()
			.required('Required!')
			.test({
				name: 'min',
				message: 'Fixed Price must be more than Starting Price',
				test: function (value) {
					return value > parseFloat(this.parent.startingPrice);
				},
			}),
		checkDecline: Yup.bool(),
		unapproveReason: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.nullable(true)
			.test({
				name: 'check',
				message: 'Cannot be null if unchecked',
				test: function (value) {
					if (this.parent.checkDecline) {
						return true;
					}

					return value !== null;
				},
			}),
		endDate: Yup.date()
			.min(
				new Date(),
				`End Date must be after ${new Date().toLocaleDateString()}`
			)
			.required('Required!'),
	});

	const fetchArtworkById = useCallback(async () => {
		setOpenBackdrop(true);

		await axios
			.get(API.get_artwork_by_id.url + artworkId, HeaderOptions)
			.then((res) => {
				let datas = res.data;
				setInitialValues({
					...defaultValues,
					...datas,
				});
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setOpenBackdrop(false);
			});
	}, [artworkId, defaultValues]);

	useEffect(() => {
		fetchArtworkById();

		return () => {};
	}, [fetchArtworkById]);

	const handleSubmit = async (values) => {
		debugger;
		console.log(values);
		setOpenBackdrop(true);
		if (values.checkDecline) {
			values.status = 2;
		} else {
			values.status = 4;
		}
		const artworkToEdit = {
			id: values.id,
			description: values.description,
			unapproveReason: values.unapproveReason,
			status: values.status,
			currentPrice: values.startingPrice,
		};

		const JSONArtworkToEdit = JSON.stringify(artworkToEdit);

		const aunctionToCreate = {
			startingPrice: values.startingPrice,
			highestMoneyBid: 0,
			fixedPrice: values.fixedPrice,
			createdAt: new Date(),
			finishedAt: values.endDate,
			artworkId: values.id,
			adminId: localStorage.getItem('id'),
		};

		const JSONAunctionToCreate = JSON.stringify(aunctionToCreate);

		const requestEditArtwork = axios.put(
			API.edit_artwork.url + initialValues.id,
			JSONArtworkToEdit,
			HeaderOptions
		);

		const requestCreateAunction = axios.post(
			API.create_aunction.url,
			JSONAunctionToCreate,
			HeaderOptions
		);

		debugger;

		await axios
			.all([requestEditArtwork, requestCreateAunction])
			.then(
				axios.spread((...responses) => {
					debugger;
					const responseEditArtwork = responses[0];
					const responseCreateAunction = responses[1];
					console.log(responseEditArtwork);
					console.log(responseCreateAunction);
					setNotification({
						message: 'Successfully created new aunction!',
						isOpen: true,
						isSuccess: true,
					});
				})
			)
			.catch((err) => {
				console.error(err);
				setNotification({
					message: 'Failed to create new aunction!',
					isOpen: true,
					isSuccess: false,
				});
			})
			.finally(() => {
				setOpenBackdrop(false);
			});
	};

	return (
		<>
			{notification.message === 'Successfully created new aunction!' && (
				<Redirect to="/artwork-sale-request" />
			)}
			<div className="panel-header panel-header-sm"></div>
			<div className="content">
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card-header d-flex justify-content-between">
								<h5 className="title">Artwork Sale Request Detail</h5>
								<p
									className={`btn active me-3 ${
										initialValues?.status === 1
											? 'm_bg-grey'
											: initialValues?.status === 2
											? 'm_bg-yellow'
											: initialValues?.status === 3
											? 'm_bg-green'
											: 'm_bg-red'
									}`}
									style={{ cursor: 'auto' }}
								>
									{initialValues?.status === 1
										? 'NEED TO BE HANDLED'
										: initialValues?.status === 2
										? 'IN AUNCTION'
										: initialValues?.status === 3
										? 'SOLD'
										: 'DECLINED'}
								</p>
							</div>
							<div className="card-body">
								{initialValues.status === 4 && (
									<>
										<div className="col-3">
											<h6
												className="card-title text-danger"
												style={{
													margin: '10px 0',
													letterSpacing: '-0.08em',
												}}
											>
												Reason to unapprove
											</h6>
										</div>
										<div className="col-9">
											<Typography color="red">
												{initialValues.unapproveReason}
											</Typography>
										</div>
									</>
								)}
								<Formik
									initialValues={initialValues}
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
												<FormText
													fullWidth={true}
													title="Name"
													value={values.name}
												/>

												<FormText
													fullWidth={true}
													title="Author"
													value={values.author}
												/>

												<ImagePreview
													imageURL={values.images}
													name={values.name}
												/>

												<FormText
													fullWidth={true}
													title="Location"
													value={values.location}
												/>

												<FormText
													fullWidth={true}
													title="Year"
													value={values.year}
												/>

												<FormText
													fullWidth={true}
													title="Category"
													value={values.category ? values.category.name : ''}
												/>

												{initialValues.status === 1 ? (
													<>
														<TextInput
															fullWidth={true}
															title="Description"
															name="description"
															type="text"
															errors={errors.description}
															touched={touched.description}
														/>

														<TextInput
															fullWidth={false}
															title="Starting Bid Price"
															name="startingPrice"
															type="number"
															errors={errors.startingPrice}
															touched={touched.startingPrice}
														/>

														<TextInput
															fullWidth={false}
															title="Fixed Price"
															name="fixedPrice"
															type="number"
															errors={errors.fixedPrice}
															touched={touched.fixedPrice}
														/>

														<DateInput
															title="Finish Date"
															name="endDate"
															values={values.endDate}
															errors={errors.endDate}
															touched={touched.endDate}
														/>

														<CheckboxInput
															title="Do you accept this artwork to be sold"
															name="checkDecline"
															errors={errors.checkDecline}
															checked={values.checkDecline}
														/>

														{!values.checkDecline && (
															<TextInput
																fullWidth={true}
																title="Reason not for sale"
																name="unapproveReason"
																type="text"
																errors={errors.unapproveReason}
																touched={touched.unapproveReason}
															/>
														)}
													</>
												) : (
													<>
														<FormText
															fullWidth={true}
															title="Description"
															value={values.description}
														/>

														<FormText
															fullWidth={true}
															title="Starting Price"
															value={
																values.aunction
																	? values.aunction.startingPrice
																	: 0
															}
														/>

														<FormText
															fullWidth={true}
															title="Finish Date"
															value={
																values.aunction
																	? format(
																			new Date(values.aunction.finishedAt),
																			'dd/MM/yyyy'
																	  )
																	: 0
															}
														/>
													</>
												)}

												{initialValues.status === 1 && (
													<button
														type="submit"
														className="btn btn-primary ml-3"
														style={{ width: '15%' }}
													>
														Submit
													</button>
												)}
											</div>
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

export default ArtworkSaleRequestDetail;
