import validationMessage from "./validationMessage";

const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CONTACT_REGEX = /^\d{8,12}$/;

const generalValidation = (fieldValue, type) => {
    if (fieldValue.trim() === "") {
        switch (type) {
            case "name":
                return validationMessage.nameRequiredMessage;
            case "gender":
                return validationMessage.genderRequiredMessage;
            case "note":
                return validationMessage.noteRequiredMessage;
            default:
                return "";
        }
    }
    return null;
};

const emailValidation = (email) => {
    if (EMAIL_REGEX.test(email)) {
        return null;
    }
    if (email.trim() === "") {
        return validationMessage.emailRequiredMessage;
    }
    return validationMessage.emailInvalidMessage;
};

const contactValidation = (contact) => {
    if (CONTACT_REGEX.test(contact)) {
        return null;
    }
    if (contact.trim() === "") {
        return validationMessage.contactRequiredMessage;
    }
    return validationMessage.contactInvalidMessage;
};

const validator = {
    generalValidation,
    emailValidation,
    contactValidation,
};

export default validator;
