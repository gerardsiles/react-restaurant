import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
	<div className='app__footer section__padding' id='login'>
		<div className='app__footer-links'>
			<div className='app__footer-links_contact'>
				<h1 className='app__footer-headtext'>Contact Us</h1>
				<a href='https://g.page/rvkmeat?share' className='p__opensans'>
					Frakkastígur 8b, 101 Reykjavík
				</a>
				<p className='p__opensans'>+354-557-76-65</p>
				<a href='mailto:rvkmeat@rvkmeat.is' className='opensans'>
					rvkmeat@rvkmeat.is
				</a>
			</div>

			<div className='app__footer-links_logo'>
				<img src={images.logo} alt='footer_logo' />
				<div className='app__footer-links_icons'>
					<a
						href='https://m.facebook.com/profile.php?id=100022590409879'
						target='_blank'
						rel='noreferrer'
					>
						<FiFacebook />
					</a>
					<a
						href='https://www.instagram.com/reykjavikmeat/'
						target='_blank'
						rel='noreferrer'
					>
						<FiInstagram />
					</a>
				</div>
			</div>

			<div className='app__footer-links_work'>
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
		</div>

		<div className='footer__copyright'>
			<p className='p__opensans'>2022 Reykjavik Meat. All Rights reserved.</p>
		</div>
	</div>
);

export default Footer;
