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

const ArtworkSaleRequestDetail = () => {
	const [initialValues, setInitialValues] = useState({
		name: '',
		author: '',
		description: '',
		location: '',
		startingPrize: 0,
		status: 0,
		fixedPrize: 0,
		year: 0,
		checkDecline: true,
		reason: '',
		endDate: '',
	});
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
		name: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		author: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		description: Yup.string()
			.min(2, 'Too short!')
			.max(300, 'Too long!')
			.required('Required!'),
		location: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		currentPrice: Yup.number().required('Required!'),
		fixedPrize: Yup.number().required('Required!'),
		year: Yup.number().required('Required!'),
		categoryName: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		reason: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
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
				datas.checkDecline = true;
				datas.startingPrize = 0;
				datas.endDate = new Date();
				datas.fixedPrize = 0;
				setInitialValues(datas);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setOpenBackdrop(false);
			});
	}, [artworkId]);

	/* const getCategories = async () => {
		await axios
			.get(API.getCategories.url)
			.then((res) => {
				const options = res.data.map((category) => {
					let categoryId = category.id;
					let categoryName = category.name;

					return {
						value: categoryId,
						label: categoryName,
					};
				});

				console.log(options);
				setCategoryOptions(options);
			})
			.catch((err) => console.log(err));
	}; */

	useEffect(() => {
		fetchArtworkById();
		// getCategories();

		return () => {};
	}, [fetchArtworkById]);

	const handleSubmit = (values) => {};

	return (
		<>
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

												<FormText
													fullWidth={true}
													title="Location"
													value={values.location}
												/>

												<FormText
													fullWidth={true}
													title="Location"
													value={values.year}
												/>

												{/* <SelectInput
															options={categoryOptions}
															title="Category"
															name="categoryId"
															errors={errors.category}
															touched={touched.category}
														/> */}

												<FormText
													fullWidth={true}
													title="Category"
													value={values.category.name}
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
															title="Starting Bid Prize"
															name="startingPrize"
															type="number"
															errors={errors.startingPrize}
															touched={touched.startingPrize}
														/>

														<TextInput
															fullWidth={false}
															title="Fixed Prize"
															name="fixedPrize"
															type="number"
															errors={errors.fixedPrize}
															touched={touched.fixedPrize}
														/>

														<DateInput
															title="Finish Time"
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
																fullWidth={false}
																title="Reason not for sale"
																name="reason"
																type="text"
																errors={errors.reason}
																touched={touched.reason}
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
															title="Starting Prize"
															value={values.startingPrize}
														/>
													</>
												)}

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

export default ArtworkSaleRequestDetail;
