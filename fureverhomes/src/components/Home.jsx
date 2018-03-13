import React from 'react';
import '../App.css';
import Search from './Search';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <p>Welcome to furever homes. Sroll down to learn more!</p>
)

// const HomePage = () => <div>This is a Home Page</div>
const AboutPage = () => <div>This is an About Page</div>
const ContactPage = () => <div>This is a Contact Page</div>

export default Home;
