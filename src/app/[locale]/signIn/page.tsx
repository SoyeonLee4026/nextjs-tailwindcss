import * as SignInPageEntity from "@/entities/ui/pages/signIn";
import { Button, Image } from "@/frameworks-and-drivers/components";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

/**
 * Generate metadata of sign-in page
 *
 */
export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "page.signIn" });
  return {
    title: t(SignInPageEntity.META_DATA.TITLE.text),
  };
}

/**
 * Sign-in page
 *
 */
export default async function SignInPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "page.signIn" });

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-8 bg-background-white dark:bg-background-black sm:py-0 sm:px-4">
      <div className="flex flex-col justify-center items-center w-[31rem] py-10	px-6 gap-8 rounded border border-solid border-gray-100 dark:border-gray-700 sm:p-0 sm:border-0 sm:w-full">
        {/* SarcoFit LOGO */}
        <Image
          src={SignInPageEntity.LOGO.src}
          alt={SignInPageEntity.LOGO.alt}
          width={SignInPageEntity.LOGO.width}
          height={SignInPageEntity.LOGO.height}
        />
        <Button {...SignInPageEntity.SIGN_IN_BUTTON.className}>{t(SignInPageEntity.SIGN_IN_BUTTON.text)}</Button>
      </div>
    </div>
  );
}
