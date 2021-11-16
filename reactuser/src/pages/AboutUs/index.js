import React from 'react';
import styles from './about.module.css';
import client01 from './client01.png';
import client06 from './client06.png';
import client04 from './client04.png';
import client05 from './client05.png';
import about1 from './about1.jpg';

const AboutUs = () => {
	return(
		<section className="section-padding">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-sm-12 col-md-8 mb-4">
						<h3 className="mb-3">We’re Innovators & Art Makers</h3>
						<p className="mb-4">We provide quality services to customers and make our's artist stand out
						from the rest on others website</p>

						<span className="h5 mb-4">Let's Check what we do actually :</span>
						<ul className="about-list2 my-4">
							<li className="mb-2"> Best Analytics Audits
								to your site in specific niche
							</li>

							<li className="mb-2">
								<i className="icofont icofont-check-circled"> </i> Easy payment method connection with
								many reliable companies
							</li>

							<li className="mb-2">
								<i className="icofont icofont-check-circled"> </i> More quality content, social
								networking and relative sharing
							</li>

							<li className="mb-2">
								<i className="icofont icofont-check-circled"> </i> Provides high quality images easy
								to come by.
							</li>
						</ul>

					</div>

					<div className="col-lg-6 col-md-4">
						<img src={about1} alt="About1"/>
					</div>
				</div>
				<br/>
				<br/>
				<br/>
				<br/>


				<div className="lmao">
					<div className="row">
					<div className="col-lg-6 ">
						<div className="media img-block mb-3 mb-lg-0">
								<div className="media-body ">
									<h4 className="mb-3">Provide services with maintain high quality since year 1!</h4>
									<p>We provide art services to new artist. Let's start your site in grow high.</p>
								</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="media img-block">
								<div className="media-body">
									<h4 className="mb-3">Our mission is to provide our client what they need!</h4>
									<p>We provide small businesses looking for a partner for their digital media</p>
								</div>
						</div>
					</div>
					</div>
					</div>
				<br/>
				<br/>
				<br/>
				<br/>


				<div className="col-lg-8 text-center text-lg-left">
						<div className="mb-5">
							<h3 className="mb-2">Trusted by many over years</h3>
							<p>In our partner we trust</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-sm-6 col-md-3 text-center">
						<img src={client01} alt="client01" />
					</div>
					<div className="col-lg-3 col-sm-6 col-md-3 text-center">
						<img src={client06} alt="client06" />
					</div>
					<div className="col-lg-3 col-sm-6 col-md-3 text-center">
						<img src={client04} alt="client04" />
					</div>
					<div className="col-lg-3 col-sm-6 col-md-3 text-center">
							<img src={client05} alt="client05" />
					</div>
				</div>
		</section>

	)
};

export default AboutUs;
