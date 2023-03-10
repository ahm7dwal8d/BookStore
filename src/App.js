import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header"
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Index/Index';
import Authors from "./Components/Authors/Authors"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Register from "./Components/Register/Register"
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Authors' element={<Authors />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Card' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
