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

const ArtworkSaleRequestDetail = () => {
	const [initialValues, setInitialValues] = useState({
		name: '',
		author: '',
		description: '',
		location: '',
		currentPrice: 0,
		year: 0,
		checkDecline: false,
	});
	const [categoryOptions, setCategoryOptions] = useState([
		{ value: '', label: '' },
	]);

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
			.max(50, 'Too long!')
			.required('Required!'),
		location: Yup.string()
			.min(2, 'Too short!')
			.max(50, 'Too long!')
			.required('Required!'),
		currentPrice: Yup.number().required('Required!'),
		year: Yup.number().required('Required!'),
		categoryId: Yup.number().required('Required!'),
	});

	const fetchArtworkById = useCallback(async () => {
		setOpenBackdrop(true);

		await axios
			.get(API.get_artwork_by_id.url + artworkId, HeaderOptions)
			.then((res) => {
				console.log(res.data);
				setInitialValues(res.data);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setOpenBackdrop(false);
			});
	}, [artworkId]);

	const getCategories = async () => {
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
	};

	useEffect(() => {
		fetchArtworkById();
		getCategories();

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
							<div className="card-header">
								<h5 className="title">Artwork Sale Request Detail</h5>
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
												<TextInput
													fullWidth={true}
													title="Name"
													name="name"
													type="text"
													errors={errors.name}
													touched={touched.name}
												/>

												<TextInput
													fullWidth={true}
													title="Author"
													name="author"
													type="text"
													errors={errors.author}
													touched={touched.author}
												/>

												<TextInput
													fullWidth={true}
													title="Description"
													name="description"
													type="text"
													errors={errors.description}
													touched={touched.description}
												/>

												<TextInput
													fullWidth={true}
													title="Location"
													name="location"
													type="text"
													errors={errors.location}
													touched={touched.location}
												/>

												<TextInput
													fullWidth={false}
													title="Starting Bid Prize"
													name="currentPrize"
													type="number"
													errors={errors.currentPrize}
													touched={touched.currentPrize}
												/>

												<TextInput
													fullWidth={false}
													title="Year"
													name="year"
													type="number"
													errors={errors.year}
													touched={touched.year}
												/>

												<TextInput
													fullWidth={false}
													title="Year"
													name="year"
													type="number"
													errors={errors.year}
													touched={touched.year}
												/>

												<SelectInput
													options={categoryOptions}
													title="Category"
													name="categoryId"
													errors={errors.category}
													touched={touched.category}
												/>

												<CheckboxInput
													title="Do you accept this artwork to be sold"
													name
													type
													errors
													touched
													fullWidth
													checked
												/>

												{values.checkDecline && (
													<TextInput
														fullWidth={false}
														title="Year"
														name="year"
														type="number"
														errors={errors.year}
														touched={touched.year}
													/>
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
