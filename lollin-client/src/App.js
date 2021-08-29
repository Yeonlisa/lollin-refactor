import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";
import ChampDB from "./pages/ChampDB/ChampDB.jsx";
import ChampDetail from "./pages/ChampDetail/ChampDetail.jsx";
import UserInfo from "./pages/UserInfo/UserInfo.jsx";

import Navbar from "./component/Navbar/NavbarFixed";
import FooterFixed from "./component/Footer/FooterFixed";
import SidebarDropdown from "./component/Sidebar/SidebarDropdown";

import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Myinfo from "./pages/User/MyInfo";

import ScrollToTop from "./Scroll/ScrollToTop";

// const server = process.env.REACT_APP_SERVER_URL;
function App() {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [champPriId, setChampPriId] = useState("Aatrox");
  const [summonerName, setSummornerName] = useState("");
  const [jwt, setJwt] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const [loginOn, setLoginOn] = useState(false);
  const [signupOn, setSignupOn] = useState(false);

  const handleJwt = (jwt) => {
    setJwt(jwt);
  };
  history.handleJwt = handleJwt;
  history.handleLogin = setisLogin;
  history.jwt = jwt;
  history.setJwt = setJwt;
  history.setisLogin = setisLogin;

  useEffect(() => {
    if (sessionStorage.getItem("jwt")) {
      setLoginOn(true);
      setisLogin(true);
    }
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChampPriId = (id) => {
    setChampPriId(id);
    history.push("/champions/detail");
  };

  const handleSearchChange = (event) => {
    setSummornerName(event.target.value);
  };

  const handleSearchClick = () => {
    history.push("/userinfo");
  };

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="Container">
      <ScrollToTop />
      <Navbar
        toggle={toggle}
        loginOn={loginOn}
        setLoginOn={setLoginOn}
        signupOn={signupOn}
        setSignupOn={setSignupOn}
        isLogin={isLogin}
        setisLogin={setisLogin}
        setJwt={setJwt}
        jwt={jwt}
      />
      <SidebarDropdown
        isOpen={isOpen}
        toggle={toggle}
        loginOn={loginOn}
        setLoginOn={setLoginOn}
        signupOn={signupOn}
        setSignupOn={setSignupOn}
        isLogin={isLogin}
        setisLogin={setisLogin}
        setJwt={setJwt}
        jwt={jwt}
      />
      <Route
        exact
        path="/"
        render={() => (
          <MainPage
            handleSearchChange={handleSearchChange}
            handleSearchClick={handleSearchClick}
            handleOnKeyPress={handleOnKeyPress}
          />
        )}
      />
      <Route
        exact
        path="/champions/all"
        render={() => <ChampDB handleChampPriId={handleChampPriId} />}
      />
      <Route
        exact
        path="/champions/detail"
        render={() => <ChampDetail champPriId={champPriId} />}
      />
      <Route exact path="/items/all" component={ItemsDB} />
      <Route
        exact
        path="/user/login"
        render={() => <Login history={history} />}
      />
      <Route
        exact
        path="/user/signup"
        render={() => <Signup history={history} />}
      />
      <Route
        exact
        path="/user/update"
        render={() => <Myinfo history={history} />}
      />
      <Route
        exact
        path="/userinfo"
        render={() => (
          <UserInfo history={history} summonerName={summonerName} />
        )}
      />
      <FooterFixed />
    </div>
  );
}

export default App;
