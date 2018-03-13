import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </header>
)
