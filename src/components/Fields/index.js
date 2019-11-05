import React, { useState } from "react";
import InputComponent from "../FieldComponent";

import formData from "../../data";

const Fields = () => {
    const [formInputState, setFormInputState] = useState({});

    const mappedData = formData.map(({ conditional, tag, name, type, human_label }, index) => (
        <InputComponent
            formInputState={formInputState}
            setFormInputState={setFormInputState}
            key={index}
            Tag={tag}
            name={name}
            type={type}
            humanLabel={human_label}
            conditional={conditional}
        />
    ));

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formInputState);
    };

    return (
        <form onSubmit={handleSubmit}>
            {mappedData}
            <button>SUBMIT</button>
        </form>
    );
};

export default Fields;
