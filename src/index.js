import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import en from './translations/en/global.json';
import is from './translations/is/global.json';

import './index.css';
import App from './App';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	resources: {
		en: {
			global: en,
		},
		is: {
			global: is,
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
