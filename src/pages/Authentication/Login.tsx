import React, { ChangeEvent, useState } from "react";
import MetaTags from "react-meta-tags";
import { Button, Col, Container, Row } from "reactstrap";
import { useAuthStore } from "src/hooks/Authentication/useAuthenticationStore";
import LogoSm from "../../assets/images/login/logo-sm.png";
import LogoLg from "../../assets/images/login/logo-lg.png";
import FondoLg from "../../assets/images/login/fondo-lg.png";
import FondoSm from "../../assets/images/login/fondo-sm.png";

import "./style.scss";

export const Login = () => {
  const { isLoading, start_login } = useAuthStore();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const data = {
      grant_type: "password",
      username: form.username,
      password: form.password,
    };
    start_login(data);
  };

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Dashonic - React Admin & Dashboard Template</title>
      </MetaTags>

      <div className="login-container">
        <img src={FondoLg} className="fondo-lg" />
        <img src={FondoSm} className="fondo-sm" />
        <div className="form-container">
          <div className="form">
            <img src={LogoSm} className="logo-sm" />
            <img src={LogoLg} className="logo-lg" />
            <p className="text-style tw-font-medium tw-text-2xl tw-leading-6	tw-text-center">
              ¡Bienvenido! <br />
              Ingresa a tu cuenta
            </p>
            <input
              className="form-input"
              placeholder="Ingrese su usuario"
              name="username"
              value={form.username}
              onChange={handleOnChange}
            />
            <div className="">
              <input
                className="form-input"
                placeholder="Ingrese su contraseña"
                name="password"
                value={form.password}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-options">
              <div className="remember-user">
                <input type="checkbox" />
                <p className="tw-leading-5 tw-m-0">Recordar usuario</p>
              </div>
              <p className="recover-password">Recuperar contraseña</p>
              <button className="button-login">Iniciar sesión </button>
            </div>
            <p className="copyright">
              Copyright ©2024 Sedalib S.A. Una marca registrada por Sedalib S.A.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="authentication-bg min-vh-100">
        <div className="bg-overlay bg-white"></div>
        <Container>
          <div className="d-flex flex-column min-vh-100 py-2">
            <Row className="justify-content-center my-auto">
              <Col md={8} lg={6} xl={4}>
                <form className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-1">
                    <label className="mb-0">Usuario</label>
                    <input
                      className="form-control"
                      placeholder="Ingrese su usuario"
                      name="username"
                      value={form.username}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <label className="mb-0">Contraseña</label>
                    <input
                      className="form-control"
                      placeholder="Ingrese su contraseña"
                      name="password"
                      value={form.password}
                      onChange={handleOnChange}
                    />
                  </div>
                  <Button
                    color="primary"
                    type="submit"
                    className="w-100"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? "... Cargando" : "Iniciar sesión"}
                  </Button>
                </form>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <p className="text-center mb-0">
                  &copy;{new Date().getFullYear()} Created with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by New Ip
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div> */}
    </React.Fragment>
  );
};
