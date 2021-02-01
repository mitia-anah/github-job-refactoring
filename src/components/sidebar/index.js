import React from 'react'
import {Container, Label, Input, Cities, CitiInner, SidebarWrapper} from './styles/sidebar'

export default function Sidebar({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Sidebar.SidebarWrapper = function SidebarSidebarWrapper({children, ...restProps}) {
    return <SidebarWrapper {...restProps}>{children}</SidebarWrapper>
}
Sidebar.Label = function SidebarLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}
Sidebar.Input = function SidebarInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}
Sidebar.Cities = function SidebarCities({children, ...restProps}) {
    return <Cities {...restProps}>{children}</Cities>
}

Sidebar.CitiInner = function SidebarCitiInner({children, ...restProps}) {
    return <CitiInner {...restProps}>{children}</CitiInner>
}