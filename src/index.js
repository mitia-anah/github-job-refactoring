import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { JobContext } from './context/jobContext';
import { UseContent } from './hook/use-content';

ReactDOM.render( 
<UseContent>
    <App/>
</UseContent>
, document.getElementById("root"));



