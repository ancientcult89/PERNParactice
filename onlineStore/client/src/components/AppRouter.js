import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "..";
import Shop from "../pages/Shop";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import DevicePage from "../pages/DevicePage";
import Auth from "../pages/Auth";
import {
  SHOP_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
} from "../utils/consts";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Routes>
      {user.isAuth && (
        <React.Fragment>
          <Route
            key={ADMIN_ROUTE}
            path={ADMIN_ROUTE}
            element={<Admin />}
            exact
          />
          <Route
            key={BASKET_ROUTE}
            path={BASKET_ROUTE}
            element={<Basket />}
            exact
          />
        </React.Fragment>
      )}
      {
        <React.Fragment>
          <Route
            key={LOGIN_ROUTE}
            path={LOGIN_ROUTE}
            element={<Auth />}
            exact
          />
          <Route
            key={REGISTRATION_ROUTE}
            path={REGISTRATION_ROUTE}
            element={<Auth />}
            exact
          />
          <Route
            key={DEVICE_ROUTE}
            path={DEVICE_ROUTE}
            element={<DevicePage />}
            exact
          />
          <Route key={SHOP_ROUTE} path={SHOP_ROUTE} element={<Shop />} exact />
        </React.Fragment>
      }
      {/* автоматически редирект на главную страницу */}
      <Route path="*" element={<Shop />} />
    </Routes>
  );
};

export default AppRouter;
