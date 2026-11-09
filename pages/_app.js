import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { ExperienceProvider } from "../contexts/ExperienceContext";
import SiteLayout from "../components/layout/SiteLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const onRoute = () => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };
    router.events.on("routeChangeComplete", onRoute);
    return () => router.events.off("routeChangeComplete", onRoute);
  }, [router.events]);

  return (
    <ExperienceProvider>
      <SiteLayout title={pageProps.title} description={pageProps.description}>
        <Component {...pageProps} />
      </SiteLayout>
    </ExperienceProvider>
  );
}

export default MyApp;
