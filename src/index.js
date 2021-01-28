import React from 'react'
import ReactDOM from 'react-dom'
import {JobContext} from './context/job'
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './app'

ReactDOM.render(    
    <JobContext.Provider>
        <App/>
    </JobContext.Provider>
   
    , document.getElementById("root"));



