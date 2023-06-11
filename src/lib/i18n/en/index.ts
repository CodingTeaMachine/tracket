import type { BaseTranslation } from '../i18n-types'

const en: BaseTranslation = {
	navigation : {
		home: 'home',
		orders: 'orders',
		customers: 'customers',
		profile: 'profile',
	},
	pages: {
		login: {
			login: 'login',
			dontHaveAnAccount: 'don\'t have an account',
			registerOneNow: 'register one now!',
			couldNotLogIn: 'an error occurred during login'
		},
		register: {
			register: 'register',
			alreadyHaveAnAccount: 'already have an account',
			loginNow: 'login now',
			couldNotRegister: 'an error occurred during registration'
		}
	},
	inputs: {
		email: 'e-mail address',
		username: 'username',
		password: 'password',
		rePassword: 'password again'
	},
	validation : {
		//General
		invalid: 'invalid {field}',
		required: '{field} is required',
		tooShort: '{field} must be at least {length} characters long',

		//Specific
		password: {
			dontMatch: 'the provided passwords don\'t match'
		}
	},
	footer: {
		createdBy: 'created by Dékány Márk',
	}
}

export default en
