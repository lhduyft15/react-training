import React, { useEffect, useState } from "react";
import Validator from "../../utility/validators";
import Button from "../../shareComponents/Button";
import Input from "../../shareComponents/Input";
import "./styles.scss";

export default function Form({ initialValues }) {
    const [values, setValues] = useState(initialValues);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [noteError, setNoteError] = useState("");
    const [genderError, setGenderError] = useState("");

    const [isSubmit, setIsSubmit] = useState(false);

    const submitHandle = (isSubmit) => {
        if (!isSubmit) {
            setIsSubmit(true);
            return;
        }
        [nameError, emailError, phoneError, noteError, genderError].every(
            (item) => !item
        ) && setIsSubmit(false);
    };

    const handleChange = (evt) => {
        const { id, value } = evt.target;

        setValues({
            ...values,
            [id]: value,
        });
    };

    const checkValidation = () => {
        const nameErrorValue = Validator.generalValidation(values.name, "name");
        const emailErrorValue = Validator.emailValidation(values.email);
        const phoneErrorValue = Validator.contactValidation(values.contact);
        const noteErrorValue = Validator.generalValidation(
            values.notes,
            "note"
        );
        const genderErrorValue = Validator.generalValidation(
            values.gender,
            "gender"
        );

        setNameError(nameErrorValue);
        setEmailError(emailErrorValue);
        setPhoneError(phoneErrorValue);
        setNoteError(noteErrorValue);
        setGenderError(genderErrorValue);
    };

    useEffect(() => {
        checkValidation();
    }, [values]);

    return (
        <form novalidate id="detailsForm">
            <div className="form-container">
                <Input
                    id="name"
                    type="text"
                    label="Name*"
                    value={values.name}
                    isSubmit={isSubmit}
                    handleChange={handleChange}
                    errorMessage={nameError}
                />

                <Input
                    id="email"
                    type="email"
                    label="E-mail Address*"
                    value={values.email}
                    isSubmit={isSubmit}
                    handleChange={handleChange}
                    errorMessage={emailError}
                />

                <Input
                    id="contact"
                    type="number"
                    label="Contact Number*"
                    value={values.contact}
                    isSubmit={isSubmit}
                    handleChange={handleChange}
                    errorMessage={phoneError}
                />

                <Input
                    id="gender"
                    label="Gender*"
                    value={values.gender}
                    isSubmit={isSubmit}
                    handleChange={handleChange}
                    errorMessage={genderError}
                />

                <Input
                    id="notes"
                    label="Notes*"
                    value={values.notes}
                    isSubmit={isSubmit}
                    handleChange={handleChange}
                    errorMessage={noteError}
                />

                <Button isSubmit={isSubmit} submitHandle={submitHandle} />
            </div>
        </form>
    );
}
