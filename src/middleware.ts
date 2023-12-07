import { locales } from "@/entities/locales/setting";
import createIntlMiddleware from "next-intl/middleware";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { NextRequest, NextResponse } from "next/server";

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

/**
 * Next.js middleare
 *
 * @remarks
 * Middleware will be invoked for every route in the project
 *
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing/middleware}
 *
 */
export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  const locale = currentPath.split("/")[0];

  // API - http request middleware
  request.headers.set("locale", locale);

  // Loacle middleware
  const intlMiddleware = createIntlMiddleware({
    locales,
    localePrefix: "as-needed",
    defaultLocale: "kr",
    localeDetection: false,
  });

  const response = intlMiddleware(request);
  if (response) return response;

  return NextResponse.next();
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

export default middleware;
