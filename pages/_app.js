import "../styles/globals.scss";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.min.css";
import { ConfigProvider } from "antd";
import { AuthUserProvider } from "../context/AuthUserContext";

function MyApp({ Component, pageProps }) {
  ConfigProvider.config({ theme: { primaryColor: "#ff385c" } });

  return (
    <ConfigProvider>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ConfigProvider>
  );
}

export default MyApp;
