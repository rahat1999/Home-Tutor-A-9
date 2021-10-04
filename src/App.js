
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
// import Courses from './Components/Courses/Courses';
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
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/allCourses">
            <AllCourses></AllCourses>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/faq">
            <Faq></Faq>
          </Route>
          <Route path="/faq">
            <Faq></Faq>
          </Route>
          <Route path="/login">
            <LoginForm></LoginForm>
          </Route>

          <Route path="/*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
