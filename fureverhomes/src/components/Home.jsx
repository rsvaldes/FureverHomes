import React from 'react';
// import '../App.css';
import Search from './Search';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
<div className="jumbotron bg-info">
<h1 className="display-3">Welcome To Furever Homes!</h1>
<p className="lead">Continue scrolling to learn more</p>
<hr className="my-4" />
<p className="lead">
<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</p>
</div>
</div>
)

// const HomePage = () => <div>This is a Home Page</div>
const AboutPage = () => <div>This is an About Page</div>
const ContactPage = () => <div>This is a Contact Page</div>

export default Home;
