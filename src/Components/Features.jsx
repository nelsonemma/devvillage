import React from 'react'
import "../Styles/Features.css"
import Marquee from "react-fast-marquee";
import logo1 from "../logo/ads1.jpg"
import logo2 from "../logo/ads2.jpg"
import logo3 from "../logo/ads3.jpg"
import logo4 from "../logo/ads4.jpg"
import logo5 from "../logo/ads5.jpg"
import logo6 from "../logo/ads6.jpg"

const Features = () => {
	return (
		<div className=' bgg h-screen'>


			{/* <p className='flexx pt-8 pb-4  text-black text-3xl'>Features</p> */}

			<p className='flexx pt-8 pb-4  text-black text-3xl'>Over 1600+ Dev to explore oppurtunities for your dream job</p>



			<div className='gridd p-4'>
				<div class="">
					<img className="imgg  " src='https://images.pexels.com/photos/5453848/pexels-photo-5453848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Card" />
				</div>

				<div className=' bio '>
					<h2 className='text-3xl '>Building Your Developer Dream Team</h2>
					<p className=''>DEV villa is a leading platform dedicated to helping developers land their dream jobs by providing comprehensive insights into potential employers. We understand that finding the right fit goes beyond just technical skills; it's about aligning with a company's culture, values, and growth opportunities. Our mission is to empower developers to make informed career decisions and connect them with companies that resonate with their professional aspirations.</p>


					<div className='bio-btn '>
						<button >Learn More</button>

					</div>








					{/* <div className=' bio '>
					<h2 className='text-3xl '>Empowering Developers in the Remote Work Landscape</h2>
					
					<p>Are you a developer looking to harness the power of remote work? Remote Work Resources specializes in providing tailored guidance and resources specifically designed for developers seeking remote job opportunities. Whether you're a seasoned software engineer or a coding enthusiast exploring remote work for the first time, we're here to support you on your journey.</p>
					<div className='bio-btn '>
						<button >Learn More</button>

					</div>
				</div> */}



				</div>

			</div>

			{/* <div className='gridd p-4'>
				<div className=' bio '>
					<h2 className='text-3xl '>Empowering Developers in the Remote Work Landscape</h2>
					
					<p>Are you a developer looking to harness the power of remote work? Remote Work Resources specializes in providing tailored guidance and resources specifically designed for developers seeking remote job opportunities. Whether you're a seasoned software engineer or a coding enthusiast exploring remote work for the first time, we're here to support you on your journey.</p>
					<div className='bio-btn '>
						<button >Learn More</button>

					</div>
				</div>

				<div class="">
					<img className="imgg  " src='https://images.pexels.com/photos/5453848/pexels-photo-5453848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Card" />
				</div>

			</div> */}




			{/* <div>
				<h2>Empowering Developers in the Remote Work Landscape</h2>
				<p>Are you a developer looking to harness the power of remote work? Remote Work Resources specializes in providing tailored guidance and resources specifically designed for developers seeking remote job opportunities. Whether you're a seasoned software engineer or a coding enthusiast exploring remote work for the first time, we're here to support you on your journey.</p>
			</div> */}



			<div>
			<div className='flex justify-between'>
			<p className=' p-4 text-2xl'>Guides to help you grow</p>
			<p className=' p-4 text-1xl cursor-pointer  '>Read more...</p>
			</div>

			<div className='guide p-4'>

			<div>
			<img className="g-img w-full  " src='https://images.pexels.com/photos/1181392/pexels-photo-1181392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Card" />

			<p className=''>Start a side business</p>

			</div>

			<div>
			<img className="g-img w-full  " src='https://images.pexels.com/photos/1181573/pexels-photo-1181573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Card" />
			<p className=''>Ecommerce business Ideas</p>

			</div>

			<div>
			<img className="g-img w-full  " src='https://media.istockphoto.com/id/1065868612/photo/close-up-of-young-business-people-putting-hands-for-showing-symbol-unity-and-teamwork.jpg?s=612x612&w=0&k=20&c=zNBZhF8oRlHlnvY5fK3FRLT05ZFOIuDcPwUBWlSpzCE=' alt="Card" />

			<p className=''> Networking</p>

			</div>

			<div>
			<img className="g-img w-full  " src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg' alt="Card" />

			<p className=''>Start an online business and work from home</p>

			</div>

			</div>

			</div>



			<div>
				<p className=' trusted flex items-center justify-center'>Trusted by thousands worldwide</p>


				<Marquee>

					<div className='marque'>
						<img src={logo1} alt />
						<img src={logo2} alt />
						<img src={logo3} alt />
						<img src={logo4} alt />
						<img src={logo5} alt />
						<img src={logo6} alt />

					</div>

				</Marquee>
			</div>






















		</div>
	)
}

export default Features


