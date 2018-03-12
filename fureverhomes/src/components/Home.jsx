import React from 'react';
import '../App.css';
import Search from './Search';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <div className="base">
    <header>
      <p>React Router v4 Browser Example</p>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

          </ul>
        </nav>
    </header>
    <div className="container">
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/search" component={Search} />
    </div>
    <footer>
        React Router v4 Browser Example (c) 2017
    </footer>
  </div>
)

const HomePage = () => <div>This is a Home Page</div>
const AboutPage = () => <div>This is an About Page</div>
const ContactPage = () => <div>This is a Contact Page</div>

export default Home;
