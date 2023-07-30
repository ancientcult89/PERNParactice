import React, {useContext, useState} from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
  const {user} = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let authRespose;
      if(isLogin) {
        authRespose = await  login(email, password);
      }
      else {
        authRespose = await  registration(email, password);
        console.log(authRespose)
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    }
    catch (e)
    {
      alert(e.response.date.message())
    }

  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="enter your email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="mt-3"
            placeholder="enter your password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type={"password"}
          ></Form.Control>
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                No account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
              </div>
            ) : (
              <div>
                Have account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            )}
            <Button variant="outline-success" onClick={click}>
              {isLogin ? "Enter" : "Register"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
