import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div``;
export const Link = styled(ReactLink)`
text-decoration: none;
color: #000
`;
export const Logo = styled.img`
    max-width: 50px;
    max-height: 50px;
    border: 1px solid;
    border-style: none;
    border-radius: 4px;
`;

export const CardGroup = styled.div`
    display: flex;
    fle-direction: row;
    align-items: center;
    gap: 2rem;
    border: 1px solid;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    border-style: none;
    margin-block-end: 1rem;
    padding: 1rem;
`;
export const Card = styled.div``;
export const Location = styled.p``;
export const Title = styled.h3``;
export const Type =  styled.p``;
export const JobMeta = styled.div``;
export const JobLocation = styled.div``;
export const Icon = styled.div``;
export const Date = styled.div``;
export const Time = styled.div``;