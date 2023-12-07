import { notoSansKr } from "@/entities/fonts";
import { locales } from "@/entities/locales/setting";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

/**
 * Generate static parameters
 *
 * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-static-params}
 */
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Default dynamic metadata with locale
 *
 * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-metadata}
 */
export async function generateMetadata({ params: { locale } }: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: {
      template: `%s - ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
    metadataBase: new URL("https://www.sarco.fit"),
    icons: {
      icon: "/logo/favicon.png",
    },
  };
}

/**
 * Layout for landing page
 *
 * @remarks Locale is available from here to child components
 *
 */
export default async function LocalizedLandingLayout({ children, params: { locale } }: Props) {
  let messages;
  try {
    // Lazy load of localized messages according to parsed locale parameter
    messages = (await import(`../../entities/locales/${locale}.json`)).default;
  } catch (error) {
    // If the parsed locale parameter is not found, fallback to Not Found page.
    notFound();
  }

  /**
   * This unstable function, provided by next-intl, is necessary if we want to enable static rendering.
   * Care must be taken that we have to call this function in every page and every layout
   * where static rendering is needed.
   *
   * See https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
   */
  unstable_setRequestLocale(locale);

  // TODO: add dark-theme as well later
  return (
    <html lang={locale} className="light">
      <body className={notoSansKr.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
