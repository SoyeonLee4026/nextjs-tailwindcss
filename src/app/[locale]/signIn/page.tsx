import { getTranslations } from "next-intl/server";

export default async function SignInPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "page.signIn" });

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-8 bg-background-white dark:bg-background-black sm:py-0 sm:px-4">
      <div className="flex flex-col justify-center items-center w-[31rem] py-10	px-6 gap-8 rounded border border-solid border-gray-100 dark:border-gray-700 sm:p-0 sm:border-0 sm:w-full">
        {/* SarcoFit LOGO */}
      </div>
    </div>
  );
}
