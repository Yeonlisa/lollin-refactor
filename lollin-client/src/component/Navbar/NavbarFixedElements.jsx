import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavLogo from "../../Images/logo2.png";

export const Nav = styled.nav`
  background: #000;
  opacity: 0.865;
  height: 62px;
  display: flex;
  justify-content: space-between;
  z-index: 3000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const HeadLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;
  text-decoration: none;
  margin-left: 25px;
  margin-top: 10px;
  padding: 0 1rem;
  height: 100%;
  width: 100px;
  cursor: pointer;
  background-image: url(${NavLogo});
  background-size: 128px;
  background-repeat: no-repeat;

  @media screen and (max-width: 870px) {
    margin-top: 10px;
    height: 50px;
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  color: #ebebeb;
  font-weight: bold;
  font-size: 19.5px;
  display: flex;
  align-items: center;
  justify-self: start;
  text-decoration: none;
  margin-top: 2px;
  margin-right: 10px;
  padding: 0 1rem;
  height: 100%;
  width: 115px;
  cursor: pointer;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 870px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 870px) {
    display: flex;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 40px;
  padding: 0px;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavLoginBtn = styled(Link)`
  border-radius: 4px;
  /* background: #000000; */
  margin-left: 10px;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff67b9;
    color: #010606;
  }
`;

export const NavSignupBtn = styled(Link)`
  border-radius: 4px;
  background: #5a5aff;
  margin-left: 10px;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00ff80;
    color: #010606;
  }
`;
