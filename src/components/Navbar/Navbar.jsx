import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const [t, i18n] = useTranslation('global');

	const { lan, setLang } = useState('en');

	const changeLanguage = e => {
		setLang(e.target.value);
	};

	const [toggleMenu, setToggleMenu] = React.useState(false);
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<img src={images.logo} alt='app__logo' />
			</div>
			<ul className='app__navbar-links'>
				<li className='p__opensans'>
					<a href='#home'>Home</a>
				</li>
				<li className='p__opensans'>
					<a
						href='https://www.dineout.is/reykjavikmeat?lng=en'
						target='_blank'
						rel='noreferrer'
					>
						Book a Table
					</a>
				</li>
				<li className='p__opensans'>
					<a href='#menu'>Menu</a>
				</li>
				<li className='p__opensans'>
					<a href='#findus'>Visit Us</a>
				</li>
				<li className='p__opensans'>
					<a href='#footer'>Contact</a>
				</li>
			</ul>

			{/* Languages */}
			<div className='app__navbar-languages'>
				<img
					src={images.is}
					alt='English Flag'
					onClick={() => i18n.changeLanguage('is')}
				/>

				<div />

				<img
					src={images.en}
					alt='English Flag'
					onClick={() => i18n.changeLanguage('en')}
				/>
			</div>

			{/* Hamburger Menu */}
			<div className='app__navbar-smallscreen'>
				<GiHamburgerMenu
					color='#fff'
					fontSize={27}
					onClick={() => setToggleMenu(true)}
				/>
				{toggleMenu && (
					<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
						<MdOutlineRestaurantMenu
							fontSize={27}
							className='overlay__close'
							onClick={() => setToggleMenu(false)}
						/>
						<ul className='app__navbar-smallscreen_links'>
							<li>
								<a href='#home' onClick={() => setToggleMenu(false)}>
									Home
								</a>
							</li>
							<li>
								<a
									href='https://www.dineout.is/reykjavikmeat?lng=en'
									target='_blank'
									rel='noreferrer'
									onClick={() => setToggleMenu(false)}
								>
									Book a Table
								</a>
							</li>
							<li>
								<a href='#menu' onClick={() => setToggleMenu(false)}>
									Menu
								</a>
							</li>
							<li>
								<a href='#findus' onClick={() => setToggleMenu(false)}>
									Visit us
								</a>
							</li>
							<li>
								<a href='#contact' onClick={() => setToggleMenu(false)}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
