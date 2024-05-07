import React from 'react'
import "../Styles/Services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faWandMagicSparkles, faLaptopCode, faHandshake, faDatabase, faLanguage, faNetworkWired, faVideoSlash } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
	return (
		<div className='  backg'>
			<div>
				<p className='flex items-center justify-center text-4xl p-4'>Services</p>
				<div className='w-full'>
					<div className='service-grid'>
						<div className='grid-content p-4'>
							<h1 className='text-3xl mb-4 font-bold  '>The best part? <span>Everything.</span></h1>
							<div className='mb-3'>
								<h2 className='font-bold text-1xl'>✔ Stick to your budget</h2>
								<p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
							</div>

							<div className='mb-3'>
								<h2 className='font-bold text-1xl'>✔ Get quality work done quickly</h2>
								<p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
							</div>

							{/* <ul>
								<li className='font-semibold'>
								 Stick to your budget
								<p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
								</li>
							</ul> */}

							<div className='mb-3'>
								<h2 className='font-bold text-1xl'>✔ Pay when you're happy</h2>
								<p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
							</div>

							<div className='mb-3'>
								<h2 className='font-bold text-1xl'>✔ Count on 24/7 support</h2>
								<p>Our round-the-clock support team is available to help anytime, anywhere..</p>
							</div>


						</div>



						<div class="grid-content p-4">
							<img className="imgg  " src='https://images.pexels.com/photos/7693147/pexels-photo-7693147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Card" />
						</div>


					</div>



				</div>

			</div>


			<div >
				<h2 className='text-3xl mb-4 font-bold p-4 '>You need it, we've got it</h2>
			</div>

			<div className='grid-icon p-4'>
				<div className='grid-icon1'>

					<FontAwesomeIcon icon={faMusic} size="2xl" style={{ color: "#5852c1" }} />
					<p>Music</p>

				</div>

				<div className='grid-icon1'>
					<FontAwesomeIcon icon={faWandMagicSparkles} size="2xl" style={{ color: "#5d55c3" }} />
					<p>Graphics & Design</p>

				</div>


				<div className='grid-icon1'>
					<FontAwesomeIcon icon={faNetworkWired} size="2xl" style={{ color: "#5853c1", }} />


					<p>Digital Marketing</p>
				</div>

				<div className='grid-icon1'>
					<FontAwesomeIcon icon={faLanguage} size="2xl" style={{ color: "#5853c1" }} />


					<p>Writing & Translation</p>
				</div>

				<div className='grid-icon1'>
					<FontAwesomeIcon icon={faVideoSlash}  size="2xl" style={{ color: "#5853c1" }} />


					<p>Video & Animation</p>
				</div>

				<div className='grid-icon1'>
					<FontAwesomeIcon icon={faLaptopCode} size="2xl" style={{ color: "#5853c1" }} />

					<p>Programming & Tech</p>
				</div>

				<div className='grid-icon1'>
					<FontAwesomeIcon icon={faHandshake} size="2xl" style={{ color: "#5853c1" }} />
					<p>Business</p>
				</div>



				<div className='grid-icon1'>
					<FontAwesomeIcon icon={faDatabase} size="2xl" style={{ color: "#5853c1", }} />


					<p>Data</p>
				</div>

				<div className='grid-icon1'>

					<p>Photography</p>
				</div>
			</div>











		</div>
	)
}

export default Services