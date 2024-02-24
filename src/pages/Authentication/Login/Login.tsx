import React, { ChangeEvent, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { useAuthStore } from "src/hooks/Authentication/useAuthenticationStore";
import { Warning } from "src/assets/icons/login/Warning";
import { EyeOff } from "src/assets/icons/login/EyeOff";
import { EyeOpen } from "src/assets/icons/login/EyeOpen";
import LogoSm from "../../../assets/images/login/logo-sm.png";
import LogoLg from "../../../assets/images/login/logo-lg.png";
import FondoLg from "../../../assets/images/login/fondo-lg.png";
import FondoSm from "../../../assets/images/login/fondo-sm.png";
import "./style.scss";
import "../layout.scss";

export const Login = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const { isLoading, isError, start_login, setIsError } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const isValid = form.password.length > 0 && form.username.length > 0;

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    setIsError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
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
      <div className="layout-container" style={{ minHeight: `${height}px` }}>
        <div className="portada-container">
          <div className="background-portada"></div>
          <img src={FondoLg} className="portada-lg" />
          <img src={FondoSm} className="portada-sm" />
        </div>
        <div className="content-container">
          <div className="content">
            <img src={LogoSm} className="logo-sm" />
            <img src={LogoLg} className="logo-lg" />
            <p className="text-style tw-font-medium tw-text-2xl tw-leading-6	tw-text-center">
              ¡Bienvenido! <br />
              Ingresa a tu cuenta
            </p>
            <form className="tw-flex-1">
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
                <div className="message-error-container">
                  <Warning />
                  <p className="message-error">
                    Los datos ingresados son incorrectos, verifícalos o intenta
                    recuperar tu cuenta.
                  </p>
                </div>
              )}
            </form>
            <div className="form-options">
              <div className="remember-user">
                <input type="checkbox" style={{ border: "1px solid red" }} />
                <p className="tw-leading-5 tw-m-0">Recordar usuario</p>
              </div>
              <p className="recover-password">Recuperar contraseña</p>
              <button
                className="button-login"
                onClick={handleSubmit}
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
