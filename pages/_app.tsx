import { useEffect } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
// import NProgress from "nprogress";

// Styles
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // const handleRouteStart = () =>
  //   NProgress.configure({ showSpinner: false }).start();
  // const handleRouteDone = () =>
  //   NProgress.configure({ showSpinner: false }).done();
  // useEffect(() => {
  //   Router.events.on("routeChangeStart", handleRouteStart);
  //   Router.events.on("routeChangeComplete", handleRouteDone);
  //   return () => {
  //     Router.events.off("routeChangeStart", handleRouteStart);
  //     Router.events.off("routeChangeComplete", handleRouteDone);
  //   };
  // }, []);
  return <Component {...pageProps} />;
}
