import { Route, Redirect } from "react-router-dom";
import { getItem } from "src/utility/localStorageControl";

interface AuthLayoutProps {
  component: any;
  layout: any;
  isAuthProtected: any;
  path?: string;
  exact?: boolean;
  key?: number;
}

const Authmiddleware = ({
  component,
  layout,
  isAuthProtected,
}: AuthLayoutProps) => {
  const Layout = layout;
  const Component = component;

  const isTokenValid = () => {
    const accessToken = getItem("access_token");
    if (accessToken.length) {
      const token = getItem("access_token").split(".")[1];
      const base64Token = token.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64Token)
          .split("")
          .map(function (char) {
            return "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      const tokenParse = JSON.parse(jsonPayload);
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime > tokenParse.exp) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  return (
    <Route
      render={(props: any) => {
        if (isAuthProtected && !isTokenValid()) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
        if (!isAuthProtected && isTokenValid()) {
          return (
            <Redirect
              to={{ pathname: "/inicio", state: { from: props.location } }}
            />
          );
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default Authmiddleware;
