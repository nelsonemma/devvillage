import React from 'react'
import "../Styles/Pricing.css"

const Pricing = () => {
	return (
		<div className=' '>
			<p className='flex items-center justify-center text-5xl p-4 select' >Select a package that best fits your needs</p>


			<div className='grid-price'>

				<div className='starter '>
					<div className='  leading-10'>
						<h3 >STARTER</h3>
						<h1>SIDE JOBS</h1>
						<p>For clients work on the side.</p>
					</div>


					<div className='mt-5 mb-9'>
						<div className='flex gap-2 '>
							<p className='text-4xl'>
								<span className='text-2xl line-through text-gray-400'>$14</span>
								$7
							</p>

							<p className='text-gray-400 text-sm'>
								<span className='bg-black text-white decoration-solid text-sm '>50% off</span> <br />
								/ month for 12months
							</p>

						</div>
					</div>



					<button className=' start-btn px-4 py-2  border-black'>
						start free Trial
					</button>
				</div>

				<div className='standard'>
					<div className='  leading-10'>
						<h3 >STANDARD</h3>
						<h1>SOLO BUSINESS</h1>
						<p>For independent business owners..</p>
					</div>

					<div className='flex gap-2 mt-5 mb-9'>
						<p className='text-4xl'>
							<span className='text-2xl line-through text-gray-400'>$34</span>
							$17
						</p>

						<p className='text-gray-400 text-sm'>
							<span className='bg-black text-white decoration-solid text-sm '>50% off</span> <br />
							/ month for 12months
						</p>

					</div>

					<button className='plus-btn px-4 py-2  border-black'>
						start free Trial
					</button>
				</div>

				<div className='plus'>
					<div className='  leading-10'>
						<h3 >PLUS</h3>
						<h1>SMALL TEAMS</h1>
						<p>For agencies and small business</p>
					</div>

					<div className='flex gap-2 mt-5 mb-9'>
						<p className='text-4xl'>
							<span className='text-2xl line-through text-gray-400'>$66</span>
							$33
						</p>

						<p className='text-gray-400 text-sm'>
							<span className='bg-black text-white decoration-solid text-sm '>50% off</span> <br />
							/ month for 12months
						</p>

					</div>

					<button className='standard-btn px-4 py-2   border-black'>
						start free Trial
					</button>
				</div>
			</div>


			<div className='checklist'>
			<div className='flex'>
			<ul>
					<li>✔  Your premium trial is 100% free</li>
					<li>✔  Choose a plan that works for you</li>
					<li>✔  Consolidate all tools</li>
				</ul>
			</div>

			<div className='flex'>
			<ul>
					<li>✔  30-day money back guarantee</li>
					<li>✔  Top-level customer support</li>
					<li>✔  Consolidate all tools</li>
				</ul>
			</div>

			</div>


		</div>
	)
}

export default Pricing