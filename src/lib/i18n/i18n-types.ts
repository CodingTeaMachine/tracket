// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'hu'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	navigation: {
		/**
		 * h​o​m​e
		 */
		home: string
		/**
		 * o​r​d​e​r​s
		 */
		orders: string
		/**
		 * c​u​s​t​o​m​e​r​s
		 */
		customers: string
		/**
		 * p​r​o​f​i​l​e
		 */
		profile: string
	}
	pages: {
		login: {
			/**
			 * l​o​g​i​n
			 */
			login: string
			/**
			 * d​o​n​'​t​ ​h​a​v​e​ ​a​n​ ​a​c​c​o​u​n​t
			 */
			dontHaveAnAccount: string
			/**
			 * r​e​g​i​s​t​e​r​ ​o​n​e​ ​n​o​w​!
			 */
			registerOneNow: string
			/**
			 * a​n​ ​e​r​r​o​r​ ​o​c​c​u​r​r​e​d​ ​d​u​r​i​n​g​ ​l​o​g​i​n
			 */
			couldNotLogIn: string
		}
		register: {
			/**
			 * r​e​g​i​s​t​e​r
			 */
			register: string
			/**
			 * a​l​r​e​a​d​y​ ​h​a​v​e​ ​a​n​ ​a​c​c​o​u​n​t
			 */
			alreadyHaveAnAccount: string
			/**
			 * l​o​g​i​n​ ​n​o​w
			 */
			loginNow: string
			/**
			 * a​n​ ​e​r​r​o​r​ ​o​c​c​u​r​r​e​d​ ​d​u​r​i​n​g​ ​r​e​g​i​s​t​r​a​t​i​o​n
			 */
			couldNotRegister: string
		}
		error: {
			/**
			 * N​o​t​ ​F​o​u​n​d
			 */
			'404': string
			/**
			 * e​r​r​o​r
			 */
			general: string
		}
	}
	inputs: {
		/**
		 * e​-​m​a​i​l​ ​a​d​d​r​e​s​s
		 */
		email: string
		/**
		 * u​s​e​r​n​a​m​e
		 */
		username: string
		/**
		 * p​a​s​s​w​o​r​d
		 */
		password: string
		/**
		 * p​a​s​s​w​o​r​d​ ​a​g​a​i​n
		 */
		rePassword: string
	}
	validation: {
		/**
		 * i​n​v​a​l​i​d​ ​{​f​i​e​l​d​}
		 * @param {unknown} field
		 */
		invalid: RequiredParams<'field'>
		/**
		 * {​f​i​e​l​d​}​ ​i​s​ ​r​e​q​u​i​r​e​d
		 * @param {unknown} field
		 */
		required: RequiredParams<'field'>
		/**
		 * {​f​i​e​l​d​}​ ​m​u​s​t​ ​b​e​ ​a​t​ ​l​e​a​s​t​ ​{​l​e​n​g​t​h​}​ ​c​h​a​r​a​c​t​e​r​s​ ​l​o​n​g
		 * @param {unknown} field
		 * @param {unknown} length
		 */
		tooShort: RequiredParams<'field' | 'length'>
		password: {
			/**
			 * t​h​e​ ​p​r​o​v​i​d​e​d​ ​p​a​s​s​w​o​r​d​s​ ​d​o​n​'​t​ ​m​a​t​c​h
			 */
			dontMatch: string
		}
	}
	footer: {
		/**
		 * c​r​e​a​t​e​d​ ​b​y​ ​D​é​k​á​n​y​ ​M​á​r​k
		 */
		createdBy: string
	}
}

export type TranslationFunctions = {
	navigation: {
		/**
		 * home
		 */
		home: () => LocalizedString
		/**
		 * orders
		 */
		orders: () => LocalizedString
		/**
		 * customers
		 */
		customers: () => LocalizedString
		/**
		 * profile
		 */
		profile: () => LocalizedString
	}
	pages: {
		login: {
			/**
			 * login
			 */
			login: () => LocalizedString
			/**
			 * don't have an account
			 */
			dontHaveAnAccount: () => LocalizedString
			/**
			 * register one now!
			 */
			registerOneNow: () => LocalizedString
			/**
			 * an error occurred during login
			 */
			couldNotLogIn: () => LocalizedString
		}
		register: {
			/**
			 * register
			 */
			register: () => LocalizedString
			/**
			 * already have an account
			 */
			alreadyHaveAnAccount: () => LocalizedString
			/**
			 * login now
			 */
			loginNow: () => LocalizedString
			/**
			 * an error occurred during registration
			 */
			couldNotRegister: () => LocalizedString
		}
		error: {
			/**
			 * Not Found
			 */
			'404': () => LocalizedString
			/**
			 * error
			 */
			general: () => LocalizedString
		}
	}
	inputs: {
		/**
		 * e-mail address
		 */
		email: () => LocalizedString
		/**
		 * username
		 */
		username: () => LocalizedString
		/**
		 * password
		 */
		password: () => LocalizedString
		/**
		 * password again
		 */
		rePassword: () => LocalizedString
	}
	validation: {
		/**
		 * invalid {field}
		 */
		invalid: (arg: { field: unknown }) => LocalizedString
		/**
		 * {field} is required
		 */
		required: (arg: { field: unknown }) => LocalizedString
		/**
		 * {field} must be at least {length} characters long
		 */
		tooShort: (arg: { field: unknown, length: unknown }) => LocalizedString
		password: {
			/**
			 * the provided passwords don't match
			 */
			dontMatch: () => LocalizedString
		}
	}
	footer: {
		/**
		 * created by Dékány Márk
		 */
		createdBy: () => LocalizedString
	}
}

export type Formatters = {}
