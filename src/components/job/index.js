import React from 'react'
import {Container, Link, CardLogo, CardGroup, Logo, Location, Title,Type, JobMeta, JobLocation, Icon, Time} from './styles/job'

export default function Job({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Job.Card = function JobCard({children, ...restProps}) {
    return <Card {...restProps}>{children}</Card>
}
Job.Link = function JobLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}
Job.CardLogo = function JobCardLogo({children, ...restProps}) {
    return <CardLogo {...restProps}>{children}</CardLogo>
}
Job.Logo = function JobLogo({children, ...restProps}) {
    return <Logo {...restProps}>{children}</Logo>
}
Job.CardGroup = function JobCardGroup({children, ...restProps}) {
    return <CardGroup {...restProps}>{children}</CardGroup>
}
Job.Location = function JobLocation({children, ...restProps}) {
    return <Location {...restProps}>{children}</Location>
}
Job.Title = function JobTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Job.Type = function JobType({children, ...restProps}) {
    return <Type {...restProps}>{children}</Type>
}
Job.JobMeta = function JobJobMeta({children, ...restProps}) {
    return <JobMeta {...restProps}>{children}</JobMeta>
}
Job.JobLocation = function JobJobLocation({children, ...restProps}) {
    return <JobLocation {...restProps}>{children}</JobLocation>
}
Job.Icon = function JobIcon({children, ...restProps}) {
    return <Icon {...restProps}>{children}</Icon>
}
Job.Date = function JobDate({children, ...restProps}) {
    return <Date {...restProps}>{children}</Date>
}
Job.Time = function JobTime({children, ...restProps}) {
    return <Time {...restProps}>{children}</Time>
}
