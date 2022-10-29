import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const [t] = useTranslation('global');

	return (
		<div className='app__header app__wrapper section__padding' id='home'>
			<div className='app__wrapper_info'>
				<SubHeading title='Chase the grill flavour' />

				<h1 className='app__header-h1'> {t('header.h1')} </h1>

				<p className='p__opensans' style={{ margin: '2rem 0' }}>
					{t('header.p')}
				</p>
				<button type='button' className='custom__button'>
					<a href='#menu'>{t('header.button')}</a>
				</button>
			</div>

			<div className='app__wrapper_img'>
				<img src={images.welcome} alt='header_img' />
			</div>
		</div>
	);
};

export default Header;
