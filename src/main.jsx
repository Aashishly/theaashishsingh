import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectPage from './pages/Project';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import WorkinProgress from './components/WorkinProgress';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>,
)
