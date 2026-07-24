import { env } from '$env/dynamic/private';
import { betterAuth } from 'better-auth/minimal';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { getDb } from '$lib/server/db';
import { building } from '$app/environment';
import { genericOAuth } from 'better-auth/plugins/generic-oauth';

const authConfig = {
	baseURL: env.ORIGIN || (building ? 'http://localhost:5173' : undefined),
	secret: env.BETTER_AUTH_SECRET || (building ? 'a-very-long-dummy-secret-for-build-purposes-only' : undefined),
	emailAndPassword: { enabled: true },
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: 'pramari',
					clientId: env.CLIENT_ID || 'dummy-client-id',
					clientSecret: env.CLIENT_SECRET || 'dummy-client-secret',
					discoveryUrl: 'https://id.pramari.de/.well-known/openid-configuration'
				}
			]
		}),
		sveltekitCookies(getRequestEvent) // make sure this is the last plugin in the array
	]
} satisfies Omit<Parameters<typeof betterAuth>[0], 'database'>;

export const createAuth = (d1: D1Database) =>
	betterAuth({
		...authConfig,
		database: drizzleAdapter(getDb(d1), { provider: 'sqlite' })
	});

/**
 * DO NOT USE!
 *
 * This instance is used by the `better-auth` CLI for schema generation ONLY.
 * To access `auth` at runtime, use `event.locals.auth`.
 */
export const auth = createAuth(null!);
