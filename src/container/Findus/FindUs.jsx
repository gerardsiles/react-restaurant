import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => (
	<div className='app__bg app__wrapper section__padding' id='contact'>
		<div className='app__wrapper_info'>
			<SubHeading title='Contact' />
			<h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
				Find Us
			</h1>
			<div className='app__wrapper-content'>
				<a
					href='https://g.page/rvkmeat?share'
					className='p__opensans app__navbar-smallscreen_links'
					target='_blank'
					rel='noreferrer'
				>
					Frakkastígur 8b, 101 Reykjavík
				</a>
				<p
					className='p__cormorant'
					style={{ color: '#DCCA87', margin: '2rem 0' }}
				>
					Opening Hours - Kitchen
				</p>
				<p className='p__opensans'>
					Wednesday, Thursday & Sunday: 18:00 - 22:00
				</p>
				<p className='p__opensans'>Friday, Saturday: 18:00 - 22:30</p>
				<p className='p__opensans'>Closed on Mondays and Tuesdays</p>
				<p
					className='p__cormorant'
					style={{ color: '#DCCA87', margin: '2rem 0' }}
				>
					Opening Hours - Bar
				</p>
				<p className='p__opensans'>
					Wednesday, Thursday & Sunday: 18:00 - 00:00
				</p>
				<p className='p__opensans'>Friday, Saturday: 18:00 - 1:00</p>
				<p className='p__opensans'>Closed on Mondays and Tuesdays</p>
			</div>
			<a href='https://g.page/rvkmeat?share' target='blank'>
				<button
					type='button'
					className='custom__button'
					style={{ marginTop: '2rem' }}
				>
					Visit Us
				</button>
			</a>
		</div>

		<div className='app__wrapper_img'>
			<img src={images.findus} alt='finus_img' />
		</div>
	</div>
);

export default FindUs;
