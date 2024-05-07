import React from 'react'
import "../Styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faArrowsDownToPeople } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
		<div className='h-screen bg-black text-white'>
			<div className='footer-grid'>
				<div className='footer1'>
					<h3> <span>DEV</span> villa. </h3>

				</div>

				<div className='footer1'>
					<h3> Categories </h3>
					<ul>
						<li>Graphics & Design</li>
						<li>Digital Marketing</li>
						<li>Writing & Translation</li>
						<li>Video & Animation</li>
						<li>Music & Audio</li>
						<li>Data </li>
						<li>Business </li>
						<li>Lifestyle </li>
						<li>Photography </li>
					</ul>

				</div>

				<div className='footer1'>
					<h3> About</h3>
					<ul>
						<li>Careers</li>
						<li>Press & News</li>
						<li>Partnerships</li>
						<li>Privacy Policy</li>
						<li>Terms of Service</li>
						{/* <li>Data </li>
				<li>Business </li>
				<li>Lifestyle </li>
				<li>Photography </li> */}
					</ul>

				</div>

				<div className='footer1'>
					<h3> Company </h3>
					<ul>
						<li>Features</li>
						<li>Services</li>
						<li>Pricing</li>
						<li>Privacy Policy</li>
						<li>Support</li>
						<li>Start free trial</li>

					</ul>

				</div>


			</div>



			<hr></hr>

			<div className='footer-flex'>
				<div className='footer-flex1'>
					<h3> ©   <span>DEV</span> villa. 2024 . All Right Reserved  </h3>
					{/* <p>All Right Reserved</p> */}

				</div>

				<div className='footer-icon'>
					<FontAwesomeIcon icon={faEnvelope} />
					<FontAwesomeIcon icon={faEnvelope} />
					<FontAwesomeIcon icon={faHeadphones} />
					<FontAwesomeIcon icon={faArrowsDownToPeople} />
					


					
				</div>

			</div>

		</div>
	)
}

export default Footer