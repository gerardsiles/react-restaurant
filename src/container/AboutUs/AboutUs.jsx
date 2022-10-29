import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
	const [t] = useTranslation('global');

	return (
		<div
			className='app__aboutus app__bg flex__center section__padding'
			id='about'
		>
			<div className='app__aboutus-overlay flex__center'>
				<img src={images.M} alt='G_overlay' />
			</div>

			<div className='app__aboutus-content flex__center'>
				<div className='app__aboutus-content_about'>
					<h1 className='headtext__cormorant'> {t('aboutUs.about')} </h1>
					<img src={images.spoon} alt='about_spoon' className='spoon__img' />
					<p className='p__opensans'>{t('aboutUs.about_description')}</p>
				</div>

				<div className='app__aboutus-content_knife flex__center'>
					<img src={images.knife} alt='about_knife' />
				</div>

				<div className='app__aboutus-content_history'>
					<h1 className='headtext__cormorant'>{t('aboutUs.ourHistory')}</h1>
					<img src={images.spoon} alt='about_spoon' className='spoon__img' />
					<p className='p__opensans'>{t('aboutUs.history')}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
