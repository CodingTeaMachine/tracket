import type { Translation } from '$i18n/i18n-types'
import en from "$i18n/en";

const hu: Translation = {
	...(en as Translation),
	navigation: {
		home: 'főoldal',
		orders: 'rendelések',
		customers: 'ügyfelek',
		profile: 'profil'
	},
	pages: {
		login: {
			login: 'bejelentkezés',
			dontHaveAnAccount: 'nincs fiókja',
			registerOneNow: 'regisztráljon egyet most',
			couldNotLogIn: 'hiba történt a bejelentkezés során'
		},
		register: {
			register: 'regisztráció',
			alreadyHaveAnAccount: 'már van fiókja',
			loginNow: 'jelentkezzen be most',
			couldNotRegister: 'hiba történt a regisztráció során'
		}
	},
	inputs: {
		email: 'e-mail cím',
		username: 'felhasználónév',
		password: 'jelszó',
		rePassword: 'jelszó újra'
	},
	validation: {
		//General
		invalid: 'érvénytelen {field}',
		required: '{field} megadása kötelező',
		tooShort: 'a(z) {field}-nek/nak legalább {length} karakter hosszúnak kell lennie',

		//Specific
		password: {
			dontMatch: 'a megadott jelszavak nem egyeznek'
		}
	},
	footer: {
		createdBy: 'készítette Dékány Márk',
	}
}

export default hu
