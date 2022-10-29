import React, { useState } from 'react';

import Papa from 'papaparse';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
	const [data, setData] = useState({});

	Papa.parse(
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vSG0X_UOnP6N1_O9im_0lIy6YFm6O9t2Kt__X88eY31UkqQpvfqwoFyyIdavcvKZUH9fS0MEO4efIzk/pub?output=csv',
		{
			download: true,
			header: true,
			complete: results => {
				setData(results.data);
			},
		}
	);
	const menu = Array.from(data);

	return (
		<div className='app__specialMenu flex__center section__padding' id='menu'>
			<div className='app__specialMenu-title'>
				<SubHeading title='Menu that fits your palatte' />
				<h1 className='headtext__cormorant'>Today&apos;s Special</h1>
			</div>

			<div className='app__specialMenu-menu'>
				<div className='app__specialMenu-menu_wine  flex__center'>
					<p className='app__specialMenu-menu_heading'>Food</p>
					<div className='app__specialMenu_menu_items'>
						{menu.map((item, index) => (
							<MenuItem
								key={item.name + index}
								title={item.name}
								price={item.price}
								tags={item.description}
							/>
						))}
					</div>
				</div>

				<div className='app__specialMenu-menu_img'>
					<img src={images.menu} alt='menu__img' />
				</div>

				<div className='app__specialMenu-menu_cocktails  flex__center'>
					<p className='app__specialMenu-menu_heading'>Cocktails & Wines</p>
					<div className='app__specialMenu_menu_items'>
						{data.cocktails.map((item, index) => (
							<MenuItem
								key={item.title + index}
								title={item.title}
								price={item.price}
								tags={item.tags}
							/>
						))}
					</div>
				</div>
			</div>

			<div style={{ marginTop: 15 }}>
				<button type='button' className='custom__button'>
					View More
				</button>
			</div>
		</div>
	);
};

export default SpecialMenu;
