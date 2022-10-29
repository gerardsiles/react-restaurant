import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		Ing: 'en',
		fallbackLng: 'en',
		debug: true,
		backend: {
			loadPTH: 'src\translationsen.json',
		},
		ns: ['translations'],

		defaultNS: 'translations',

		keySeparator: false,

		interpolation: {
			escapeValue: false,

			formatSeparator: ',',
		},

		react: {
			wait: true,
		},
	});

export default i18n;
