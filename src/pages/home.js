import React from 'react'
import FormContainer from '../container/form'
import HeaderContainer from '../container/header'
import JobContainer from '../container/jobContainer'
import Sidebar from '../container/sidebar'
import { Switch, Route } from 'react-router-dom'
import JobDetailContainer from '../container/jobDetail'

export default function Home() {
    return (    
        <div className='home'>
             <HeaderContainer/>
                <Switch>
                    <Route exact path='/'>
                        <FormContainer/>
                        <Sidebar/>
                        <JobContainer/>
                    </Route>
                    <Route path='/job/:jobId'>
                        <JobDetailContainer/>
                    </Route>
                </Switch>           
        </div>         
    )
}