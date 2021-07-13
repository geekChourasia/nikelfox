import React from 'react'
import './Home.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';
import Arrow from './images-nikelfox/icon-arrow.svg';
import ChangeNext from './images-nikelfox/desktop-image-hero-2.jpg';
import ChangePrev from './images-nikelfox/desktop-image-hero-1.jpg';



function Home() {

	let flag = true;
	const handleNext = () => {
		let nextImg = document.getElementsByClassName("header_image")[0];

		if (flag) {
			nextImg.style.backgroundImage = `url('${ChangeNext}')`;
		} else {

			nextImg.style.backgroundImage = `url('${ChangePrev}')`;
		}
		flag = !flag;


	}


	return (
		<div className="container">
			<div className="upper_container">
				<div className="menubar">
					<MenuIcon />
				</div>
				<h2 className="room">room</h2>
				<div className="image_white_table">
					<div className="header_image">
						<span></span>

					</div>
					<div className="headers">

						<ul>


							<li className="font">room</li>
							<li>home</li>
							<li>shop</li>
							<li>contact</li>
						</ul>

					</div>
				</div>

				<div className="right_container">

					<div className="text_white_table">
						<h1 className="discovery">Discover innovative ways to decorate</h1>
						<p className="discovery_para">We provide unmatched quality, contact, and style for property owners across the country. Our experts form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. </p>

						<div className="shopnow">
							<h2 className="letter">SHOP NOW</h2>
							<div className="arrow">
								<img src={Arrow}></img>
							</div>

						</div>

						<div className="meterial_icon">
							<ArrowBackIosIcon onClick={handleNext} />
							<ArrowForwardIosIcon onClick={handleNext} />

						</div>
					</div>
				</div>


			</div>

			<div className="bottom_container">
				<div className="bottom_image_1">


				</div>
				<div className="bottom_text">

					<h3 className="about">ABOUT OUR FURNITURE</h3>
					<p className="bottom_para">Our multifuctional collection blends design and function to suits your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture peices you need,from tradition to compemtary styles or anything between. Product specialists are available to help you to create your dream space.</p>
				</div>

				<div className="bottom_image_2">


				</div>


			</div>
		</div>
	)
}

export default Home
