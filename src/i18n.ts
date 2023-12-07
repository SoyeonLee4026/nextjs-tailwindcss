import { getRequestConfig } from 'next-intl/server';

/**
 * Creates a configuration once per request.
 * Provide messages and other options (e.g., timeZone)
 * depending on the locale of the user.
 *
 * @remarks
 *
 * This should be declared in i18n.ts for proper operation.
 * This file is supported out-of-the-box both in the src folder
 * as well as in the project root with the extensions .ts, .tsx, .js and .jsx.
 *
 * @see {@link https://next-intl-docs.vercel.app/docs/getting-started/app-router}
 */
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./entities/locales/${locale}.json`)).default,
  timeZone: 'Asia/Seoul', // Defualt timezone
}));
