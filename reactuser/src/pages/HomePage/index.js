import React from 'react';

const HomePage = () => {
	return (
	<>
        <div className="header__item header__item_notification js-header-item">
            <button className="header__head js-header-head active">
                <svg className="icon icon-notification">
                    <use xlinkHref="#icon-notification"></use>
                </svg>
            </button>
            <div className="header__body js-header-body">
                <div className="header__title h4">Notification</div>
                <div className="header__list"><a className="header__notification" href="activity.html">
                    <div className="header__preview"><img src={"img/content/notification-pic-1.jpg"} alt="Notification"/></div>
                    <div className="header__details">
                        <div className="header__subtitle">ETH received</div>
                        <div className="header__price">0.08 ETH recived</div>
                        <div className="header__date">2 days ago</div>
                    </div>
                    <div className="header__status"></div></a><a className="header__notification" href="activity.html">
                    <div className="header__preview"><img src={"img/content/notification-pic-2.jpg"} alt="Notification"/></div>
                    <div className="header__details">
                        <div className="header__subtitle">C O I N Z</div>
                        <div className="header__price">New bid 0.2 ETH</div>
                        <div className="header__date">3 days ago</div>
                    </div>
                    <div className="header__status"></div></a><a className="header__notification" href="activity.html">
                    <div className="header__preview"><img src={"img/content/notification-pic-3.jpg"} alt="Notification"/></div>
                    <div className="header__details">
                        <div className="header__subtitle">ETH received</div>
                        <div className="header__price">0.08 ETH recived</div>
                        <div className="header__date">4 days ago</div>
                    </div>
                    <div className="header__status"></div></a><a className="header__notification" href="activity.html">
                    <div className="header__preview"><img src={"img/content/notification-pic-4.jpg"} alt="Notification"/></div>
                    <div className="header__details">
                        <div className="header__subtitle">ETH received</div>
                        <div className="header__price">0.08 ETH recived</div>
                        <div className="header__date">5 days ago</div>
                    </div>
                    <div className="header__status"></div></a><a className="button-small header__button" href="activity.html">See all</a>
                </div>
            </div>
        </div>
        <div className="header__item header__item_user js-header-item js-demo-user">
            <button className="header__head js-header-head">
                <div className="header__avatar"><img src={"img/content/avatar-user.jpg"} alt="Avatar"/></div>
                <div className="header__wallet">7.00698 <span className="header__currency">ETH</span></div>
            </button>
            <div className="header__body js-header-body">
                <div className="header__name">Enrico Cole</div>
                <div className="header__code">
                    <div className="header__number">0xc4c16ab5ac7d...b21a</div>
                    <button className="header__copy">
                        <svg className="icon icon-copy">
                            <use xlinkHref="#icon-copy"></use>
                        </svg>
                    </button>
                </div>
                <div className="header__wrap">
                    <div className="header__line">
                        <div className="header__img"><img src={"img/content/etherium-circle.jpg"} alt="Etherium"/></div>
                        <div className="header__details">
                            <div className="header__info">Balance</div>
                            <div className="header__money">4.689 ETH</div>
                        </div>
                    </div>
                    <button className="button-stroke button-small header__button">Manage fun on Coinbase</button>
                </div>
                <div className="header__menu"><a className="header__link" href="profile.html">
                    <div className="header__icon">
                        <svg className="icon icon-user">
                            <use xlinkHref="#icon-user"></use>
                        </svg>
                    </div>
                    <div className="header__text">My profile</div></a><a className="header__link" href="item.html">
                    <div className="header__icon">
                        <svg className="icon icon-image">
                            <use xlinkHref="#icon-image"></use>
                        </svg>
                    </div>
                    <div className="header__text">My items</div></a>
                    <div className="header__link">
                        <div className="header__icon">
                            <svg className="icon icon-bulb">
                                <use xlinkHref="#icon-bulb"></use>
                            </svg>
                        </div>
                        <div className="header__text">Dark theme</div>
                        <label className="theme js-theme">
                            <input className="theme__input" type="checkbox"/><span className="theme__inner"><span className="theme__box"></span></span>
                        </label>
                    </div><a className="header__link" href="/">
                        <div className="header__icon">
                            <svg className="icon icon-exit">
                                <use xlinkHref="#icon-exit"></use>
                            </svg>
                        </div>
                        <div className="header__text">Disconnect</div></a>
                </div>
            </div>
        </div>
        <button className="header__burger js-header-burger"></button>


<div className="outer__inner">
    <div className="section main">
        <div className="main__center center">
            <div className="main__head">
                <div className="main__stage">Create, explore, collect digital art NFTs.</div>
                <h3 className="main__title h3">The new creative economy.</h3><a className="button-stroke main__button" href="search01.html">Start your search</a>
            </div>
            <div className="main__wrapper">
                <div className="main__slider js-slider-main">
                    <div className="main__slide">
                        <div className="main__row">
                            <div className="player">
                                <div className="player__preview"><img srcSet={"img/content/img.png 2x"} src={"img/content/img.png"} alt="Video preview"/></div>
                                {/* <div className="player__control">
                                    <button className="player__button">
                                        <svg className="icon icon-play">
                                            <use xlinkHref="#icon-play"></use>
                                        </svg>
                                    </button>
                                    <div className="player__line">
                                        <div className="player__progress" style="width: 20%;"></div>
                                    </div>
                                    <div className="player__time">2:20</div>
                                    <button className="player__button">
                                        <svg className="icon icon-volume">
                                            <use xlinkHref="#icon-volume"></use>
                                        </svg>
                                    </button>
                                    <button className="player__button">
                                        <svg className="icon icon-full-screen">
                                            <use xlinkHref="#icon-full-screen"></use>
                                        </svg>
                                    </button>
                                </div> */}
                            </div>
                            <div className="main__details">
                                <div className="main__subtitle h1">the creator network®</div>
                                <div className="main__line">
                                    <div className="main__item">
                                        <div className="main__avatar"><img src={"img/content/avatar-creator.jpg"} alt="Avatar"/></div>
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
                                    <div className="main__timer"></div>
                                </div>
                                <div className="main__btns"><a className="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</a><a className="button-stroke main__button" href="item.html">View item </a></div>
                            </div>
                        </div>
                    </div>
                    <div className="main__slide">
                        <div className="main__row">
                            <div className="player">
                                <div className="player__preview"><img srcSet={"img/content/img.png 2x"} src={"img/content/img.png"} alt="Video preview"/></div>
                                {/* <div className="player__control">
                                    <button className="player__button">
                                        <svg className="icon icon-play">
                                            <use xlinkHref="#icon-play"></use>
                                        </svg>
                                    </button>
                                    <div className="player__line">
                                        <div className="player__progress" style="width: 20%;"></div>
                                    </div>
                                    <div className="player__time">2:20</div>
                                    <button className="player__button">
                                        <svg className="icon icon-volume">
                                            <use xlinkHref="#icon-volume"></use>
                                        </svg>
                                    </button>
                                    <button className="player__button">
                                        <svg className="icon icon-full-screen">
                                            <use xlinkHref="#icon-full-screen"></use>
                                        </svg>
                                    </button>
                                </div> */}
                            </div>
                            <div className="main__details">
                                <div className="main__subtitle h1">Marco carrillo®</div>
                                <div className="main__line">
                                    <div className="main__item">
                                        <div className="main__avatar"><img src={"img/content/avatar-creator.jpg"} alt="Avatar"/></div>
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
                                    <div className="main__timer"></div>
                                </div>
                                <div className="main__btns"><a className="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</a><a className="button-stroke main__button" href="item.html">View item </a></div>
                            </div>
                        </div>
                    </div>
                    <div className="main__slide">
                        <div className="main__row">
                            <div className="player">
                                <div className="player__preview"><img srcSet={"img/content/video-preview-2@2x.png 2x"} src={"img/content/video-preview-2.png"} alt="Video preview"/></div>

                            </div>
                            <div className="main__details">
                                <div className="main__subtitle h1">the creator network®</div>
                                <div className="main__line">
                                    <div className="main__item">
                                        <div className="main__avatar"><img src={"img/content/avatar-creator.jpg"} alt="Avatar"/></div>
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
                                    <div className="main__timer"></div>
                                </div>
                                <div className="main__btns"><a className="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</a><a className="button-stroke main__button" href="item.html">View item </a></div>
                            </div>
                        </div>
                    </div>
                    <div className="main__slide">
                        <div className="main__row">
                            <div className="player">
                                <div className="player__preview"><img srcSet={"img/content/video-preview-3@2x.png 2x"} src={"img/content/video-preview-3.png"} alt="Video preview"/></div>
                                
                            </div>
                            <div className="main__details">
                                <div className="main__subtitle h1">the creator network®</div>
                                <div className="main__line">
                                    <div className="main__item">
                                        <div className="main__avatar"><img src={"img/content/avatar-creator.jpg"} alt="Avatar"/></div>
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
                                    <div className="main__timer"></div>
                                </div>
                                <div className="main__btns"><a className="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</a><a className="button-stroke main__button" href="item.html">View item </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="section-pb selection">
        <div className="selection__center center">
            <div className="selection__row">
                <div className="selection__col"><a className="selection__card" href="item.html">
                    <div className="selection__preview"><img srcSet={"img/content/selection-pic-1@2x.jpg 2x"} src={"img/content/selection-pic-1.jpg"} alt="Selection"/></div>
                    <div className="selection__head">
                        <div className="selection__line">
                            <div className="selection__avatar"><img src={"img/content/avatar-1.jpg"} alt="Avatar"/></div>
                            <div className="selection__description">
                                <div className="selection__title">The future of ETH®</div>
                                <div className="selection__counter">18 in stock</div>
                            </div>
                        </div>
                        <div className="selection__box">
                            <div className="selection__content">Highest bid</div>
                            <div className="selection__price">1.125 ETH</div>
                        </div>
                    </div></a></div>
                <div className="selection__col"><a className="selection__item" href="item.html">
                    <div className="selection__preview"><img srcSet={"img/content/selection-pic-2@2x.jpg 2x"} src={"img/content/selection-pic-2.jpg"} alt="Selection"/></div>
                    <div className="selection__description">
                        <div className="selection__title">ETH never die</div>
                        <div className="selection__line">
                            <div className="selection__avatar"><img src={"img/content/avatar-4.jpg"} alt="Avatar"/></div>
                            <div className="selection__price">0.27 ETH</div>
                            <div className="selection__content">1 of 12</div>
                        </div>
                        <button className="button-stroke button-small selection__button">Place a bid</button>
                    </div></a><a className="selection__item" href="item.html">
                    <div className="selection__preview"><img srcSet={"img/content/selection-pic-1@2x.jpg 2x"} src={"img/content/selection-pic-1.jpg"} alt="Selection"/></div>
                    <div className="selection__description">
                        <div className="selection__title">Future coming soon</div>
                        <div className="selection__line">
                            <div className="selection__avatar"><img src={"img/content/avatar-3.jpg"} alt="Avatar"/></div>
                            <div className="selection__price">0.27 ETH</div>
                            <div className="selection__content">1 of 3</div>
                        </div>
                        <button className="button-stroke button-small selection__button">Place a bid</button>
                    </div></a><a className="selection__item" href="item.html">
                    <div className="selection__preview"><img srcSet={"img/content/selection-pic-3@2x.jpg 2x"} src={"img/content/selection-pic-3.jpg"} alt="Selection"/></div>
                    <div className="selection__description">
                        <div className="selection__title">Elon Musk silver coin 3d print</div>
                        <div className="selection__line">
                            <div className="selection__avatar"><img src={"img/content/avatar-4.jpg"} alt="Avatar"/></div>
                            <div className="selection__price">0.27 ETH</div>
                            <div className="selection__content">1 of 4</div>
                        </div>
                        <button className="button-stroke button-small selection__button">Place a bid</button>
                    </div></a></div>
            </div>
            <div className="selection__sidebar">
                <div className="selection__info">Latest upload from creators <span role="img" aria-label="fire">🔥</span></div>
                <div className="selection__list">
                    <div className="selection__user">
                        <div className="selection__avatar"><img src={"img/content/avatar-1.jpg"} alt="Avatar"/>
                            <div className="selection__number">6</div>
                        </div>
                        <div className="selection__description">
                            <div className="selection__name">Payton Harris</div>
                            <div className="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div className="selection__user">
                        <div className="selection__avatar"><img src={"img/content/avatar-2.jpg"} alt="Avatar"/>
                            <div className="selection__number">2</div>
                        </div>
                        <div className="selection__description">
                            <div className="selection__name">Anita Bins</div>
                            <div className="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div className="selection__user">
                        <div className="selection__avatar"><img src={"img/content/avatar-3.jpg"} alt="Avatar"/>
                            <div className="selection__number">3</div>
                        </div>
                        <div className="selection__description">
                            <div className="selection__name">Joana Wuckert</div>
                            <div className="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div className="selection__user">
                        <div className="selection__avatar"><img src={"img/content/avatar-4.jpg"} alt="Avatar"/>
                            <div className="selection__number">4</div>
                        </div>
                        <div className="selection__description">
                            <div className="selection__name">Lorena Ledner</div>
                            <div className="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                </div><a className="button-stroke button-small selection__button" href="search01.html"><span>Discover more</span>
                <svg className="icon icon-arrow-next">
                    <use xlinkHref="#icon-arrow-next"></use>
                </svg></a>
            </div>
        </div>
    </div>
    <div className="section-bg popular">
        <div className="popular__center center">
            <div className="popular__top">
                <div className="popular__box">
                    <div className="popular__stage">Popular</div>
                    <select className="select-empty">
                        <option>Sellers</option>
                        <option>Buyers</option>
                    </select>
                </div>
                <div className="field">
                    <div className="field__label">timeframe</div>
                    <div className="field__wrap">
                        <select className="select">
                            <option>Today</option>
                            <option>Morning</option>
                            <option>Dinner</option>
                            <option>Evening</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="popular__wrapper">
                <div className="popular__slider js-slider-popular">
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#3772FF"}}>
                                    <div className="popular__icon"><img src={"img/content/cup.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#1
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-5.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Edd Harris</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#9757D7"}}>
                                    <div className="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#2
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-6.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Odell Hane</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#45B26B"}}>
                                    <div className="popular__icon"><img src={"img/content/lightning.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#3
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-7.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Marlee Kuphal</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#23262F"}}>
                                    <div className="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#4
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-8.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Payton Kunde</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#777E90"}}>
                                    <div className="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#5
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-9.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Payton Buckridge</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#3772FF"}}>
                                    <div className="popular__icon"><img src={"img/content/cup.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#1
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-5.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Edd Harris</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#9757D7"}}>
                                    <div className="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#2
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-6.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Odell Hane</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#45B26B"}}>
                                    <div className="popular__icon"><img src={"img/content/lightning.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#3
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-7.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Marlee Kuphal</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__slide">
                        <div className="popular__item">
                            <div className="popular__head">
                                <div className="popular__rating" style={{backgroundColor:"#23262F"}}>
                                    <div className="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div className="popular__number">#4
                                    </div>
                                </div>
                                <div className="popular__control">
                                    <button className="popular__button popular__add">
                                        <svg className="icon icon-add-square">
                                            <use xlinkHref="#icon-add-square"></use>
                                        </svg>
                                        <svg className="icon icon-minus-square">
                                            <use xlinkHref="#icon-minus-square"></use>
                                        </svg>
                                    </button><a className="popular__button" href="profile.html">
                                    <svg className="icon icon-arrow-expand">
                                        <use xlinkHref="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="popular__body">
                                <div className="popular__avatar">
                                    <div className="popular__preview"><img src={"img/content/avatar-8.jpg"} alt="Avatar"/></div>
                                    <div className="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div className="popular__name">Payton Kunde</div>
                                <div className="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="section hot">
        <div className="hot__center center">
            <div className="hot__wrapper">
                <h3 className="hot__title h3">Hot bid</h3>
                <div className="hot__inner">
                    <div className="hot__slider js-slider-hot">
                        <div className="hot__slide">
                            <div className="card">
                                <div className="card__preview"><img srcSet="img/content/card-pic-1@2x.jpg 2x" src="img/content/card-pic-1.jpg" alt="Card preview"/>
                                    <div className="card__control">
                                        <div className="status-green card__category">purchasing !</div>
                                        <button className="card__favorite">
                                            <svg className="icon icon-heart">
                                                <use xlinkHref="#icon-heart"></use>
                                            </svg>
                                        </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg className="icon icon-scatter-up">
                                            <use xlinkHref="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a className="card__link" href="item.html">
                                <div className="card__body">
                                    <div className="card__line">
                                        <div className="card__title">Amazing digital art</div>
                                        <div className="card__price">2.45 ETH</div>
                                    </div>
                                    <div className="card__line">
                                        <div className="card__users">
                                            <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                                </div></a>
                            </div>
                        </div>
                        <div className="hot__slide">
                            <div className="card">
                                <div className="card__preview"><img srcSet="img/content/card-pic-2@2x.jpg 2x" src="img/content/card-pic-2.jpg" alt="Card preview"/>
                                    <div className="card__control">
                                        <div className="status-green card__category">purchasing !</div>
                                        <button className="card__favorite">
                                            <svg className="icon icon-heart">
                                                <use xlinkHref="#icon-heart"></use>
                                            </svg>
                                        </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg className="icon icon-scatter-up">
                                            <use xlinkHref="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a className="card__link" href="item.html">
                                <div className="card__body">
                                    <div className="card__line">
                                        <div className="card__title">Ribbon Hunter</div>
                                        <div className="card__price">2.45 ETH</div>
                                    </div>
                                    <div className="card__line">
                                        <div className="card__users">
                                            <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                                </div></a>
                            </div>
                        </div>
                        <div className="hot__slide">
                            <div className="card">
                                <div className="card__preview"><img srcSet="img/content/card-pic-3@2x.jpg 2x" src="img/content/card-pic-3.jpg" alt="Card preview"/>
                                    <div className="card__control">
                                        <div className="status-green card__category">purchasing !</div>
                                        <button className="card__favorite">
                                            <svg className="icon icon-heart">
                                                <use xlinkHref="#icon-heart"></use>
                                            </svg>
                                        </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg className="icon icon-scatter-up">
                                            <use xlinkHref="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a className="card__link" href="item.html">
                                <div className="card__body">
                                    <div className="card__line">
                                        <div className="card__title">Amazing digital art</div>
                                        <div className="card__price">2.45 ETH</div>
                                    </div>
                                    <div className="card__line">
                                        <div className="card__users">
                                            <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                                </div></a>
                            </div>
                        </div>
                        <div className="hot__slide">
                            <div className="card">
                                <div className="card__preview"><img srcSet="img/content/card-pic-4@2x.jpg 2x" src="img/content/card-pic-4.jpg" alt="Card preview"/>
                                    <div className="card__control">
                                        <div className="status-green card__category">purchasing !</div>
                                        <button className="card__favorite">
                                            <svg className="icon icon-heart">
                                                <use xlinkHref="#icon-heart"></use>
                                            </svg>
                                        </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg className="icon icon-scatter-up">
                                            <use xlinkHref="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a className="card__link" href="item.html">
                                <div className="card__body">
                                    <div className="card__line">
                                        <div className="card__title">Ribbon Hunter</div>
                                        <div className="card__price">2.45 ETH</div>
                                    </div>
                                    <div className="card__line">
                                        <div className="card__users">
                                            <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                                </div></a>
                            </div>
                        </div>
                        <div className="hot__slide">
                            <div className="card">
                                <div className="card__preview"><img srcSet="img/content/card-pic-5@2x.jpg 2x" src="img/content/card-pic-5.jpg" alt="Card preview"/>
                                    <div className="card__control">
                                        <div className="status-green card__category">purchasing !</div>
                                        <button className="card__favorite">
                                            <svg className="icon icon-heart">
                                                <use xlinkHref="#icon-heart"></use>
                                            </svg>
                                        </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg className="icon icon-scatter-up">
                                            <use xlinkHref="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a className="card__link" href="item.html">
                                <div className="card__body">
                                    <div className="card__line">
                                        <div className="card__title">Amazing digital art</div>
                                        <div className="card__price">2.45 ETH</div>
                                    </div>
                                    <div className="card__line">
                                        <div className="card__users">
                                            <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                                </div></a>
                            </div>
                        </div>
                        <div className="hot__slide">
                            <div className="card">
                                <div className="card__preview"><img srcSet="img/content/card-pic-6@2x.jpg 2x" src="img/content/card-pic-6.jpg" alt="Card preview"/>
                                    <div className="card__control">
                                        <div className="status-green card__category">purchasing !</div>
                                        <button className="card__favorite">
                                            <svg className="icon icon-heart">
                                                <use xlinkHref="#icon-heart"></use>
                                            </svg>
                                        </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg className="icon icon-scatter-up">
                                            <use xlinkHref="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a className="card__link" href="item.html">
                                <div className="card__body">
                                    <div className="card__line">
                                        <div className="card__title">Ribbon Hunter</div>
                                        <div className="card__price">2.45 ETH</div>
                                    </div>
                                    <div className="card__line">
                                        <div className="card__users">
                                            <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                                </div></a>
                            </div>
                        </div>
                        <div className="hot__slide">
                            <div className="card">
                                <div className="card__preview"><img srcSet="img/content/card-pic-7@2x.jpg 2x" src="img/content/card-pic-7.jpg" alt="Card preview"/>
                                    <div className="card__control">
                                        <div className="status-green card__category">purchasing !</div>
                                        <button className="card__favorite">
                                            <svg className="icon icon-heart">
                                                <use xlinkHref="#icon-heart"></use>
                                            </svg>
                                        </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg className="icon icon-scatter-up">
                                            <use xlinkHref="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a className="card__link" href="item.html">
                                <div className="card__body">
                                    <div className="card__line">
                                        <div className="card__title">Amazing digital art</div>
                                        <div className="card__price">2.45 ETH</div>
                                    </div>
                                    <div className="card__line">
                                        <div className="card__users">
                                            <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                                </div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="section-bg collections">
        <div className="collections__center center">
            <div className="collections__wrapper">
                <h3 className="collections__title h3">Hot collections</h3>
                <div className="collections__inner">
                    <div className="collections__slider js-slider-collections"><a className="collections__item" href="profile.html">
                        <div className="collections__gallery">
                            <div className="collections__preview"><img src={"img/content/photo-1.1.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-1.2.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-1.3.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-1.4.jpg"} alt="Collections"/></div>
                        </div>
                        <div className="collections__subtitle">Awesome collection</div>
                        <div className="collections__line">
                            <div className="collections__user">
                                <div className="collections__avatar"><img src={"img/content/avatar-1.jpg"} alt="Avatar"/></div>
                                <div className="collections__author">By <span>Kennith Olson</span></div>
                            </div>
                            <div className="status-stroke-black collections__counter"><span>28 items</span></div>
                        </div></a><a className="collections__item" href="profile.html">
                        <div className="collections__gallery">
                            <div className="collections__preview"><img src={"img/content/photo-2.1.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-2.2.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-2.3.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-2.4.jpg"} alt="Collections"/></div>
                        </div>
                        <div className="collections__subtitle">Awesome collection</div>
                        <div className="collections__line">
                            <div className="collections__user">
                                <div className="collections__avatar"><img src={"img/content/avatar-3.jpg"} alt="Avatar"/></div>
                                <div className="collections__author">By <span>Willie Barton</span></div>
                            </div>
                            <div className="status-stroke-black collections__counter"><span>28 items</span></div>
                        </div></a><a className="collections__item" href="profile.html">
                        <div className="collections__gallery">
                            <div className="collections__preview"><img src={"img/content/photo-3.1.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-3.2.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-3.3.jpg"} alt="Collections"/></div>
                            <div className="collections__preview"><img src={"img/content/photo-3.4.jpg"} alt="Collections"/></div>
                        </div>
                        <div className="collections__subtitle">Awesome collection</div>
                        <div className="collections__line">
                            <div className="collections__user">
                                <div className="collections__avatar"><img src={"img/content/avatar-4.jpg"} alt="Avatar"/></div>
                                <div className="collections__author">By <span>Halle Jakubowski</span></div>
                            </div>
                            <div className="status-stroke-black collections__counter"><span>28 items</span></div>
                        </div></a></div>
                </div>
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
                <div className="discover__nav"><a className="discover__link active" href="/">All items</a><a className="discover__link" href="/">Art</a><a className="discover__link" href="/">Game</a><a className="discover__link" href="/">Photography</a><a className="discover__link" href="/">Music</a><a className="discover__link" href="/">Video</a></div>
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
                        <div className="card__preview"><img srcSet="img/content/card-pic-1@2x.jpg 2x" src="img/content/card-pic-1.jpg" alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a className="card__link" href="item.html">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                        </div></a>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet="img/content/card-pic-2@2x.jpg 2x" src="img/content/card-pic-2.jpg" alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a className="card__link" href="item.html">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Ribbon Hunter</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                        </div></a>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet="img/content/card-pic-3@2x.jpg 2x" src="img/content/card-pic-3.jpg" alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a className="card__link" href="item.html">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                        </div></a>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet="img/content/card-pic-4@2x.jpg 2x" src="img/content/card-pic-4.jpg" alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a className="card__link" href="item.html">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Ribbon Hunter</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                        </div></a>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet="img/content/card-pic-5@2x.jpg 2x" src="img/content/card-pic-5.jpg" alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a className="card__link" href="item.html">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                        </div></a>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet="img/content/card-pic-6@2x.jpg 2x" src="img/content/card-pic-6.jpg" alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a className="card__link" href="item.html">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Ribbon Hunter</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                        </div></a>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet="img/content/card-pic-7@2x.jpg 2x" src="img/content/card-pic-7.jpg" alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a className="card__link" href="item.html">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                        </div></a>
                    </div>
                    <div className="card">
                        <div className="card__preview"><img srcSet="img/content/card-pic-1@2x.jpg 2x" src="img/content/card-pic-1.jpg" alt="Card preview"/>
                            <div className="card__control">
                                <div className="status-green card__category">purchasing !</div>
                                <button className="card__favorite">
                                    <svg className="icon icon-heart">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                </button><a className="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg className="icon icon-scatter-up">
                                    <use xlinkHref="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a className="card__link" href="item.html">
                        <div className="card__body">
                            <div className="card__line">
                                <div className="card__title">Amazing digital art</div>
                                <div className="card__price">2.45 ETH</div>
                            </div>
                            <div className="card__line">
                                <div className="card__users">
                                    <div className="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div className="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
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
                        </div></a>
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
                <div className="description__btns"><a className="button description__button" href="upload-variants.html">Create item</a><a className="button-stroke description__button" href="search01.html">Discover more</a></div>
            </div>
            <div className="description__gallery">
                <div className="description__preview">
					<img className="some-icon" srcSet={"img/content/cubes@2x.png 2x"} src={"img/content/cubes.png"} alt="Cubes"/>
					<img className="some-icon-dark" srcSet={"img/content/cubes-dark@2x.png 2x"} src="img/content/cubes-dark.png" alt="Cubes"/>
				</div>
                <div className="description__preview">
					<img className="some-icon" srcSet={"img/content/cube@2x.png 2x"} src={"img/content/cube.png"} alt="Cube"/>
					<img className="some-icon-dark" srcSet={"img/content/cube-dark@2x.png 2x"} src="img/content/cube-dark.png" alt="Cube"/>
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
        <div className="popup__btns"><a className="button popup__button" href="connect-wallet.html">Connect wallet</a>
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
        <div className="popup__btns"><a className="button popup__button js-popup-open" href="#popup-wallet" data-effect="mfp-zoom-in">Place a bid</a>
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
