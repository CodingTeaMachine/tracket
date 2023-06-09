import type { Translation } from '../i18n-types'
import en from "$i18n/en";

const hu: Translation = {
	...(en as Translation),
	navigation: {
		home: 'Főoldal',
		orders: 'Rendelések',
		customers: 'Ügyfelek'
	}
}

export default hu
