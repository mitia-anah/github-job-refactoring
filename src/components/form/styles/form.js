import styled from 'styled-components'

export const FormStyled = styled.form`
display: flex;
justify-content: center;
align-items: center;
background: url("./images/backgroundImg.png");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 8px;
height: 138px;
margin: 0 auto;
margin-top: 32px;
padding: 0 18px;
`;

export const Container = styled.div`

`;

export const Input = styled.input`
    font-family: "Roboto",sans-serif;
    margin-left: 10px;
    margin-right: 24px;
    padding: 0 4px;
    height: 32px;
    border: none;
    background: transparent;
    flex: 2 1;
}
`;

export const Submit = styled.button`
    background: #1E86FF;
    border-radius: 4px;
    color: #ffffff;
    width: 100px;
    padding:0.5rem;
    border-style: none;`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-grow:1;
    padding:1rem;
    background-color: #fff;
    border-radius: 4px;
    border-style: none;
`;
