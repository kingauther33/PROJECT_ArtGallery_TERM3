import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { API, HeaderOptions } from 'API';
import images from 'assets';
import LoginContext from 'stores/login-context';

const HomePage = () => {
	const loginCtx = useContext(LoginContext);

	const [artworksBidding, setArtworksBidding] = useState([]);
	const [allArtworks, setAllArtworks] = useState([]);
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const fetchArtworksBidding = async () => {
		await axios
			.get(API.getArtworksBidding.url, HeaderOptions)
			.then((res) => {
				setArtworksBidding(res.data);
			})
			.catch((error) => console.error(error));
	};

	const fetchAllArtworks = async () => {
		await axios
			.get(API.getArtworks.url, HeaderOptions)
			.then((res) => {
				setAllArtworks(res.data);
			})
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		fetchArtworksBidding();
		fetchAllArtworks();
	}, []);

	useEffect(() => {
		if (artworksBidding[0]) {
			const deadLine = new Date(
				artworksBidding[0].aunction.finishedAt
			).getTime();

			const intervalId = setInterval(() => {
				const newCountdown = { ...countdown };
				let delta = Math.abs(deadLine - new Date().getTime()) / 1000;
				newCountdown.days = Math.floor(delta / 86400);
				delta -= newCountdown.days * 86400;
				newCountdown.hours = Math.floor(delta / 3600) % 24;
				delta -= newCountdown.hours * 3600;
				newCountdown.minutes = Math.floor(delta / 60) % 60;
				delta -= newCountdown.minutes * 60;
				newCountdown.seconds = Math.floor(delta % 60);
				setCountdown(newCountdown);
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [countdown, artworksBidding]);

	return (
		<>
			<div className="outer__inner">
				<div className="section main">
					<div className="main__center center">
						<div className="main__head">
							<div className="main__stage">
								Create, explore, collect digital art NFTs.
							</div>
							<h3 className="main__title h3">The new creative economy.</h3>
							<Link className="button-stroke main__button" to="search">
								Start your search
							</Link>
						</div>

						<div className="main__wrapper">
							<div className="main__slide">
								<div className="main__row">
									<div className="player">
										<img
											className="player__img"
											src={artworksBidding[0]?.images}
											alt=""
										/>
									</div>
									<div className="main__details">
										<div
											className="main__subtitle h1"
											style={{ fontSize: '64px' }}
										>
											{artworksBidding[0]?.name}
										</div>
										<div className="main__line">
											<div className="main__item">
												<div className="main__icon">
													<svg className="icon icon-stop">
														<use xlinkHref="#icon-stop"></use>
													</svg>
												</div>
												<div className="main__description">
													<div className="main__category">Instant price</div>
													<div className="main__text">
														{artworksBidding[0]?.aunction?.fixedPrice} $
													</div>
												</div>
											</div>
										</div>
										<div className="main__wrap">
											<div className="main__info">Current Bid</div>
											<div className="main__currency">
												{artworksBidding[0]?.currentPrice} $
											</div>
											<div className="main__info">Auction ending in</div>
											<div class="main__timer">
												<span class="main__box">
													<span class="main__number">
														{String(countdown.days).padStart(2, '0')}
													</span>
													<span class="main__time">Days</span>
												</span>
												<span class="main__box">
													<span class="main__number">
														{String(countdown.hours).padStart(2, '0')}
													</span>
													<span class="main__time">Hrs</span>
												</span>
												<span class="main__box">
													<span class="main__number">
														{String(countdown.minutes).padStart(2, '0')}
													</span>
													<span class="main__time">mins</span>
												</span>
												<span class="main__box">
													<span class="main__number">
														{String(countdown.seconds).padStart(2, '0')}
													</span>
													<span class="main__time">secs</span>
												</span>
											</div>
										</div>
										<div className="main__btns">
											<Link
												className="button main__button js-popup-open"
												to={`/item/${artworksBidding[0]?.id}`}
												data-effect="mfp-zoom-in"
											>
												Place a bid
											</Link>
											<Link
												className="button-stroke main__button"
												to={`/item/${artworksBidding[0]?.id}`}
											>
												View item{' '}
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-pb selection">
					<div className="center">
						<h3 className="discover__title h3" style={{ fontSize: '40px' }}>
							Bidding
						</h3>
					</div>
					<div className="selection__center center">
						<div className="selection__row">
							<div className="selection__col">
								<Link className="selection__card" to="Item">
									<div className="selection__preview">
										<img src={artworksBidding[1]?.images} alt="Selection" />
									</div>
									<div className="selection__head">
										<div className="selection__line">
											<div className="selection__description">
												<div className="selection__title">
													{artworksBidding[1]?.name}
												</div>
												<div className="selection__counter">
													{artworksBidding[1]?.description}
												</div>
											</div>
										</div>
										<div className="selection__box">
											<div className="selection__content">Highest bid</div>
											<div className="selection__price">
												{artworksBidding[1]?.aunction.highestMoneyBid} $
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div className="selection__col">
								{artworksBidding
									.filter((artwork, idx) => idx > 1 && idx < 5)
									.map((artwork, idx) => (
										<Link
											key={idx}
											className="selection__item"
											to={`/item/${artwork.id}`}
										>
											<div className="selection__preview">
												<img srcSet={artwork?.images} alt="Selection" />
											</div>
											<div className="selection__description">
												<div className="selection__title">{artwork?.name}</div>
												<div className="selection__line">
													<div className="selection__price">
														{artwork?.aunction.highestMoneyBid} $
													</div>
													<div className="selection__content">
														{artwork.description.length > 25
															? artwork.description.substring(0, 25) + ' ...'
															: artwork.description}
													</div>
												</div>
												<Link
													to={`/item/${artwork.id}`}
													className="button-stroke button-small selection__button"
												>
													Place a bid
												</Link>
											</div>
										</Link>
									))}
							</div>
						</div>
					</div>
				</div>

				<div className="section discover">
					<div className="discover__center center">
						<h3 className="discover__title h3" style={{ fontSize: '40px' }}>
							Discover
						</h3>
						{/* <div className="discover__top">
							<select className="select">
								<option>Recently added</option>
								<option>Long added</option>
							</select>
							<div className="discover__nav">
								<Link className="discover__link active" to="/">
									All items
								</Link>
								<Link className="discover__link" to="/">
									Art
								</Link>
								<Link className="discover__link" to="/">
									Game
								</Link>
								<Link className="discover__link" to="/">
									Photography
								</Link>
								<Link className="discover__link" to="/">
									Music
								</Link>
								<Link className="discover__link" to="/">
									Video
								</Link>
							</div>
							<div className="tablet-show">
								<select className="select">
									<option>All items</option>
									<option>Art</option>
									<option>Game</option>
									<option>Photography</option>
									<option>Music</option>
									<option>Video</option>
								</select>
							</div>
							<button className="discover__filter">
								<div className="discover__text">Filter</div>
								<div className="discover__icon">
									<svg className="icon icon-filter">
										<use xlinkHref="#icon-filter"></use>
									</svg>
									<svg className="icon icon-close">
										<use xlinkHref="#icon-close"></use>
									</svg>
								</div>
							</button>
						</div>
						<div className="discover__filters">
							<div className="discover__sorting">
								<div className="discover__cell">
									<div className="field">
										<div className="field__label">Price</div>
										<div className="field__wrap">
											<select className="select">
												<option>Highest price</option>
												<option>The lowest price</option>
											</select>
										</div>
									</div>
								</div>
								<div className="discover__cell">
									<div className="field">
										<div className="field__label">likes</div>
										<div className="field__wrap">
											<select className="select">
												<option>Most liked</option>
												<option>Least liked</option>
											</select>
										</div>
									</div>
								</div>
								<div className="discover__cell">
									<div className="field">
										<div className="field__label">creator</div>
										<div className="field__wrap">
											<select className="select">
												<option>Verified only</option>
												<option>All</option>
												<option>Most liked</option>
											</select>
										</div>
									</div>
								</div>
								<div className="discover__cell">
									<div className="range">
										<div className="range__label">Price range</div>
										<div
											className="range__slider js-slider"
											data-min="0.01"
											data-max="10"
											data-start="5"
											data-step="0.1"
											data-tooltips="true"
											data-postfix=" ETH"
										></div>
										<div className="range__indicators">
											<div className="range__text">0.01 ETH</div>
											<div className="range__text">10 ETH</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
						<div className="discover__list">
							<div className="discover__slider js-slider-discover js-slider-resize">
								{allArtworks
									.filter((artwork, idx) => idx < 4)
									.map((artwork, idx) => (
										<div className="card">
											<div className="card__preview">
												<img srcSet={artwork?.images} alt="Card preview" />
												<div className="card__control">
													<Link
														className="button-small card__button js-popup-open"
														to={`/item/${artwork.id}`}
														data-effect="mfp-zoom-in"
													>
														<span>View Item</span>
													</Link>
												</div>
											</div>
											<Link className="card__link" to={`/item/${artwork.id}`}>
												<div className="card__body">
													<div className="card__line">
														<div className="card__title">{artwork?.name}</div>
													</div>
													<div className="align-item-start selection__content">
														{artwork?.description}
													</div>
												</div>
												{/* <div className="card__foot">
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
												</div> */}
											</Link>
										</div>
									))}
							</div>
						</div>
						<div className="discover__btns">
							<Link to="/artwork" className="button-stroke button-small">
								Load more
							</Link>
						</div>
					</div>
				</div>
				<div className="section description">
					<div className="description__center center">
						<div className="description__wrap">
							<div className="description__stage">
								Save your time with Stacks
							</div>
							<h1
								className="description__title h1"
								style={{ fontSize: '64px' }}
							>
								Earn money with Your Art
							</h1>
							<div className="description__text">
								A creative agency that lead and inspire
							</div>
							<div className="description__btns">
								{!loginCtx.isLoggedIn ? (
									<Link className="button description__button" to="/login">
										Create item
									</Link>
								) : loginCtx.role === 'Artist' ? (
									<Link
										className="button description__button"
										to="/upload-details"
									>
										Upload artwork
									</Link>
								) : (
									<Link className="button description__button" to="/profile">
										Become Artist
									</Link>
								)}

								<Link
									className="button-stroke description__button"
									to="/artwork"
								>
									Discover more
								</Link>
							</div>
						</div>
						<div className="description__gallery">
							<div className="description__preview">
								<img
									className="some-icon"
									srcSet={images.Homepage.dis1}
									alt="Cubes"
								/>
							</div>
							<div className="description__preview">
								<img
									className="some-icon"
									srcSet={images.Homepage.dis2}
									alt="Cube"
								/>
							</div>
						</div>
					</div>
					<div className="popup popup_connect mfp-hide" id="popup-connect">
						<div className="popup__img">
							<svg className="icon icon-wallet">
								<use xlinkHref="#icon-wallet"></use>
							</svg>
						</div>
						<div className="popup__description">
							You need to connect your wallet first to sign messages and send
							transaction to Ethereum network
						</div>
						<div className="popup__btns">
							<Link className="button popup__button" href="connect-wallet.html">
								Connect wallet
							</Link>
							<button className="button-stroke popup__button js-popup-close">
								Cancel
							</button>
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
							<Link
								className="button popup__button js-popup-open"
								href="#popup-wallet"
								data-effect="mfp-zoom-in"
							>
								Place a bid
							</Link>
							<button className="button-stroke popup__button js-popup-close">
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
