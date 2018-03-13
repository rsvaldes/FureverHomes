import React, { Component } from 'react';
import { Route, Link, Router } from 'react-router'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';


const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
)
// render(<App />, document.getElementById('root'))


export default App;
