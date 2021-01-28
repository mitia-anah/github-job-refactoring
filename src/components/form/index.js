import React, {useState} from 'react'


export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Form.Input = function FormInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FormSubmit({children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>
}