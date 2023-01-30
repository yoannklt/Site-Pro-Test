import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Navbar.css';
import '../src/css/Footer.css';
import '../src/css/Carousel.css';
import '../src/css/Home.css';
import '../src/css/News.css';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);