import React from "react";

const InputComponent = ({
    Tag,
    formInputState,
    setFormInputState,
    conditional,
    name,
    type,
    humanLabel
}) => {
    if (conditional) {
        const showIf = eval(conditional.show_if);
        const inputDate = new Date(formInputState[conditional.name]);
        if (!showIf(inputDate)) {
            return null;
        }
    }

    const handleChange = e => {
        setFormInputState({
            ...formInputState,
            [name]: e.target.value
        });
    };

    return (
        <>
            <label htmlFor={name}>{humanLabel}</label>
            <Tag
                id={name}
                name={name}
                type={type}
                value={formInputState[name] || ""}
                onChange={handleChange}
                required
            />
        </>
    );
};

export default InputComponent;
