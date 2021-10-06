import React from "react";
import "./styles.scss";

function Input({
    id,
    label,
    value,
    isSubmit,
    handleChange,
    errorMessage,
    type,
}) {
    const isRequired = errorMessage && errorMessage.includes("required");

    const getSubmitView = (id) => {
        switch (id) {
            case "gender":
                return (
                    <select
                        className={`field ${errorMessage && "field-invalid"}`}
                        id={id}
                        onChange={handleChange}
                        value={value}
                    >
                        <option value="">- Select -</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                        <option value="I do not wish to say">
                            I do not wish to say
                        </option>
                    </select>
                );
            case "notes":
                return (
                    <textarea
                        className={`field field-notes ${
                            errorMessage && "field-invalid"
                        }`}
                        id={id}
                        onChange={handleChange}
                    >
                        {value}
                    </textarea>
                );
            default:
                return (
                    <input
                        type={type}
                        className={`field ${errorMessage && "field-invalid"}`}
                        value={value}
                        id={id}
                        onChange={handleChange}
                    />
                );
        }
    };
    return (
        <div
            className={`input-container ${
                id === "notes" && "input-container-full"
            }`}
        >
            <div className="field-label">{label}</div>
            {!isSubmit ? (
                <div className="field-value">{value}</div>
            ) : (
                getSubmitView(id)
            )}

            {errorMessage && (
                <div
                    className="field-error"
                    id={`${id}${isRequired ? "Required" : "Invalid"}`}
                >
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default Input;
