import React from 'react';
import '../App.css';
import Home from './Home';
import Search from './Search';
import Contact from './Contact';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const BaseLayout = () => (
  <div className="base">
    <header>
      <p>Furever Homes</p>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

          </ul>
        </nav>
    </header>
    <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/search" component={Search} />
    </div>
    <footer>
        Furever Homes 2018
    </footer>
  </div>
)


export default BaseLayout;
