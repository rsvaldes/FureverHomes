import React, { Component } from 'react';
import { Route, Link, Router } from 'react-router'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home';


const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)
// render(<App />, document.getElementById('root'))


export default App;
