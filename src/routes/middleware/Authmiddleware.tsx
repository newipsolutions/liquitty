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
  const isLoggedIn = getItem("isLoggedIn") == null ? false : true;

  return (
    <Route
      render={(props: any) => {
        if (isAuthProtected && !isLoggedIn) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
        if (!isAuthProtected && isLoggedIn) {
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
