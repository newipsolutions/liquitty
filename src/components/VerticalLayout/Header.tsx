import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import user10 from "../../assets/images/users/avatar-10.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import { getItem, removeItem } from "src/utility/localStorageControl";

const Header = () => {
  const history = useHistory();
  const user = getItem("user");
  const [menu, setMenu] = useState(false);

  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    }
    document.body.setAttribute("data-sidebar-size", "lg");
  }

  const handleLogout = () => {
    removeItem("access_token");
    removeItem("user");
    history.push("/inicio");
  };

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/sales" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoSm} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="22" />
                </span>
              </Link>

              <Link to="/sales" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoSm} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="" height="22" />
                </span>
              </Link>
            </div>

            <button
              onClick={() => {
                tToggle();
              }}
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
          </div>

          <div className="d-flex">
            <Dropdown
              isOpen={menu}
              toggle={() => setMenu(!menu)}
              className="d-inline-block"
            >
              <DropdownToggle
                className="btn header-item user text-start d-flex align-items-center"
                id="page-header-user-dropdown"
                tag="button"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={user10}
                  alt="Header Avatar"
                />
                <span className="ms-2 d-none d-sm-block user-item-desc">
                  <span className="user-name">
                    {user.name} {user.lastname}
                  </span>
                  <span className="user-sub-title">{user.email}</span>
                </span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end py-0" dir="left">
                <DropdownItem tag="a" onClick={handleLogout}>
                  <i className="mdi mdi-logout text-muted font-size-16 align-middle me-1"></i>
                  <span className="align-middle">{"Cerrar sesión"}</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
