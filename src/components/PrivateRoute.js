// import necessary object from rrd
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
  // assume that user is not login yet
  const isSignin = true;

  return (
    isSignin ? <Outlet /> : <Navigate to="/signin" />
  );
};

export default PrivateRoute;
