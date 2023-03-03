import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './templates/navbar';
import Image from './templates/image';
import Content from './templates/content';
import Footer from './templates/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar/>
    <Content/>
    <Image/>
    <Footer/>
  </React.StrictMode>
);



