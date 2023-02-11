import "../styles/globals.scss";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.min.css";
import { ConfigProvider } from "antd";
import { AuthUserProvider } from "../context/AuthUserContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  ConfigProvider.config({ theme: { primaryColor: "#4a60e9" } });

  return (
    <ConfigProvider>
      <AuthUserProvider>
        <Head>
          <title>Fund Inc</title>
          {/* <meta
            name="description"
            content="BugBase, a managed marketplace of ethical hackers that hosts crowdsourced bug bounty programs for companies, ensuring continuous testing and significantly reducing the chance of a cyberattack"
          />
          <meta
            name="keywords"
            content="bugbase, bugbounty, hacking, CTF, india, programs, hacktivity, bugs, cybersecurity, security, technology, pentesting, cybercrime, infosec, jira, integrations, reports, ethical hacking, marketplace, cyberattack"
          /> */}
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ConfigProvider>
  );
}

export default MyApp;
