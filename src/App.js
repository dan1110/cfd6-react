import { createContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/custom.scss";
import { Footer, Header } from "./components";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import {
  CoinIntroduce,
  Cooprate,
  Course,
  CourseDetail,
  Email,
  ErrorPage,
  FAQ,
  Home,
  Pay,
  Profile,
  ProjectPage,
  Register,
  Team,
} from "./pages";
import CountDown from "./pages/CountDown";

export const Context = createContext({});

function App() {
  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem("login")),
  });
  //   let login = {
  //     name: "Đặng Thuyền Vương",
  //     avatar: "/img/avt.png",
  //   };

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(state.login));
  }, [state.login]);

  function handleLogin(name, pass) {
    if (name == "admin@gmail.com" && pass === "a12345678") {
      setState({
        ...state,
        login: {
          name: "Dang Thuyen Vuong",
          avt: "/img/avt.png",
        },
      });
    } else {
      return "Sai thông tin đăng nhập";
    }
  }
  function handleLogout() {
    setState({
      ...state,
      login: false,
    });
  }

  return (
    <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/du-an" component={ProjectPage} />
          <Route path="/team" component={Team} />
          <Route path="/dang-ki" component={Register} />
          <PrivateRoute path="/ca-nhan" component={Profile} />
          <Route path="/faq" component={FAQ} />
          {/* <Route path="/email" component={Email} /> */}
          <Route path="/chi-tiet-khoa-hoc" component={CourseDetail} />
          <Route path="/khoa-hoc" component={Course} />
          <Route path="/thanh-toan" component={Pay} />
          <Route path="/lien-he" component={Cooprate} />
          <Route path="/gioi-thieu-coin" component={CoinIntroduce} />
          <Route path="/demo" component={CountDown} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
        <Login />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
