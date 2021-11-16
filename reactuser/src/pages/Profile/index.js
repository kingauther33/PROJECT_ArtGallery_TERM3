import React, { useEffect, useState, useCallback } from 'react';
import images from 'assets';
import axios from 'axios';
import { API, HeaderOptions } from 'API';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { format } from 'date-fns';
import CustomBackdrop from 'components/CustomBackdrop';

const Profile = () => {
	const [user, setUser] = useState({
		id: 0,
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		role: '',
		avatar: '',
		deposit: 0,
		createdAt: null,
	});

	const [artworks, setArtWorks] = useState([]);
	const [customerRequest, setCustomerRequest] = useState({
		status: 0,
	});
	const [showRequestSaleModal, setShowRequestSaleModal] = useState(false);
	const [showRequestArtistModal, setShowRequestArtistModal] = useState(false);
	const [artworkModalData, setArtworkModalData] = useState({});
	const [openBackdrop, setOpenBackdrop] = useState(false);
	const { id: userIdParam } = useParams();
	const userId = localStorage.getItem('id');

	const onRequestHandler = (data) => {
		setShowRequestSaleModal(true);
		setArtworkModalData(data);
	};

	const onBecomeArtistHandler = () => {
		setShowRequestArtistModal(true);
	};

	const onRequestSaleSubmit = async () => {
		setOpenBackdrop(true);
		const artworkChangeStatus = {
			...artworkModalData,
			status: 1,
		};

		const json = JSON.stringify(artworkChangeStatus);
		debugger;

		await axios
			.put(API.editArtworkStatus.url + artworkModalData.id, json, HeaderOptions)
			.then((res) => console.log(res))
			.catch((err) => console.error(err))
			.finally(() => {
				setOpenBackdrop(false);
				setShowRequestSaleModal(false);
				fetchArtworks();
			});
	};

	const onRequestArtistSubmit = async () => {
		setOpenBackdrop(true);
		const customerToSubmit = {
			customerId: userId,
		};

		const json = JSON.stringify(customerToSubmit);

		debugger;

		await axios
			.post(API.createCustomerRequest.url, json, HeaderOptions)
			.then((res) => console.log(res))
			.catch((err) => console.error(err))
			.finally(() => {
				setOpenBackdrop(false);
				setShowRequestArtistModal(false);
				fetchCustomerRequest();
			});
	};

	const onCloseRequestSaleModal = () => {
		setShowRequestSaleModal(false);
	};

	const onCloseRequestArtistModal = () => {
		setShowRequestArtistModal(false);
	};

	const fetchArtworks = useCallback(async () => {
		await axios
			.get(API.getArtworkByUser.url + userId, HeaderOptions)
			.then((res) => {
				setArtWorks(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setOpenBackdrop(false);
				setShowRequestSaleModal(false);
			});
	}, [userId]);

	const fetchUser = useCallback(async () => {
		await axios
			.get(API.getUserById.url + userId, HeaderOptions)
			.then((res) => {
				setUser(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, [userId]);

	const fetchCustomerRequest = useCallback(async () => {
		await axios
			.get(API.getCustomerRequestByPersonId.url + userId, HeaderOptions)
			.then((res) => {
				setCustomerRequest(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, [userId]);

	useEffect(() => {
		setOpenBackdrop(true);

		fetchUser();
		fetchArtworks();
		fetchCustomerRequest();

		return () => {};
	}, [fetchArtworks, fetchCustomerRequest, fetchUser]);

	return (
		<>
			{(!userId || userId !== userIdParam) && <Redirect to="/home" />}
			<div className="outer">
				<div className="outer__inner">
					<div className="profile">
						<div className="profile__head js-profile-head profile__bg">
							<div className="profile__center center">
								<div className="profile__btns">
									<p
										className={`button-small text-white me-3 ${
											user.role === 'Artist' ? 'bg-success' : 'bg-danger'
										}`}
									>
										<span className="me-3">
											{user.role === 'Artist' ? 'Approved' : 'Not Approved'}
										</span>
										{user.role === 'Artist' ? (
											<i class="fas fa-user-check"></i>
										) : (
											<i className="fas fa-user-times"></i>
										)}
									</p>
									<a
										className="button-stroke button-small profile__button"
										href="profile-edit.html"
									>
										{' '}
										<span>Edit profile</span>
										<svg className="icon icon-image">
											<use xlinkHref="#icon-image"></use>
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div className="profile__body">
							<div className="profile__center center">
								<div className="user">
									<div className="user__avatar">
										<img
											src={
												user.avatar
													? user.avatar
													: 'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2FdefaultAva.png?alt=media&token=80389b41-4d3f-45ec-b259-2cc6276ca53b'
											}
											alt="Avatar"
										/>
									</div>
									<div className="user__name mb-3">{`${user.lastName} ${user.firstName}`}</div>
									{/* <div className="user__code">
										<div className="user__number">0xc4c16a645...b21a</div>
										<button className="user__copy">
											<svg className="icon icon-copy">
												<use xlinkHref="#icon-copy"></use>
											</svg>
										</button>
									</div> */}
									<div className="h5 text-primary mb-3">
										Deposit:{user.deposit}
									</div>
									<div className="user__control mb-3">
										<div className="user__btns">
											<Link
												to="/deposit"
												className="button-stroke button-small user__button js-user-follow"
											>
												<span>Deposit Now</span>
											</Link>
										</div>
									</div>
									<h4 className="m_text-dark">{user.role}</h4>

									{/* <div className="user__socials">
										<a
											className="user__social"
											href="https://twitter.com/ui8"
											rel="noreferrer"
											target="_blank"
										>
											<svg className="icon icon-twitter">
												<use xlinkHref="#icon-twitter"></use>
											</svg>
										</a>
										<a
											className="user__social"
											href="https://www.instagram.com/ui8net/"
											target="_blank"
											rel="noreferrer"
										>
											<svg className="icon icon-instagram">
												<use xlinkHref="#icon-instagram"></use>
											</svg>
										</a>
										<a
											className="user__social"
											href="https://www.facebook.com/ui8.net/"
											target="_blank"
											rel="noreferrer"
										>
											<svg className="icon icon-facebook">
												<use xlinkHref="#icon-facebook"></use>
											</svg>
										</a>
									</div> */}
									<div className="user__note">
										Member since{' '}
										{user.createdAt &&
											format(new Date(user.createdAt), 'MMM dd, yyyy')}{' '}
									</div>
								</div>
								<div className="profile__wrapper js-tabs">
									{/* // !CATEGORIES */}
									{/* <div className="profile__nav">
										<a className="profile__link js-tabs-link active" href="/">
											On Sale
										</a>
										<a className="profile__link js-tabs-link" href="/">
											Collectibles
										</a>
									</div> */}

									{/* // !BODY */}
									{user.role === 'Customer' ? (
										// !YOU ARE CUSTOMER NOW
										<>
											{customerRequest.status === 0 ? (
												<div className="d-flex align-items-center justify-content-center flex-grow-1 mb-3">
													<h4>Processing your request to become artist ...</h4>
												</div>
											) : (
												<div className="d-flex align-items-center justify-content-end flex-grow-1 mb-3">
													<Link
														className="button description__button"
														to="#"
														onClick={onBecomeArtistHandler}
													>
														Become An Artist
													</Link>
												</div>
											)}
										</>
									) : // !YOU ARE ARTIST NOW
									artworks.length === 0 ? (
										<div className="d-flex align-items-center justify-content-between flex-grow-1">
											<h4 className="text-primary">No Artwork to display</h4>
											<Link
												className="button description__button"
												to="/upload-details"
											>
												Upload artwork
											</Link>
										</div>
									) : (
										<>
											<div className="d-flex align-items-center justify-content-end flex-grow-1 mb-3">
												<Link
													className="button description__button"
													to="/upload-details"
												>
													Upload artwork
												</Link>
											</div>
											<div className="profile__container">
												<div className="profile__item js-tabs-item d-block">
													<div className="profile__list">
														{artworks.map((artwork, idx) => {
															return (
																<div className="card" key={idx}>
																	<div className="card__preview">
																		<img
																			srcSet={artwork.images}
																			alt="Card preview"
																		/>
																		<div className="card__control">
																			<div
																				className={`${
																					artwork.status === 4
																						? 'status-red'
																						: 'status-green'
																				} card__category`}
																			>
																				{artwork.status === 0
																					? 'REQUEST TO SELL'
																					: artwork.status === 1
																					? 'REQUESTING'
																					: artwork.status === 2
																					? 'SELLING'
																					: artwork.status === 3
																					? 'SOLD'
																					: ''}
																			</div>
																			{/* <button className="card__favorite">
																		<svg className="icon icon-heart">
																			<use xlinkHref="#icon-heart"></use>
																		</svg>
																	</button> */}
																			{artwork.status === 0 && (
																				<Link
																					className="button-small card__button js-popup-open"
																					to="#"
																					data-effect="mfp-zoom-in"
																					onClick={onRequestHandler.bind(
																						null,
																						artwork
																					)}
																				>
																					<span>
																						{artwork.status === 0
																							? 'SELL NOW'
																							: ''}
																					</span>
																					<svg className="icon icon-scatter-up">
																						<use xlinkHref="#icon-scatter-up"></use>
																					</svg>
																				</Link>
																			)}
																		</div>
																	</div>
																	<a className="card__link" href="item.html">
																		<div className="card__body">
																			<div className="card__line">
																				<div className="card__title">
																					{artwork.name}
																				</div>
																				{artwork.status === 0 ? (
																					<div className="card__price">
																						PLEASE REQUEST
																					</div>
																				) : artwork.status === 1 ? (
																					<div className="card__price">
																						CALCULATING
																					</div>
																				) : artwork.status === 2 ||
																				  artwork.status === 3 ? (
																					<div className="card__price">
																						{artwork.currentPrice}
																					</div>
																				) : (
																					<div className="card__price status-red text-white shadow-none">
																						DECLINED
																					</div>
																				)}
																			</div>
																			<div className="card__line">
																				<div className="card__users">
																					<div className="card__avatar">
																						<img
																							src={images.Homepage.avatar1}
																							alt="Avatar"
																						/>
																					</div>
																					<div className="card__avatar">
																						<img
																							src={images.Homepage.avatar1}
																							alt="Avatar"
																						/>
																					</div>
																					<div className="card__avatar">
																						<img
																							src={images.Homepage.avatar1}
																							alt="Avatar"
																						/>
																					</div>
																				</div>
																				<div className="card__counter">
																					3 in stock
																				</div>
																			</div>
																		</div>
																		<div className="card__foot">
																			<div className="card__status">
																				<svg className="icon icon-candlesticks-up">
																					<use xlinkHref="#icon-candlesticks-up"></use>
																				</svg>
																				Highest bid <span>0.001 ETH</span>
																			</div>
																			<div className="card__bid">
																				New bid{' '}
																				<span role="img" aria-label="fire">
																					🔥
																				</span>
																			</div>
																		</div>
																	</a>
																</div>
															);
														})}
													</div>
													{/* <div className="loader"></div> */}
												</div>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="popup popup_report mfp-hide" id="popup-report">
						<div className="popup__title h4">Report</div>
						<div className="popup__note">
							Describe why you think this item should be removed from
							marketplace
						</div>
						<div className="field">
							<div className="field__label">message</div>
							<div className="field__wrap">
								<textarea
									className="field__textarea"
									name="message"
									placeholder="Tell us the details"
									required
								></textarea>
							</div>
						</div>
						<div className="popup__btns">
							<button className="button-purple popup__button">Send now</button>
							<button className="button-stroke popup__button">Cancel</button>
						</div>
					</div>
					<div className="popup popup_wallet mfp-hide" id="popup-wallet">
						<div className="popup__title h4">Folow steps</div>
						<div className="steps">
							<div className="steps__item">
								<div className="steps__head">
									<div className="steps__icon">
										<svg className="icon icon-upload-file">
											<use xlinkHref="#icon-upload-file"></use>
										</svg>
									</div>
									<div className="steps__details">
										<div className="steps__info">Deposit ETH</div>
										<div className="steps__text">
											Send transaction with your wallet
										</div>
									</div>
								</div>
								<button className="button steps__button">Start now</button>
							</div>
							<div className="steps__item">
								<div className="steps__head">
									<div className="steps__icon">
										<svg className="icon icon-check">
											<use xlinkHref="#icon-check"></use>
										</svg>
									</div>
									<div className="steps__details">
										<div className="steps__info">Approve</div>
										<div className="steps__text">
											Checking balance and approving
										</div>
									</div>
								</div>
								<button className="button steps__button disabled">
									Start now
								</button>
							</div>
							<div className="steps__item">
								<div className="steps__head">
									<div className="steps__icon">
										<svg className="icon icon-pencil">
											<use xlinkHref="#icon-pencil"></use>
										</svg>
									</div>
									<div className="steps__details">
										<div className="steps__info">Signature</div>
										<div className="steps__text">
											Create a signature to place a bit
										</div>
									</div>
								</div>
								<button className="button steps__button disabled js-popup-close">
									Start now
								</button>
							</div>
						</div>
					</div>
					<div className="popup popup_bid mfp-hide" id="popup-bid">
						<div className="popup__title h4">Place a bid</div>
						<div className="popup__info">
							You are about to purchase <strong>C O I N Z</strong> from{' '}
							<strong>UI8</strong>
						</div>
						<div className="popup__subtitle">Your bid</div>
						<div className="popup__table">
							<div className="popup__row">
								<div className="popup__col">Enter bid</div>
								<div className="popup__col">
									<div className="popup__bid">
										<input className="popup__rate" type="tel" name="bid" />
										<div className="popup__currency">ETH</div>
									</div>
								</div>
							</div>
							<div className="popup__row">
								<div className="popup__col">Your balance</div>
								<div className="popup__col">8.498 ETH</div>
							</div>
							<div className="popup__row">
								<div className="popup__col">Service fee</div>
								<div className="popup__col">0 ETH</div>
							</div>
							<div className="popup__row">
								<div className="popup__col">Total bid amount</div>
								<div className="popup__col">0 ETH</div>
							</div>
						</div>
						<div className="popup__btns">
							<a
								className="button popup__button js-popup-open"
								href="#popup-wallet"
								data-effect="mfp-zoom-in"
							>
								Place a bid
							</a>
							<button className="button-stroke popup__button js-popup-close">
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>

			<CustomBackdrop openBackdrop={openBackdrop} />
			<Modal show={showRequestSaleModal} onHide={onCloseRequestSaleModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						Are you sure you want to request to put your art on sale?
					</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button variant="secondary" onClick={onCloseRequestSaleModal}>
						No
					</Button>
					<Button variant="primary" onClick={onRequestSaleSubmit}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showRequestArtistModal} onHide={onCloseRequestArtistModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						Are you sure you want to request to become an artist?
					</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button variant="secondary" onClick={onCloseRequestArtistModal}>
						No
					</Button>
					<Button variant="primary" onClick={onRequestArtistSubmit}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Profile;
