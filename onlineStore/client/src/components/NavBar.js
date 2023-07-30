import React, { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "white" }}>
          BuyDevice
        </NavLink>

        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
                variant={"outline-light"}
                onClick={() => navigate(ADMIN_ROUTE)}
            >
                Admin
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-4"
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Authorize
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
