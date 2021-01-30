import React from 'react'
import {Container, Input, Submit, Fieldset, FormStyled} from './styles/form'


export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Form.FormStyled = function FormFormStyled({children, ...restProps}) {
    return <FormStyled {...restProps}>{children}</FormStyled>
}

Form.Input = function FormInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FormSubmit({children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>
}

Form.Fieldset = function FormFieldset({children, ...restProps}) {
    return <Fieldset {...restProps}>{children}</Fieldset>
}