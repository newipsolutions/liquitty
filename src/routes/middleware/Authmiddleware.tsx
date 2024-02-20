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

  const tokenValid = () => {
    const access_token = getItem("access_token");
    if (access_token.length) {
      const token = getItem("access_token").split(".")[1];
      var base64 = token.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
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
        if (isAuthProtected && !tokenValid()) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
        if (!isAuthProtected && tokenValid()) {
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
