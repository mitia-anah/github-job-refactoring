import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
// import { JobContext } from './context/jobContext';
import { UseContent } from './hook/use-content';

ReactDOM.render( 
    <UseContent>
        <Router>
            <App/>
        </Router>
    </UseContent>
, document.getElementById("root"));



