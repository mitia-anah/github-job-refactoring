import React from 'react'
import {JobDetailWrapper, Text, Apply, Link, Sidebar, Title, Type, MediumTitle, SmallTitle, Content, Time, JobDate, Location, Description, Company, Logo } from './styles/jobDetail'

export default function JobDetail({children, ...restProps}) {
    return <JobDetailWrapper {...restProps}>{children}</JobDetailWrapper>
}

JobDetail.Sidebar = function JobDetailSidebar({children, ...restProps}) {
    return <Sidebar {...restProps}>{children}</Sidebar>
}

JobDetail.Apply = function JobDetailApply({children, ...restProps}) {
    return <Apply {...restProps}>{children}</Apply>
}
JobDetail.Title = function JobDetailTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
JobDetail.Type = function JobDetailType({children, ...restProps}) {
    return <Type {...restProps}>{children}</Type>
}
JobDetail.Link = function JobDetailLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}
JobDetail.Text = function JobDetailText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}
JobDetail.Content = function JobDetailContent({children, ...restProps}) {
    return <Content {...restProps}>{children}</Content>
}
JobDetail.MediumTitle = function JobDetailMediumTitle({children, ...restProps}) {
    return <MediumTitle {...restProps}>{children}</MediumTitle>
}

JobDetail.JobDate = function JobDetailJobDate({children, ...restProps}) {
    return <JobDate {...restProps}>{children}</JobDate>
}
JobDetail.Time = function JobDetailTime({children, ...restProps}) {
    return <Time {...restProps}>{children}</Time>
}
JobDetail.Company = function JobDetailCompany({children, ...restProps}) {
    return <Company {...restProps}>{children}</Company>
}
JobDetail.Logo = function JobDetailLogo({children, ...restProps}) {
    return <Logo {...restProps}>{children}</Logo>
}
JobDetail.SmallTitle = function JobDetailSmallTitle({children, ...restProps}) {
    return <SmallTitle {...restProps}>{children}</SmallTitle>
}
JobDetail.Location = function JobDetailLocation({children, ...restProps}) {
    return <Location {...restProps}>{children}</Location>
}
JobDetail.Description = function JobDetailDescription({children, ...restProps}) {
    return <Description {...restProps}>{children}</Description>
}