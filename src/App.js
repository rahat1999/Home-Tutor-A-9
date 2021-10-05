
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AllCourses from './Components/AllCourses/AllCourses';
import LoginForm from './Components/LoginForm/LoginForm';
import Faq from './Components/Faq/Faq';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import PageNotFound from "./Components/PageNotFound/PageNotFound";


function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/allCourses">
            <Header></Header>
            <AllCourses></AllCourses>
            <Footer></Footer>
          </Route>

          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>

          <Route path="/faq">
            <Header></Header>
            <Faq></Faq>
            <Footer></Footer>
          </Route>
          <Route path="/faq">
            <Header></Header>
            <Faq></Faq>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Header></Header>
            <LoginForm></LoginForm>
            <Footer></Footer>
          </Route>

          <Route path="/*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
