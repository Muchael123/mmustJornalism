import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
// import MyComponent from './Component/Comments.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App /> 
     {/* <MyComponent/> */}
  </React.StrictMode>,
)
