import React from "react";
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import "../Styles/Navbar.css"

function Navbar() {

	const navRef = useRef()

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav")
	}
	return (

		<div className="bg">



			<header>
				<h3> <span>DEV</span> villa. </h3>
				<nav ref={navRef}>
					<a href="/#">Home</a>
					<a href="/#myskills">Features</a>
					<a href="/#myskills">Services</a>
					<a href="#about">Pricing</a>
					<a href="/#contact">Support</a>


					<button className='nav-btn nav-close-btn' onClick={showNavbar}>
						<FaTimes />
					</button>


					<a href="#areteautos" class="btn-float  ">
						Start Free Trial




					</a>


				</nav>


				<button className='nav-btn' onClick={showNavbar}>
					<FaBars />
				</button>

			</header>



			<div className="content ">

				<div >



					<div className="flex justify-center items-center  ">
						<div className=" p-4 rounded-md">
							<h1>Helping developers <br /> get their dream job</h1>
							<p>Join thousands of developers who have found their dream jobs through  <span> DEV</span> villa. explore opportunities and take the next step in your development journey!</p>
						</div>
					</div>



					<div className='email'>
						{/* <input type="email" name="" id="email" placeholder="Email" required /> */}

						<button class="btn-email  ">Start Free Trial</button>
					</div>

					<div className="flixx">
						<p>✔ Weekly new articles </p>
						<p>✔ Join over 1600+Devs</p>

					</div>
				</div>
			</div>

			<div className="svgg">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill="#5852C1" fill-opacity="1" d="M0,288L60,288C120,288,240,288,360,277.3C480,267,600,245,720,218.7C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
				</svg>

				
			</div>

			{/* <div className="gridd">
			

				<div className=" max-w-xs mx-auto bg-black shadow-lg rounded-lg overflow-hidden">

					<img className="imgg w-16 h-16 object-cover mt-2 " src="https://media.istockphoto.com/id/1408255024/photo/developers-discussing-programming-code.jpg?b=1&s=612x612&w=0&k=20&c=dW_gC3uh5Q3GyVGc-4ZY3BBDsr40V6SsnJAUp28uf-c=" alt="Card" />

				</div>

				<div className="max-w-xs mx-auto bg-black shadow-lg rounded-lg overflow-hidden">

					<img className="imgg w-16 h-16 object-cover mt-2" src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card" />

				</div>

				<div className="max-w-xs mx-auto bg-black shadow-lg rounded-lg overflow-hidden">

					<img className="imgg w-16 h-16 object-cover mt-2" src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card" />

				</div>


			</div> */}






		</div>
	)
}

export default Navbar;