import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

/**
 * Top-level root layout
 *
 * @remarks Care must be taken that here the locale is not available here.
 *
 */
export default function RootLayout({ children }: Props) {
  return children;
}
