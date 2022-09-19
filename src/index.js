// import React from 'react';
// import ReactDOM  from 'react-dom';

// import App from './App';

// ReactDOM.render(<App/> , document.getElementById('root'));




import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import { BrowserRouter as Router  } from "react-router-dom";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Router>
    <App />
  </Router>
);

//reportWebVitals();