import React from 'react'
import { Container } from '../sidebar/styles/sidebar'

export default function HomeStyling({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

HomeStyling.HomeStyled = function HomeStylingHomeStyled({children, ...restProps}) {
    return <HomeStyled {...restProps}>{children}</HomeStyled>
}