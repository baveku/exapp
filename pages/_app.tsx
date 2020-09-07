// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { AppProvider } from "@shopify/polaris";
import { Fragment } from "react";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";
function ExApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <AppProvider i18n={translations}>
        <Component {...pageProps}></Component>
      </AppProvider>
    </Fragment>
  );
}

export default ExApp;
