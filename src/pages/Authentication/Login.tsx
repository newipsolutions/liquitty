import React, { ChangeEvent, useState } from "react";
import MetaTags from "react-meta-tags";
import { Button, Col, Container, Row } from "reactstrap";
import { useAuthStore } from "src/hooks/Authentication/useAuthenticationStore";
import LogoSm from "../../assets/images/login/logo-sm.png";
import LogoLg from "../../assets/images/login/logo-lg.png";
import FondoLg from "../../assets/images/login/fondo-lg.png";
import FondoSm from "../../assets/images/login/fondo-sm.png";

import "./style.scss";
import { Warning } from "src/assets/icons/login/Warning";
import { EyeOff } from "src/assets/icons/login/EyeOff";
import { EyeOpen } from "src/assets/icons/login/EyeOpen";

export const Login = () => {
  const { isLoading, isError, start_login, setIsError } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const isValid = form.password.length > 0 && form.username.length > 0;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    setIsError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <form className="form" onSubmit={handleSubmit}>
            <img src={LogoSm} className="logo-sm" />
            <img src={LogoLg} className="logo-lg" />
            <p className="text-style tw-font-medium tw-text-2xl tw-leading-6	tw-text-center">
              ¡Bienvenido! <br />
              Ingresa a tu cuenta
            </p>
            <input
              className={`form-input ${
                form.username.length && !isError && `form-input-valid`
              } ${isError && `form-input-error`}`}
              placeholder="Ingrese su usuario"
              name="username"
              value={form.username}
              onChange={handleOnChange}
              autoComplete="username"
            />
            <div className="tw-relative">
              <input
                className={`form-input ${
                  form.password.length && !isError && `form-input-valid`
                } ${isError && `form-input-error`}`}
                placeholder="Ingrese su contraseña"
                name="password"
                value={form.password}
                onChange={handleOnChange}
                type={showPassword ? "text" : "password"}
                autoComplete="password"
              />
              <button
                className="button-showpassword"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOpen
                    color={`${
                      form.password.length > 0 ? "#083c96" : "#D0D0D0"
                    }`}
                  />
                ) : (
                  <EyeOff
                    color={`${
                      form.password.length > 0 ? "#083c96" : "#D0D0D0"
                    }`}
                  />
                )}
              </button>
            </div>
            {isError && (
              <div className="message-error">
                <Warning />
                <p className="text-message-error">
                  Los datos ingresados son incorrectos, verifícalos o intenta
                  recuperar tu cuenta.
                </p>
              </div>
            )}
            <div className="form-options">
              <div className="remember-user">
                <input type="checkbox" style={{ border: "1px solid red" }} />
                <p className="tw-leading-5 tw-m-0">Recordar usuario</p>
              </div>
              <p className="recover-password">Recuperar contraseña</p>
              <button
                className="button-login"
                type="submit"
                disabled={!isValid}
              >
                {isLoading ? (
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                ) : (
                  "Iniciar Sesión"
                )}
              </button>
            </div>
            <p className="copyright">
              Copyright ©2024 Sedalib S.A. Una marca registrada por Sedalib S.A.
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
