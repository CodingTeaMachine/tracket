import lucia from 'lucia-auth';
import prismaAdaptor from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import prisma from '$lib/server/prisma';
import { sveltekit } from 'lucia-auth/middleware';

export const auth = lucia({
	adapter: prismaAdaptor(prisma),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			name: userData.name,
			email: userData.email,
		};
	},
});

export type Auth = typeof auth;
