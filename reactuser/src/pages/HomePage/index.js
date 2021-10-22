import React from 'react';

const HomePage = () => {
	return 
	<>

<body>
<script>
    {/* console.log(localStorage.getItem('darkMode'));
    if (localStorage.getItem('darkMode') === "on") {
        document.body.classList.add("dark");
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector('.js-theme input').checked = true
        });
	} */}
</script>



        <div class="header__item header__item_notification js-header-item">
            <button class="header__head js-header-head active">
                <svg class="icon icon-notification">
                    <use xlink:href="#icon-notification"></use>
                </svg>
            </button>
            <div class="header__body js-header-body">
                <div class="header__title h4">Notification</div>
                <div class="header__list"><a class="header__notification" href="activity.html">
                    <div class="header__preview"><img src={"img/content/notification-pic-1.jpg"} alt="Notification"/></div>
                    <div class="header__details">
                        <div class="header__subtitle">ETH received</div>
                        <div class="header__price">0.08 ETH recived</div>
                        <div class="header__date">2 days ago</div>
                    </div>
                    <div class="header__status"></div></a><a class="header__notification" href="activity.html">
                    <div class="header__preview"><img src={"img/content/notification-pic-2.jpg"} alt="Notification"/></div>
                    <div class="header__details">
                        <div class="header__subtitle">C O I N Z</div>
                        <div class="header__price">New bid 0.2 ETH</div>
                        <div class="header__date">3 days ago</div>
                    </div>
                    <div class="header__status"></div></a><a class="header__notification" href="activity.html">
                    <div class="header__preview"><img src={"img/content/notification-pic-3.jpg"} alt="Notification"/></div>
                    <div class="header__details">
                        <div class="header__subtitle">ETH received</div>
                        <div class="header__price">0.08 ETH recived</div>
                        <div class="header__date">4 days ago</div>
                    </div>
                    <div class="header__status"></div></a><a class="header__notification" href="activity.html">
                    <div class="header__preview"><img src={"img/content/notification-pic-4.jpg"} alt="Notification"/></div>
                    <div class="header__details">
                        <div class="header__subtitle">ETH received</div>
                        <div class="header__price">0.08 ETH recived</div>
                        <div class="header__date">5 days ago</div>
                    </div>
                    <div class="header__status"></div></a><a class="button-small header__button" href="activity.html">See all</a>
                </div>
            </div>
        </div>
        <div class="header__item header__item_user js-header-item js-demo-user">
            <button class="header__head js-header-head">
                <div class="header__avatar"><img src={"img/content/avatar-user.jpg"} alt="Avatar"/></div>
                <div class="header__wallet">7.00698 <span class="header__currency">ETH</span></div>
            </button>
            <div class="header__body js-header-body">
                <div class="header__name">Enrico Cole</div>
                <div class="header__code">
                    <div class="header__number">0xc4c16ab5ac7d...b21a</div>
                    <button class="header__copy">
                        <svg class="icon icon-copy">
                            <use xlink:href="#icon-copy"></use>
                        </svg>
                    </button>
                </div>
                <div class="header__wrap">
                    <div class="header__line">
                        <div class="header__img"><img src={"img/content/etherium-circle.jpg"} alt="Etherium"/></div>
                        <div class="header__details">
                            <div class="header__info">Balance</div>
                            <div class="header__money">4.689 ETH</div>
                        </div>
                    </div>
                    <button class="button-stroke button-small header__button">Manage fun on Coinbase</button>
                </div>
                <div class="header__menu"><a class="header__link" href="profile.html">
                    <div class="header__icon">
                        <svg class="icon icon-user">
                            <use xlink:href="#icon-user"></use>
                        </svg>
                    </div>
                    <div class="header__text">My profile</div></a><a class="header__link" href="item.html">
                    <div class="header__icon">
                        <svg class="icon icon-image">
                            <use xlink:href="#icon-image"></use>
                        </svg>
                    </div>
                    <div class="header__text">My items</div></a>
                    <div class="header__link">
                        <div class="header__icon">
                            <svg class="icon icon-bulb">
                                <use xlink:href="#icon-bulb"></use>
                            </svg>
                        </div>
                        <div class="header__text">Dark theme</div>
                        <label class="theme js-theme">
                            <input class="theme__input" type="checkbox"/><span class="theme__inner"><span class="theme__box"></span></span>
                        </label>
                    </div><a class="header__link" href="#">
                        <div class="header__icon">
                            <svg class="icon icon-exit">
                                <use xlink:href="#icon-exit"></use>
                            </svg>
                        </div>
                        <div class="header__text">Disconnect</div></a>
                </div>
            </div>
        </div>
        <button class="header__burger js-header-burger"></button>


<div class="outer__inner">
    <div class="section main">
        <div class="main__center center">
            <div class="main__head">
                <div class="main__stage">Create, explore, collect digital art NFTs.</div>
                <h3 class="main__title h3">The new creative economy.</h3><a class="button-stroke main__button" href="search01.html">Start your search</a>
            </div>
            <div class="main__wrapper">
                <div class="main__slider js-slider-main">
                    <div class="main__slide">
                        <div class="main__row">
                            <div class="player">
                                <div class="player__preview"><img srcSet={"img/content/img.png 2x"} src={"img/content/img.png"} alt="Video preview"/></div>
                                {/* <div class="player__control">
                                    <button class="player__button">
                                        <svg class="icon icon-play">
                                            <use xlink:href="#icon-play"></use>
                                        </svg>
                                    </button>
                                    <div class="player__line">
                                        <div class="player__progress" style="width: 20%;"></div>
                                    </div>
                                    <div class="player__time">2:20</div>
                                    <button class="player__button">
                                        <svg class="icon icon-volume">
                                            <use xlink:href="#icon-volume"></use>
                                        </svg>
                                    </button>
                                    <button class="player__button">
                                        <svg class="icon icon-full-screen">
                                            <use xlink:href="#icon-full-screen"></use>
                                        </svg>
                                    </button>
                                </div> */}
                            </div>
                            <div class="main__details">
                                <div class="main__subtitle h1">the creator network®</div>
                                <div class="main__line">
                                    <div class="main__item">
                                        <div class="main__avatar"><img src={"img/content/avatar-creator.jpg"} alt="Avatar"/></div>
                                        <div class="main__description">
                                            <div class="main__category">Creator</div>
                                            <div class="main__text">Enrico Cole</div>
                                        </div>
                                    </div>
                                    <div class="main__item">
                                        <div class="main__icon">
                                            <svg class="icon icon-stop">
                                                <use xlink:href="#icon-stop"></use>
                                            </svg>
                                        </div>
                                        <div class="main__description">
                                            <div class="main__category">Instant price</div>
                                            <div class="main__text">3.5 ETH</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__wrap">
                                    <div class="main__info">Current Bid</div>
                                    <div class="main__currency">1.00 ETH</div>
                                    <div class="main__price">$3,618.36</div>
                                    <div class="main__info">Auction ending in</div>
                                    <div class="main__timer"></div>
                                </div>
                                <div class="main__btns"><a class="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</a><a class="button-stroke main__button" href="item.html">View item </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="main__slide">
                        <div class="main__row">
                            <div class="player">
                                <div class="player__preview"><img srcSet={"img/content/img.png 2x"} src={"img/content/img.png"} alt="Video preview"/></div>
                                {/* <div class="player__control">
                                    <button class="player__button">
                                        <svg class="icon icon-play">
                                            <use xlink:href="#icon-play"></use>
                                        </svg>
                                    </button>
                                    <div class="player__line">
                                        <div class="player__progress" style="width: 20%;"></div>
                                    </div>
                                    <div class="player__time">2:20</div>
                                    <button class="player__button">
                                        <svg class="icon icon-volume">
                                            <use xlink:href="#icon-volume"></use>
                                        </svg>
                                    </button>
                                    <button class="player__button">
                                        <svg class="icon icon-full-screen">
                                            <use xlink:href="#icon-full-screen"></use>
                                        </svg>
                                    </button>
                                </div> */}
                            </div>
                            <div class="main__details">
                                <div class="main__subtitle h1">Marco carrillo®</div>
                                <div class="main__line">
                                    <div class="main__item">
                                        <div class="main__avatar"><img src={"img/content/avatar-creator.jpg"} alt="Avatar"/></div>
                                        <div class="main__description">
                                            <div class="main__category">Creator</div>
                                            <div class="main__text">Enrico Cole</div>
                                        </div>
                                    </div>
                                    <div class="main__item">
                                        <div class="main__icon">
                                            <svg class="icon icon-stop">
                                                <use xlink:href="#icon-stop"></use>
                                            </svg>
                                        </div>
                                        <div class="main__description">
                                            <div class="main__category">Instant price</div>
                                            <div class="main__text">3.5 ETH</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__wrap">
                                    <div class="main__info">Current Bid</div>
                                    <div class="main__currency">1.00 ETH</div>
                                    <div class="main__price">$3,618.36</div>
                                    <div class="main__info">Auction ending in</div>
                                    <div class="main__timer"></div>
                                </div>
                                <div class="main__btns"><a class="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</a><a class="button-stroke main__button" href="item.html">View item </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="main__slide">
                        <div class="main__row">
                            <div class="player">
                                <div class="player__preview"><img srcSet={"img/content/video-preview-2@2x.png 2x"} src={"img/content/video-preview-2.png"} alt="Video preview"/></div>

                            </div>
                            <div class="main__details">
                                <div class="main__subtitle h1">the creator network®</div>
                                <div class="main__line">
                                    <div class="main__item">
                                        <div class="main__avatar"><img src={"img/content/avatar-creator.jpg"} alt="Avatar"/></div>
                                        <div class="main__description">
                                            <div class="main__category">Creator</div>
                                            <div class="main__text">Enrico Cole</div>
                                        </div>
                                    </div>
                                    <div class="main__item">
                                        <div class="main__icon">
                                            <svg class="icon icon-stop">
                                                <use xlink:href="#icon-stop"></use>
                                            </svg>
                                        </div>
                                        <div class="main__description">
                                            <div class="main__category">Instant price</div>
                                            <div class="main__text">3.5 ETH</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__wrap">
                                    <div class="main__info">Current Bid</div>
                                    <div class="main__currency">1.00 ETH</div>
                                    <div class="main__price">$3,618.36</div>
                                    <div class="main__info">Auction ending in</div>
                                    <div class="main__timer"></div>
                                </div>
                                <div class="main__btns"><a class="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</a><a class="button-stroke main__button" href="item.html">View item </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="main__slide">
                        <div class="main__row">
                            <div class="player">
                                <div class="player__preview"><img srcSet={"img/content/video-preview-3@2x.png 2x"} src={"img/content/video-preview-3.png"} alt="Video preview"/></div>
                                
                            </div>
                            <div class="main__details">
                                <div class="main__subtitle h1">the creator network®</div>
                                <div class="main__line">
                                    <div class="main__item">
                                        <div class="main__avatar"><img src={"img/content/avatar-creator.jpg"} alt="Avatar"/></div>
                                        <div class="main__description">
                                            <div class="main__category">Creator</div>
                                            <div class="main__text">Enrico Cole</div>
                                        </div>
                                    </div>
                                    <div class="main__item">
                                        <div class="main__icon">
                                            <svg class="icon icon-stop">
                                                <use xlink:href="#icon-stop"></use>
                                            </svg>
                                        </div>
                                        <div class="main__description">
                                            <div class="main__category">Instant price</div>
                                            <div class="main__text">3.5 ETH</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__wrap">
                                    <div class="main__info">Current Bid</div>
                                    <div class="main__currency">1.00 ETH</div>
                                    <div class="main__price">$3,618.36</div>
                                    <div class="main__info">Auction ending in</div>
                                    <div class="main__timer"></div>
                                </div>
                                <div class="main__btns"><a class="button main__button js-popup-open" href="#popup-connect" data-effect="mfp-zoom-in">Place a bid</a><a class="button-stroke main__button" href="item.html">View item </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section-pb selection">
        <div class="selection__center center">
            <div class="selection__row">
                <div class="selection__col"><a class="selection__card" href="item.html">
                    <div class="selection__preview"><img srcSet={"img/content/selection-pic-1@2x.jpg 2x"} src={"img/content/selection-pic-1.jpg"} alt="Selection"/></div>
                    <div class="selection__head">
                        <div class="selection__line">
                            <div class="selection__avatar"><img src={"img/content/avatar-1.jpg"} alt="Avatar"/></div>
                            <div class="selection__description">
                                <div class="selection__title">The future of ETH®</div>
                                <div class="selection__counter">18 in stock</div>
                            </div>
                        </div>
                        <div class="selection__box">
                            <div class="selection__content">Highest bid</div>
                            <div class="selection__price">1.125 ETH</div>
                        </div>
                    </div></a></div>
                <div class="selection__col"><a class="selection__item" href="item.html">
                    <div class="selection__preview"><img srcSet={"img/content/selection-pic-2@2x.jpg 2x"} src={"img/content/selection-pic-2.jpg"} alt="Selection"/></div>
                    <div class="selection__description">
                        <div class="selection__title">ETH never die</div>
                        <div class="selection__line">
                            <div class="selection__avatar"><img src={"img/content/avatar-4.jpg"} alt="Avatar"/></div>
                            <div class="selection__price">0.27 ETH</div>
                            <div class="selection__content">1 of 12</div>
                        </div>
                        <button class="button-stroke button-small selection__button">Place a bid</button>
                    </div></a><a class="selection__item" href="item.html">
                    <div class="selection__preview"><img srcSet={"img/content/selection-pic-1@2x.jpg 2x"} src={"img/content/selection-pic-1.jpg"} alt="Selection"/></div>
                    <div class="selection__description">
                        <div class="selection__title">Future coming soon</div>
                        <div class="selection__line">
                            <div class="selection__avatar"><img src={"img/content/avatar-3.jpg"} alt="Avatar"/></div>
                            <div class="selection__price">0.27 ETH</div>
                            <div class="selection__content">1 of 3</div>
                        </div>
                        <button class="button-stroke button-small selection__button">Place a bid</button>
                    </div></a><a class="selection__item" href="item.html">
                    <div class="selection__preview"><img srcSet={"img/content/selection-pic-3@2x.jpg 2x"} src={"img/content/selection-pic-3.jpg"} alt="Selection"/></div>
                    <div class="selection__description">
                        <div class="selection__title">Elon Musk silver coin 3d print</div>
                        <div class="selection__line">
                            <div class="selection__avatar"><img src={"img/content/avatar-4.jpg"} alt="Avatar"/></div>
                            <div class="selection__price">0.27 ETH</div>
                            <div class="selection__content">1 of 4</div>
                        </div>
                        <button class="button-stroke button-small selection__button">Place a bid</button>
                    </div></a></div>
            </div>
            <div class="selection__sidebar">
                <div class="selection__info">Latest upload from creators <span role="img" aria-label="fire">🔥</span></div>
                <div class="selection__list">
                    <div class="selection__user">
                        <div class="selection__avatar"><img src={"img/content/avatar-1.jpg"} alt="Avatar"/>
                            <div class="selection__number">6</div>
                        </div>
                        <div class="selection__description">
                            <div class="selection__name">Payton Harris</div>
                            <div class="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div class="selection__user">
                        <div class="selection__avatar"><img src={"img/content/avatar-2.jpg"} alt="Avatar"/>
                            <div class="selection__number">2</div>
                        </div>
                        <div class="selection__description">
                            <div class="selection__name">Anita Bins</div>
                            <div class="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div class="selection__user">
                        <div class="selection__avatar"><img src={"img/content/avatar-3.jpg"} alt="Avatar"/>
                            <div class="selection__number">3</div>
                        </div>
                        <div class="selection__description">
                            <div class="selection__name">Joana Wuckert</div>
                            <div class="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                    <div class="selection__user">
                        <div class="selection__avatar"><img src={"img/content/avatar-4.jpg"} alt="Avatar"/>
                            <div class="selection__number">4</div>
                        </div>
                        <div class="selection__description">
                            <div class="selection__name">Lorena Ledner</div>
                            <div class="selection__price"><span>2.456</span> ETH</div>
                        </div>
                    </div>
                </div><a class="button-stroke button-small selection__button" href="search01.html"><span>Discover more</span>
                <svg class="icon icon-arrow-next">
                    <use xlink:href="#icon-arrow-next"></use>
                </svg></a>
            </div>
        </div>
    </div>
    <div class="section-bg popular">
        <div class="popular__center center">
            <div class="popular__top">
                <div class="popular__box">
                    <div class="popular__stage">Popular</div>
                    <select class="select-empty">
                        <option>Sellers</option>
                        <option>Buyers</option>
                    </select>
                </div>
                <div class="field">
                    <div class="field__label">timeframe</div>
                    <div class="field__wrap">
                        <select class="select">
                            <option>Today</option>
                            <option>Morning</option>
                            <option>Dinner</option>
                            <option>Evening</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="popular__wrapper">
                <div class="popular__slider js-slider-popular">
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#3772FF;">
                                    <div class="popular__icon"><img src={"img/content/cup.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#1
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-5.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Edd Harris</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#9757D7;">
                                    <div class="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#2
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-6.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Odell Hane</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#45B26B;">
                                    <div class="popular__icon"><img src={"img/content/lightning.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#3
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-7.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Marlee Kuphal</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#23262F;">
                                    <div class="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#4
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-8.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Payton Kunde</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#777E90;">
                                    <div class="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#5
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-9.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Payton Buckridge</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#3772FF;">
                                    <div class="popular__icon"><img src={"img/content/cup.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#1
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-5.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Edd Harris</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#9757D7;">
                                    <div class="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#2
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-6.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Odell Hane</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#45B26B;">
                                    <div class="popular__icon"><img src={"img/content/lightning.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#3
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-7.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Marlee Kuphal</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                    <div class="popular__slide">
                        <div class="popular__item">
                            <div class="popular__head">
                                <div class="popular__rating" style="background-color:#23262F;">
                                    <div class="popular__icon"><img src={"img/content/donut.svg"} alt="Rating"/></div>
                                    <div class="popular__number">#4
                                    </div>
                                </div>
                                <div class="popular__control">
                                    <button class="popular__button popular__add">
                                        <svg class="icon icon-add-square">
                                            <use xlink:href="#icon-add-square"></use>
                                        </svg>
                                        <svg class="icon icon-minus-square">
                                            <use xlink:href="#icon-minus-square"></use>
                                        </svg>
                                    </button><a class="popular__button" href="profile.html">
                                    <svg class="icon icon-arrow-expand">
                                        <use xlink:href="#icon-arrow-expand"></use>
                                    </svg></a>
                                </div>
                            </div>
                            <div class="popular__body">
                                <div class="popular__avatar">
                                    <div class="popular__preview"><img src={"img/content/avatar-8.jpg"} alt="Avatar"/></div>
                                    <div class="popular__reward"><img src={"img/content/reward-1.svg"} alt="Reward"/></div>
                                </div>
                                <div class="popular__name">Payton Kunde</div>
                                <div class="popular__price"><span>2.456</span> ETH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section hot">
        <div class="hot__center center">
            <div class="hot__wrapper">
                <h3 class="hot__title h3">Hot bid</h3>
                <div class="hot__inner">
                    <div class="hot__slider js-slider-hot">
                        <div class="hot__slide">
                            <div class="card">
                                <div class="card__preview"><img srcSet="img/content/card-pic-1@2x.jpg 2x" src="img/content/card-pic-1.jpg" alt="Card preview"/>
                                    <div class="card__control">
                                        <div class="status-green card__category">purchasing !</div>
                                        <button class="card__favorite">
                                            <svg class="icon icon-heart">
                                                <use xlink:href="#icon-heart"></use>
                                            </svg>
                                        </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg class="icon icon-scatter-up">
                                            <use xlink:href="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a class="card__link" href="item.html">
                                <div class="card__body">
                                    <div class="card__line">
                                        <div class="card__title">Amazing digital art</div>
                                        <div class="card__price">2.45 ETH</div>
                                    </div>
                                    <div class="card__line">
                                        <div class="card__users">
                                            <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                        </div>
                                        <div class="card__counter">3 in stock</div>
                                    </div>
                                </div>
                                <div class="card__foot">
                                    <div class="card__status">
                                        <svg class="icon icon-candlesticks-up">
                                            <use xlink:href="#icon-candlesticks-up"></use>
                                        </svg>Highest bid <span>0.001 ETH</span>
                                    </div>
                                    <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                                </div></a>
                            </div>
                        </div>
                        <div class="hot__slide">
                            <div class="card">
                                <div class="card__preview"><img srcSet="img/content/card-pic-2@2x.jpg 2x" src="img/content/card-pic-2.jpg" alt="Card preview"/>
                                    <div class="card__control">
                                        <div class="status-green card__category">purchasing !</div>
                                        <button class="card__favorite">
                                            <svg class="icon icon-heart">
                                                <use xlink:href="#icon-heart"></use>
                                            </svg>
                                        </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg class="icon icon-scatter-up">
                                            <use xlink:href="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a class="card__link" href="item.html">
                                <div class="card__body">
                                    <div class="card__line">
                                        <div class="card__title">Ribbon Hunter</div>
                                        <div class="card__price">2.45 ETH</div>
                                    </div>
                                    <div class="card__line">
                                        <div class="card__users">
                                            <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                        </div>
                                        <div class="card__counter">3 in stock</div>
                                    </div>
                                </div>
                                <div class="card__foot">
                                    <div class="card__status">
                                        <svg class="icon icon-candlesticks-up">
                                            <use xlink:href="#icon-candlesticks-up"></use>
                                        </svg>Highest bid <span>0.001 ETH</span>
                                    </div>
                                    <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                                </div></a>
                            </div>
                        </div>
                        <div class="hot__slide">
                            <div class="card">
                                <div class="card__preview"><img srcSet="img/content/card-pic-3@2x.jpg 2x" src="img/content/card-pic-3.jpg" alt="Card preview"/>
                                    <div class="card__control">
                                        <div class="status-green card__category">purchasing !</div>
                                        <button class="card__favorite">
                                            <svg class="icon icon-heart">
                                                <use xlink:href="#icon-heart"></use>
                                            </svg>
                                        </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg class="icon icon-scatter-up">
                                            <use xlink:href="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a class="card__link" href="item.html">
                                <div class="card__body">
                                    <div class="card__line">
                                        <div class="card__title">Amazing digital art</div>
                                        <div class="card__price">2.45 ETH</div>
                                    </div>
                                    <div class="card__line">
                                        <div class="card__users">
                                            <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                        </div>
                                        <div class="card__counter">3 in stock</div>
                                    </div>
                                </div>
                                <div class="card__foot">
                                    <div class="card__status">
                                        <svg class="icon icon-candlesticks-up">
                                            <use xlink:href="#icon-candlesticks-up"></use>
                                        </svg>Highest bid <span>0.001 ETH</span>
                                    </div>
                                    <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                                </div></a>
                            </div>
                        </div>
                        <div class="hot__slide">
                            <div class="card">
                                <div class="card__preview"><img srcSet="img/content/card-pic-4@2x.jpg 2x" src="img/content/card-pic-4.jpg" alt="Card preview"/>
                                    <div class="card__control">
                                        <div class="status-green card__category">purchasing !</div>
                                        <button class="card__favorite">
                                            <svg class="icon icon-heart">
                                                <use xlink:href="#icon-heart"></use>
                                            </svg>
                                        </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg class="icon icon-scatter-up">
                                            <use xlink:href="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a class="card__link" href="item.html">
                                <div class="card__body">
                                    <div class="card__line">
                                        <div class="card__title">Ribbon Hunter</div>
                                        <div class="card__price">2.45 ETH</div>
                                    </div>
                                    <div class="card__line">
                                        <div class="card__users">
                                            <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                        </div>
                                        <div class="card__counter">3 in stock</div>
                                    </div>
                                </div>
                                <div class="card__foot">
                                    <div class="card__status">
                                        <svg class="icon icon-candlesticks-up">
                                            <use xlink:href="#icon-candlesticks-up"></use>
                                        </svg>Highest bid <span>0.001 ETH</span>
                                    </div>
                                    <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                                </div></a>
                            </div>
                        </div>
                        <div class="hot__slide">
                            <div class="card">
                                <div class="card__preview"><img srcSet="img/content/card-pic-5@2x.jpg 2x" src="img/content/card-pic-5.jpg" alt="Card preview"/>
                                    <div class="card__control">
                                        <div class="status-green card__category">purchasing !</div>
                                        <button class="card__favorite">
                                            <svg class="icon icon-heart">
                                                <use xlink:href="#icon-heart"></use>
                                            </svg>
                                        </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg class="icon icon-scatter-up">
                                            <use xlink:href="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a class="card__link" href="item.html">
                                <div class="card__body">
                                    <div class="card__line">
                                        <div class="card__title">Amazing digital art</div>
                                        <div class="card__price">2.45 ETH</div>
                                    </div>
                                    <div class="card__line">
                                        <div class="card__users">
                                            <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                        </div>
                                        <div class="card__counter">3 in stock</div>
                                    </div>
                                </div>
                                <div class="card__foot">
                                    <div class="card__status">
                                        <svg class="icon icon-candlesticks-up">
                                            <use xlink:href="#icon-candlesticks-up"></use>
                                        </svg>Highest bid <span>0.001 ETH</span>
                                    </div>
                                    <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                                </div></a>
                            </div>
                        </div>
                        <div class="hot__slide">
                            <div class="card">
                                <div class="card__preview"><img srcSet="img/content/card-pic-6@2x.jpg 2x" src="img/content/card-pic-6.jpg" alt="Card preview"/>
                                    <div class="card__control">
                                        <div class="status-green card__category">purchasing !</div>
                                        <button class="card__favorite">
                                            <svg class="icon icon-heart">
                                                <use xlink:href="#icon-heart"></use>
                                            </svg>
                                        </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg class="icon icon-scatter-up">
                                            <use xlink:href="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a class="card__link" href="item.html">
                                <div class="card__body">
                                    <div class="card__line">
                                        <div class="card__title">Ribbon Hunter</div>
                                        <div class="card__price">2.45 ETH</div>
                                    </div>
                                    <div class="card__line">
                                        <div class="card__users">
                                            <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                        </div>
                                        <div class="card__counter">3 in stock</div>
                                    </div>
                                </div>
                                <div class="card__foot">
                                    <div class="card__status">
                                        <svg class="icon icon-candlesticks-up">
                                            <use xlink:href="#icon-candlesticks-up"></use>
                                        </svg>Highest bid <span>0.001 ETH</span>
                                    </div>
                                    <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                                </div></a>
                            </div>
                        </div>
                        <div class="hot__slide">
                            <div class="card">
                                <div class="card__preview"><img srcSet="img/content/card-pic-7@2x.jpg 2x" src="img/content/card-pic-7.jpg" alt="Card preview"/>
                                    <div class="card__control">
                                        <div class="status-green card__category">purchasing !</div>
                                        <button class="card__favorite">
                                            <svg class="icon icon-heart">
                                                <use xlink:href="#icon-heart"></use>
                                            </svg>
                                        </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                        <svg class="icon icon-scatter-up">
                                            <use xlink:href="#icon-scatter-up"></use>
                                        </svg></a>
                                    </div>
                                </div><a class="card__link" href="item.html">
                                <div class="card__body">
                                    <div class="card__line">
                                        <div class="card__title">Amazing digital art</div>
                                        <div class="card__price">2.45 ETH</div>
                                    </div>
                                    <div class="card__line">
                                        <div class="card__users">
                                            <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                            <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                        </div>
                                        <div class="card__counter">3 in stock</div>
                                    </div>
                                </div>
                                <div class="card__foot">
                                    <div class="card__status">
                                        <svg class="icon icon-candlesticks-up">
                                            <use xlink:href="#icon-candlesticks-up"></use>
                                        </svg>Highest bid <span>0.001 ETH</span>
                                    </div>
                                    <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                                </div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section-bg collections">
        <div class="collections__center center">
            <div class="collections__wrapper">
                <h3 class="collections__title h3">Hot collections</h3>
                <div class="collections__inner">
                    <div class="collections__slider js-slider-collections"><a class="collections__item" href="profile.html">
                        <div class="collections__gallery">
                            <div class="collections__preview"><img src={"img/content/photo-1.1.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-1.2.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-1.3.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-1.4.jpg"} alt="Collections"/></div>
                        </div>
                        <div class="collections__subtitle">Awesome collection</div>
                        <div class="collections__line">
                            <div class="collections__user">
                                <div class="collections__avatar"><img src={"img/content/avatar-1.jpg"} alt="Avatar"/></div>
                                <div class="collections__author">By <span>Kennith Olson</span></div>
                            </div>
                            <div class="status-stroke-black collections__counter"><span>28 items</span></div>
                        </div></a><a class="collections__item" href="profile.html">
                        <div class="collections__gallery">
                            <div class="collections__preview"><img src={"img/content/photo-2.1.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-2.2.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-2.3.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-2.4.jpg"} alt="Collections"/></div>
                        </div>
                        <div class="collections__subtitle">Awesome collection</div>
                        <div class="collections__line">
                            <div class="collections__user">
                                <div class="collections__avatar"><img src={"img/content/avatar-3.jpg"} alt="Avatar"/></div>
                                <div class="collections__author">By <span>Willie Barton</span></div>
                            </div>
                            <div class="status-stroke-black collections__counter"><span>28 items</span></div>
                        </div></a><a class="collections__item" href="profile.html">
                        <div class="collections__gallery">
                            <div class="collections__preview"><img src={"img/content/photo-3.1.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-3.2.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-3.3.jpg"} alt="Collections"/></div>
                            <div class="collections__preview"><img src={"img/content/photo-3.4.jpg"} alt="Collections"/></div>
                        </div>
                        <div class="collections__subtitle">Awesome collection</div>
                        <div class="collections__line">
                            <div class="collections__user">
                                <div class="collections__avatar"><img src={"img/content/avatar-4.jpg"} alt="Avatar"/></div>
                                <div class="collections__author">By <span>Halle Jakubowski</span></div>
                            </div>
                            <div class="status-stroke-black collections__counter"><span>28 items</span></div>
                        </div></a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="section discover">
        <div class="discover__center center">
            <h3 class="discover__title h3">Discover</h3>
            <div class="discover__top">
                <select class="select">
                    <option>Recently added</option>
                    <option>Long added</option>
                </select>
                <div class="discover__nav"><a class="discover__link active" href="#">All items</a><a class="discover__link" href="#">Art</a><a class="discover__link" href="#">Game</a><a class="discover__link" href="#">Photography</a><a class="discover__link" href="#">Music</a><a class="discover__link" href="#">Video</a></div>
                <div class="tablet-show">
                    <select class="select">
                        <option>All items</option>
                        <option>Art</option>
                        <option>Game</option>
                        <option>Photography</option>
                        <option>Music</option>
                        <option>Video</option>
                    </select>
                </div>
                <button class="discover__filter">
                    <div class="discover__text">Filter</div>
                    <div class="discover__icon">
                        <svg class="icon icon-filter">
                            <use xlink:href="#icon-filter"></use>
                        </svg>
                        <svg class="icon icon-close">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </div>
                </button>
            </div>
            <div class="discover__filters">
                <div class="discover__sorting">
                    <div class="discover__cell">
                        <div class="field">
                            <div class="field__label">Price</div>
                            <div class="field__wrap">
                                <select class="select">
                                    <option>Highest price</option>
                                    <option>The lowest price</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="discover__cell">
                        <div class="field">
                            <div class="field__label">likes</div>
                            <div class="field__wrap">
                                <select class="select">
                                    <option>Most liked</option>
                                    <option>Least liked</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="discover__cell">
                        <div class="field">
                            <div class="field__label">creator</div>
                            <div class="field__wrap">
                                <select class="select">
                                    <option>Verified only</option>
                                    <option>All</option>
                                    <option>Most liked</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="discover__cell">
                        <div class="range">
                            <div class="range__label">Price range</div>
                            <div class="range__slider js-slider" data-min="0.01" data-max="10" data-start="5" data-step="0.1" data-tooltips="true" data-postfix=" ETH"></div>
                            <div class="range__indicators">
                                <div class="range__text">0.01 ETH</div>
                                <div class="range__text">10 ETH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="discover__list">
                <div class="discover__slider js-slider-discover js-slider-resize">
                    <div class="card">
                        <div class="card__preview"><img srcSet="img/content/card-pic-1@2x.jpg 2x" src="img/content/card-pic-1.jpg" alt="Card preview"/>
                            <div class="card__control">
                                <div class="status-green card__category">purchasing !</div>
                                <button class="card__favorite">
                                    <svg class="icon icon-heart">
                                        <use xlink:href="#icon-heart"></use>
                                    </svg>
                                </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg class="icon icon-scatter-up">
                                    <use xlink:href="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a class="card__link" href="item.html">
                        <div class="card__body">
                            <div class="card__line">
                                <div class="card__title">Amazing digital art</div>
                                <div class="card__price">2.45 ETH</div>
                            </div>
                            <div class="card__line">
                                <div class="card__users">
                                    <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                </div>
                                <div class="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div class="card__foot">
                            <div class="card__status">
                                <svg class="icon icon-candlesticks-up">
                                    <use xlink:href="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></a>
                    </div>
                    <div class="card">
                        <div class="card__preview"><img srcSet="img/content/card-pic-2@2x.jpg 2x" src="img/content/card-pic-2.jpg" alt="Card preview"/>
                            <div class="card__control">
                                <div class="status-green card__category">purchasing !</div>
                                <button class="card__favorite">
                                    <svg class="icon icon-heart">
                                        <use xlink:href="#icon-heart"></use>
                                    </svg>
                                </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg class="icon icon-scatter-up">
                                    <use xlink:href="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a class="card__link" href="item.html">
                        <div class="card__body">
                            <div class="card__line">
                                <div class="card__title">Ribbon Hunter</div>
                                <div class="card__price">2.45 ETH</div>
                            </div>
                            <div class="card__line">
                                <div class="card__users">
                                    <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                </div>
                                <div class="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div class="card__foot">
                            <div class="card__status">
                                <svg class="icon icon-candlesticks-up">
                                    <use xlink:href="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></a>
                    </div>
                    <div class="card">
                        <div class="card__preview"><img srcSet="img/content/card-pic-3@2x.jpg 2x" src="img/content/card-pic-3.jpg" alt="Card preview"/>
                            <div class="card__control">
                                <div class="status-green card__category">purchasing !</div>
                                <button class="card__favorite">
                                    <svg class="icon icon-heart">
                                        <use xlink:href="#icon-heart"></use>
                                    </svg>
                                </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg class="icon icon-scatter-up">
                                    <use xlink:href="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a class="card__link" href="item.html">
                        <div class="card__body">
                            <div class="card__line">
                                <div class="card__title">Amazing digital art</div>
                                <div class="card__price">2.45 ETH</div>
                            </div>
                            <div class="card__line">
                                <div class="card__users">
                                    <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                </div>
                                <div class="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div class="card__foot">
                            <div class="card__status">
                                <svg class="icon icon-candlesticks-up">
                                    <use xlink:href="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></a>
                    </div>
                    <div class="card">
                        <div class="card__preview"><img srcSet="img/content/card-pic-4@2x.jpg 2x" src="img/content/card-pic-4.jpg" alt="Card preview"/>
                            <div class="card__control">
                                <div class="status-green card__category">purchasing !</div>
                                <button class="card__favorite">
                                    <svg class="icon icon-heart">
                                        <use xlink:href="#icon-heart"></use>
                                    </svg>
                                </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg class="icon icon-scatter-up">
                                    <use xlink:href="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a class="card__link" href="item.html">
                        <div class="card__body">
                            <div class="card__line">
                                <div class="card__title">Ribbon Hunter</div>
                                <div class="card__price">2.45 ETH</div>
                            </div>
                            <div class="card__line">
                                <div class="card__users">
                                    <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                </div>
                                <div class="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div class="card__foot">
                            <div class="card__status">
                                <svg class="icon icon-candlesticks-up">
                                    <use xlink:href="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></a>
                    </div>
                    <div class="card">
                        <div class="card__preview"><img srcSet="img/content/card-pic-5@2x.jpg 2x" src="img/content/card-pic-5.jpg" alt="Card preview"/>
                            <div class="card__control">
                                <div class="status-green card__category">purchasing !</div>
                                <button class="card__favorite">
                                    <svg class="icon icon-heart">
                                        <use xlink:href="#icon-heart"></use>
                                    </svg>
                                </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg class="icon icon-scatter-up">
                                    <use xlink:href="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a class="card__link" href="item.html">
                        <div class="card__body">
                            <div class="card__line">
                                <div class="card__title">Amazing digital art</div>
                                <div class="card__price">2.45 ETH</div>
                            </div>
                            <div class="card__line">
                                <div class="card__users">
                                    <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                </div>
                                <div class="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div class="card__foot">
                            <div class="card__status">
                                <svg class="icon icon-candlesticks-up">
                                    <use xlink:href="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></a>
                    </div>
                    <div class="card">
                        <div class="card__preview"><img srcSet="img/content/card-pic-6@2x.jpg 2x" src="img/content/card-pic-6.jpg" alt="Card preview"/>
                            <div class="card__control">
                                <div class="status-green card__category">purchasing !</div>
                                <button class="card__favorite">
                                    <svg class="icon icon-heart">
                                        <use xlink:href="#icon-heart"></use>
                                    </svg>
                                </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg class="icon icon-scatter-up">
                                    <use xlink:href="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a class="card__link" href="item.html">
                        <div class="card__body">
                            <div class="card__line">
                                <div class="card__title">Ribbon Hunter</div>
                                <div class="card__price">2.45 ETH</div>
                            </div>
                            <div class="card__line">
                                <div class="card__users">
                                    <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                </div>
                                <div class="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div class="card__foot">
                            <div class="card__status">
                                <svg class="icon icon-candlesticks-up">
                                    <use xlink:href="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></a>
                    </div>
                    <div class="card">
                        <div class="card__preview"><img srcSet="img/content/card-pic-7@2x.jpg 2x" src="img/content/card-pic-7.jpg" alt="Card preview"/>
                            <div class="card__control">
                                <div class="status-green card__category">purchasing !</div>
                                <button class="card__favorite">
                                    <svg class="icon icon-heart">
                                        <use xlink:href="#icon-heart"></use>
                                    </svg>
                                </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg class="icon icon-scatter-up">
                                    <use xlink:href="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a class="card__link" href="item.html">
                        <div class="card__body">
                            <div class="card__line">
                                <div class="card__title">Amazing digital art</div>
                                <div class="card__price">2.45 ETH</div>
                            </div>
                            <div class="card__line">
                                <div class="card__users">
                                    <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                </div>
                                <div class="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div class="card__foot">
                            <div class="card__status">
                                <svg class="icon icon-candlesticks-up">
                                    <use xlink:href="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></a>
                    </div>
                    <div class="card">
                        <div class="card__preview"><img srcSet="img/content/card-pic-1@2x.jpg 2x" src="img/content/card-pic-1.jpg" alt="Card preview"/>
                            <div class="card__control">
                                <div class="status-green card__category">purchasing !</div>
                                <button class="card__favorite">
                                    <svg class="icon icon-heart">
                                        <use xlink:href="#icon-heart"></use>
                                    </svg>
                                </button><a class="button-small card__button js-popup-open" href="#popup-bid" data-effect="mfp-zoom-in"><span>Place a bid</span>
                                <svg class="icon icon-scatter-up">
                                    <use xlink:href="#icon-scatter-up"></use>
                                </svg></a>
                            </div>
                        </div><a class="card__link" href="item.html">
                        <div class="card__body">
                            <div class="card__line">
                                <div class="card__title">Amazing digital art</div>
                                <div class="card__price">2.45 ETH</div>
                            </div>
                            <div class="card__line">
                                <div class="card__users">
                                    <div class="card__avatar"><img src="img/content/avatar-1.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-3.jpg" alt="Avatar"/></div>
                                    <div class="card__avatar"><img src="img/content/avatar-4.jpg" alt="Avatar"/></div>
                                </div>
                                <div class="card__counter">3 in stock</div>
                            </div>
                        </div>
                        <div class="card__foot">
                            <div class="card__status">
                                <svg class="icon icon-candlesticks-up">
                                    <use xlink:href="#icon-candlesticks-up"></use>
                                </svg>Highest bid <span>0.001 ETH</span>
                            </div>
                            <div class="card__bid">New bid <span role="img" aria-label="fire">🔥</span></div>
                        </div></a>
                    </div>
                </div>
            </div>
            <div class="discover__btns">
                <button class="button-stroke button-small">Load more</button>
            </div>
        </div>
    </div>
    <div class="section description">
        <div class="description__center center">
            <div class="description__wrap">
                <div class="description__stage">Save your time with Stacks</div>
                <h1 class="description__title h1">Earn free crypto with Crypter</h1>
                <div class="description__text">A creative agency that lead and inspire</div>
                <div class="description__btns"><a class="button description__button" href="upload-variants.html">Create item</a><a class="button-stroke description__button" href="search01.html">Discover more</a></div>
            </div>
            <div class="description__gallery">
                <div class="description__preview">
					<img class="some-icon" srcSet={"img/content/cubes@2x.png 2x"} src={"img/content/cubes.png"} alt="Cubes"/>
					<img class="some-icon-dark" srcSet={"img/content/cubes-dark@2x.png 2x"} src="img/content/cubes-dark.png" alt="Cubes"/>
				</div>
                <div class="description__preview">
					<img class="some-icon" srcSet={"img/content/cube@2x.png 2x"} src={"img/content/cube.png"} alt="Cube"/>
					<img class="some-icon-dark" srcSet={"img/content/cube-dark@2x.png 2x"} src="img/content/cube-dark.png" alt="Cube"/>
            	</div>			
        	</div>
    	</div>
    <div class="popup popup_connect mfp-hide" id="popup-connect">
        <div class="popup__img">
            <svg class="icon icon-wallet">
                <use xlink:href="#icon-wallet"></use>
            </svg>
        </div>
        <div class="popup__description">You need to connect your wallet first to sign messages and send transaction to Ethereum network</div>
        <div class="popup__btns"><a class="button popup__button" href="connect-wallet.html">Connect wallet</a>
            <button class="button-stroke popup__button js-popup-close">Cancel</button>
        </div>
    </div>
    <div class="popup popup_wallet mfp-hide" id="popup-wallet">
        <div class="popup__title h4">Folow steps</div>
        <div class="steps">
            <div class="steps__item">
                <div class="steps__head">
                    <div class="steps__icon">
                        <svg class="icon icon-upload-file">
                            <use xlink:href="#icon-upload-file"></use>
                        </svg>
                    </div>
                    <div class="steps__details">
                        <div class="steps__info">Deposit ETH</div>
                        <div class="steps__text">Send transaction with your wallet</div>
                    </div>
                </div>
                <button class="button steps__button">Start now</button>
            </div>
            <div class="steps__item">
                <div class="steps__head">
                    <div class="steps__icon">
                        <svg class="icon icon-check">
                            <use xlink:href="#icon-check"></use>
                        </svg>
                    </div>
                    <div class="steps__details">
                        <div class="steps__info">Approve</div>
                        <div class="steps__text">Checking balance and approving</div>
                    </div>
                </div>
                <button class="button steps__button disabled">Start now</button>
            </div>
            <div class="steps__item">
                <div class="steps__head">
                    <div class="steps__icon">
                        <svg class="icon icon-pencil">
                            <use xlink:href="#icon-pencil"></use>
                        </svg>
                    </div>
                    <div class="steps__details">
                        <div class="steps__info">Signature</div>
                        <div class="steps__text">Create a signature to place a bit</div>
                    </div>
                </div>
                <button class="button steps__button disabled js-popup-close">Start now</button>
            </div>
        </div>
    </div>
    <div class="popup popup_bid mfp-hide" id="popup-bid">
        <div class="popup__title h4">Place a bid</div>
        <div class="popup__info">You are about to purchase <strong>C O I N Z</strong> from <strong>UI8</strong></div>
        <div class="popup__subtitle">Your bid</div>
        <div class="popup__table">
            <div class="popup__row">
                <div class="popup__col">Enter bid</div>
                <div class="popup__col">
                    <div class="popup__bid">
                        <input class="popup__rate" type="tel" name="bid"/>
                        <div class="popup__currency">ETH</div>
                    </div>
                </div>
            </div>
            <div class="popup__row">
                <div class="popup__col">Your balance</div>
                <div class="popup__col">8.498 ETH</div>
            </div>
            <div class="popup__row">
                <div class="popup__col">Service fee</div>
                <div class="popup__col">0 ETH</div>
            </div>
            <div class="popup__row">
                <div class="popup__col">Total bid amount</div>
                <div class="popup__col">0 ETH</div>
            </div>
        </div>
        <div class="popup__btns"><a class="button popup__button js-popup-open" href="#popup-wallet" data-effect="mfp-zoom-in">Place a bid</a>
            <button class="button-stroke popup__button js-popup-close">Cancel</button>
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
</body>
	</>;
};

export default HomePage;
