import React from 'react'
import FormContainer from '../container/form'
import HeaderContainer from '../container/header'
import JobContainer from '../container/jobContainer'
import Sidebar from '../container/sidebar'
import HomeStyling from '../components/homeStyled'

export default function Home() {
    return (    
        <HomeStyling>
            <HomeStyling.HomeStyled>
                <HeaderContainer/>
                <FormContainer/>
                <Sidebar/>
                <JobContainer/>
            </HomeStyling.HomeStyled>       
        </HomeStyling>
        
        
    )
}