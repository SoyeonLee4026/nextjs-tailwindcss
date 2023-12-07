/**
 * Set up the plugin which creates an alias
 * to import i18n configuration into Server Components.
 *
 * @see {@link https://next-intl-docs.vercel.app/docs/getting-started/app-router}
 */
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({});
