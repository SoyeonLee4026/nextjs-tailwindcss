import { ReactNode, Suspense } from "react";
import LoadingPage from "../loading";

type Pros = {
  children: ReactNode;
};

export default function SignInLayout({ children }: Pros) {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
}
