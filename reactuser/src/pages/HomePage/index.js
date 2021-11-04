import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API,HeaderOptions } from '../../API';
import images from '../../assets';

const HomePage = () => {

    const [listData, setListData] = useState([]);

    const fetchData = async () => {
        console.log(API);
        await axios
            .get(API.getArtworks.url, HeaderOptions)
            .then((res) => {
                console.log(res.data);
                setListData(res.data);
            })
            .catch((error) => console.log(error))
    };

    useEffect(() => {
        fetchData();
    }, [])

	return (
	<>

<div className="outer__inner">
    <div className="section main">
        <div className="main__center center">
            <div className="main__head">
                <div className="main__stage">Create, explore, collect digital art NFTs.</div>
                <h3 className="main__title h3">The new creative economy.</h3><Link className="button-stroke main__button" to="search">Start your search</Link>
            </div>


            <div className="main__wrapper">
                    <div className="main__slide">
                        <div className="main__row">
                            <div className="player">
                                <img className='player__img' src={listData[0]?.images} alt=""/>

                            </div>
                            <div className="main__details">
                                <div className="main__subtitle h1">{listData[0]?.name}</div>
                                <div className="main__line">
                                    <div className="main__item">
                                        <div className="main__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                        <div className="main__description">
                                            <div className="main__category">Creator</div>
                                            <div className="main__text">Enrico Cole</div>
                                        </div>
                                    </div>
                                    <div className="main__item">
                                        <div className="main__icon">
                                            <svg className="icon icon-stop">
                                                <use xlinkHref="#icon-stop"></use>
                                            </svg>
                                        </div>
                                        <div className="main__description">
                                            <div className="main__category">Instant price</div>
                                            <div className="main__text">3.5 ETH</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main__wrap">
                                    <div className="main__info">Current Bid</div>
                                    <div className="main__currency">1.00 ETH</div>
                                    <div className="main__price">$3,618.36</div>
                                    <div className="main__info">Auction ending in</div>
                                    <div className="main__timer">
                                        {/* <div className="player__control">*/}
                                        {/*    <button className="player__button">*/}
                                        {/*        <svg className="icon icon-play">*/}
                                        {/*            <use xlinkHref="#icon-play"></use>*/}
                                        {/*        </svg>*/}
                                        {/*    </button>*/}
                                        {/*    <div className="player__line">*/}
                                        {/*        <div className="player__progress" style="width: 20%;"></div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="player__time">2:20</div>*/}
                                        {/*    <button className="player__button">*/}
                                        {/*        <svg className="icon icon-volume">*/}
                                        {/*            <use xlinkHref="#icon-volume"></use>*/}
                                        {/*        </svg>*/}
                                        {/*    </button>*/}
                                        {/*    <button className="player__button">*/}
                                        {/*        <svg className="icon icon-full-screen">*/}
                                        {/*            <use xlinkHref="#icon-full-screen"></use>*/}
                                        {/*        </svg>*/}
                                        {/*    </button>*/}
                                        {/*</div> */}
                                    </div>
                                </div>
                                <div className="main__btns"><Link className="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</Link><Link className="button-stroke main__button" to="Item">View item </Link></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <div className="section-pb selection">
        <div className="selection__center center">
            <div className="selection__row">
                <div className="selection__col"><Link className="selection__card" to="Item">
                    <div className="selection__preview"><img  src={listData[1]?.images} alt="Selection"/></div>
                    <div className="selection__head">
                        <div className="selection__line">
                            <div className="selection__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                            <div className="selection__description">
                                <div className="selection__title">{listData[1]?.name}</div>
                                <div className="selection__counter">18 in stock</div>
                            </div>
                        </div>
                        <div className="selection__box">
                            <div className="selection__content">Highest bid</div>
                            <div className="selection__price">1.125 ETH</div>
                        </div>
                    </div></Link></div>
                <div className="selection__col"><Link className="selection__item" to="Item">
                    <div className="selection__preview"><img srcSet={images.Homepage.card1}  alt="Selection"/></div>
                    <div className="selection__description">
                        <div className="selection__title">ETH never die</div>
                        <div className="selection__line">
                            <div className="selection__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                            <div className="selection__price">0.27 ETH</div>
                            <div className="selection__content">1 of 12</div>
                        </div>
                        <button className="button-stroke button-small selection__button">Place a bid</button>
                    </div></Link><Link className="selection__item" to="Item">
                    <div className="selection__preview"><img srcSet={images.Homepage.card2}  alt="Selection"/></div>
                    <div className="selection__description">
                        <div className="selection__title">Future coming soon</div>
                        <div className="selection__line">
                            <div className="selection__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                            <div className="selection__price">0.27 ETH</div>
                            <div className="selection__content">1 of 3</div>
                        </div>
                        <button className="button-stroke button-small selection__button">Place a bid</button>
                    </div></Link><Link className="selection__item" to="Item">
                    <div className="selection__preview"><img srcSet={images.Homepage.card3}  alt="Selection"/></div>
                    <div className="selection__description">
                        <div className="selection__title">Elon Musk silver coin 3d print</div>
                        <div className="selection__line">
                            <div className="selection__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                            <div className="selection__price">0.27 ETH</div>
                            <div className="selection__content">1 of 4</div>
                        </div>
                        <button className="button-stroke button-small selection__button">Place a bid</button>
                    </div></Link></div>
            </div>
            <div className="selection__sidebar">
                <div className="selection__info">Latest upload from creators <span role="img" aria-label="fire">🔥</span></div>
                <div className="selection__list">
                    <div className="selection__user">
                        <div className="selection__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/>
                            <div className="selection__number">6</div>
                        </div>
                        <div className="selection__description">
                            <div className="selection__name">Payton Harris</div>
                            <div className="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div className="selection__user">
                        <div className="selection__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/>
                            <div className="selection__number">2</div>
                        </div>
                        <div className="selection__description">
                            <div className="selection__name">Anita Bins</div>
                            <div className="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div className="selection__user">
                        <div className="selection__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/>
                            <div className="selection__number">3</div>
                        </div>
                        <div className="selection__description">
                            <div className="selection__name">Joana Wuckert</div>
                            <div className="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div className="selection__user">
                        <div className="selection__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/>
                            <div className="selection__number">4</div>
                        </div>
                        <div className="selection__description">
                            <div className="selection__name">Lorena Ledner</div>
                            <div className="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                </div><Link className="button-stroke button-small selection__button" to="search"><span>Discover more</span>
                <svg className="icon icon-arrow-next">
                    <use xlinkHref="#icon-arrow-next"></use>
                </svg></Link>
            </div>
        </div>
    </div>

    <div className="section discover">
        <div className="discover__center center">
            <h3 className="discover__title h3">Discover</h3>
            <div className="discover__top">
                <select className="select">
                    <option>Recently added</option>
                    <option>Long added</option>
                </select>
                <div className="discover__nav"><Link className="discover__link active" to="/">All items</Link><Link className="discover__link" to="/">Art</Link><Link className="discover__link" to="/">Game</Link><Link className="discover__link" to="/">Photography</Link><Link className="discover__link" to="/">Music</Link><Link className="discover__link" to="/">Video</Link></div>
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
                            <div className="range__slider js-slider" data-min="0.01" data-max="10" data-start="5" data-step="0.1" data-tooltips="true" data-postfix=" ETH"></div>
                            <div className="range__indicators">
                                <div className="range__text">0.01 ETH</div>
                                <div className="range__text">10 ETH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discover__list">
                <div className="discover__slider js-slider-discover js-slider-resize">
                    <div className="card">
                        <div className="card__preview"><img srcSet={images.Homepage.img1} alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><Link className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></Link>
                            </div>
                        </div><Link className="card__link" to="Item">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                </div>
                                <div className="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div className="card__foot">
                            <div className="card__status">
                                <svg className="icon icon-candlesticks-up">
                                    <use xlinkHref="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div className="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></Link>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet={images.Homepage.img2} alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><Link className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></Link>
                            </div>
                        </div><Link className="card__link" to="Item">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Ribbon Hunter</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                </div>
                                <div className="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div className="card__foot">
                            <div className="card__status">
                                <svg className="icon icon-candlesticks-up">
                                    <use xlinkHref="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div className="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></Link>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet={images.Homepage.img3} alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><Link className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></Link>
                            </div>
                        </div><Link className="card__link" to="Item">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                </div>
                                <div className="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div className="card__foot">
                            <div className="card__status">
                                <svg className="icon icon-candlesticks-up">
                                    <use xlinkHref="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div className="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></Link>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet={images.Homepage.img4} alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><Link className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></Link>
                            </div>
                        </div><Link className="card__link" to="Item">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Ribbon Hunter</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                </div>
                                <div className="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div className="card__foot">
                            <div className="card__status">
                                <svg className="icon icon-candlesticks-up">
                                    <use xlinkHref="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div className="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></Link>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet={images.Homepage.img5} alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><Link className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></Link>
                            </div>
                        </div><Link className="card__link" to="Item">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                </div>
                                <div className="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div className="card__foot">
                            <div className="card__status">
                                <svg className="icon icon-candlesticks-up">
                                    <use xlinkHref="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div className="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></Link>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet={images.Homepage.img6} alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><Link className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></Link>
                            </div>
                        </div><Link className="card__link" to="Item">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Ribbon Hunter</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                </div>
                                <div className="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div className="card__foot">
                            <div className="card__status">
                                <svg className="icon icon-candlesticks-up">
                                    <use xlinkHref="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div className="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></Link>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet={images.Homepage.img7} alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><Link className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></Link>
                            </div>
                        </div><Link className="card__link" to="Item">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                </div>
                                <div className="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div className="card__foot">
                            <div className="card__status">
                                <svg className="icon icon-candlesticks-up">
                                    <use xlinkHref="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div className="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></Link>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet={images.Homepage.img2} alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><Link className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></Link>
                            </div>
                        </div><Link className="card__link" to="Item">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                    <div className="card__avatar"><img src={images.Homepage.avatar1} alt="Avatar"/></div>
                                </div>
                                <div className="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div className="card__foot">
                            <div className="card__status">
                                <svg className="icon icon-candlesticks-up">
                                    <use xlinkHref="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div className="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></Link>
                    </div>
                </div>
            </div>
            <div className="discover__btns">
                <button className="button-stroke button-small">Load more</button>
            </div>
        </div>
    </div>
    <div className="section description">
        <div className="description__center center">
            <div className="description__wrap">
                <div className="description__stage">Save your time with Stacks</div>
                <h1 className="description__title h1">Earn free crypto with Crypter</h1>
                <div className="description__text">A creative agency that lead and inspire</div>
                <div className="description__btns"><Link className="button description__button" to="Upload-variants">Create item</Link><Link className="button-stroke description__button" to="search">Discover more</Link></div>
            </div>
            <div className="description__gallery">
                <div className="description__preview">
					<img className="some-icon" srcSet={images.Homepage.dis1} alt="Cubes"/>

				</div>
                <div className="description__preview">
					<img className="some-icon" srcSet={images.Homepage.dis2} alt="Cube"/>

            	</div>			
        	</div>
    	</div>
    <div className="popup popup_connect mfp-hide" id="popup-connect">
        <div className="popup__img">
            <svg className="icon icon-wallet">
                <use xlinkHref="#icon-wallet"></use>
            </svg>
        </div>
        <div className="popup__description">You need to connect your wallet first to sign messages and send transaction to Ethereum network</div>
        <div className="popup__btns"><Link className="button popup__button" href="connect-wallet.html">Connect wallet</Link>
            <button className="button-stroke popup__button js-popup-close">Cancel</button>
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
                        <div className="steps__text">Send transaction with your wallet</div>
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
                        <div className="steps__text">Checking balance and approving</div>
                    </div>
                </div>
                <button className="button steps__button disabled">Start now</button>
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
                        <div className="steps__text">Create a signature to place a bit</div>
                    </div>
                </div>
                <button className="button steps__button disabled js-popup-close">Start now</button>
            </div>
        </div>
    </div>
    <div className="popup popup_bid mfp-hide" id="popup-bid">
        <div className="popup__title h4">Place a bid</div>
        <div className="popup__info">You are about to purchase <strong>C O I N Z</strong> from <strong>UI8</strong></div>
        <div className="popup__subtitle">Your bid</div>
        <div className="popup__table">
            <div className="popup__row">
                <div className="popup__col">Enter bid</div>
                <div className="popup__col">
                    <div className="popup__bid">
                        <input className="popup__rate" type="tel" name="bid"/>
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
        <div className="popup__btns"><Link className="button popup__button js-popup-open" href="#popup-wallet" data-effect="mfp-zoom-in">Place a bid</Link>
            <button className="button-stroke popup__button js-popup-close">Cancel</button>
        </div>
    </div>
</div>
</div>

<script src="js/lib/jquery.min.js"></script>
<script src="js/lib/slick.min.js"></script>
<script src="js/lib/jquery.nice-select.min.js"></script>
<script src="js/lib/nouislider.min.js"></script>
<script src="js/lib/wNumb.js"></script>
<script src="js/lib/jquery.magnific-popup.min.js"></script>
<script src="js/lib/jquery.countdown.min.js"></script>
<script src="js/lib/share-buttons.js"></script>
<script src="js/demo.js"></script>
<script src="js/app.js"></script>
	</>
    );
};

export default HomePage;
