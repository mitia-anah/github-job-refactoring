import React, {useState} from 'react'
import {Form} from '../components'

export default function FormContainer() {
    const [description, setDescription] = useState("");

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            addFilter({ type: "DESCRIPTION", value: description });
        }
    };

    return (
        <Form>
            <Form.Fieldset>
                <Form.Input
                 type="text"
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 placeholder="Title, companies, expertise"
                 onKeyDown={handleSearch}
                />
                <Form.Submit>
                    Search
                </Form.Submit>
            </Form.Fieldset>
        </Form>
    )
}