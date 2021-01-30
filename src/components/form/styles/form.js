import styled from 'styled-components'

export const FormStyled = styled.form`
    background-image: url('./images/backgroundImg.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-block-end: 3rem;
    padding: 3rem
`;

export const Container = styled.div`
margin: auto;
padding: 2rem;
`;

export const Input = styled.input`
border-style: none;
width: 100%;
`;

export const Submit = styled.button`
    background: #1E86FF;
    border-radius: 4px;
    color: #ffffff;
    width: 100px;
    
    padding:0.5rem;
    border-style: none;`;

export const Fieldset = styled.fieldset`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
