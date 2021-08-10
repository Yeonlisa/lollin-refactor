import React from "react";
import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavLoginBtn,
  NavSignupBtn,
} from "./NavbarFixedElements";
import ProgressBar from "./ProgressBar";

const Navbar = ({
  toggle,
  loginOn,
  setLoginOn,
  signUpOn,
  setSignupOn,
  jwt,
  isLogin,
  setisLogin,
  setJwt,
}) => {
  return (
    <>
      <Nav>
        <Bars onClick={toggle} />
        <Logo to="/" />
        <NavMenu>
          <NavLink to="/userinfo">User Info</NavLink>
          <NavLink to="/items/all">Item DB</NavLink>
          <NavLink to="/champions/all">Champ DB</NavLink>
        </NavMenu>
        <NavBtn>
          {isLogin ? (
            <NavLoginBtn
              to="/"
              onClick={() => {
                setisLogin(false);
                sessionStorage.clear();
              }}
            >
              Logout
            </NavLoginBtn>
          ) : (
            <NavLoginBtn to="/user/login">Login</NavLoginBtn>
          )}
          {isLogin ? (
            <NavSignupBtn to="/user/update">MyInfo</NavSignupBtn>
          ) : (
            <NavSignupBtn to="/user/signup">Signup</NavSignupBtn>
          )}
        </NavBtn>
      </Nav>
      <ProgressBar />
    </>
  );
};

export default Navbar;