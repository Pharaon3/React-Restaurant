import './App.css';
import Header from "./Common/Header"
import Footer from "./Common/Footer"
import Home from './Home/Home'
import Menu from "./Menu/Menu"
import Login from './Login/login'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Header key = 'HeaderKey' />
        <div className="wrapper">
          <Routes>
            <Route
              exact
              path="/"
              element ={<Home />}
            />
            <Route
              path="/menu"
              element ={<Menu />}
            />
            <Route
              path="/login"
              element ={<Login />}
            />
          </Routes>
        </div>
      </Router>
      <Footer key = 'FooterKey' />
    </>
  );
}

export default (App);
