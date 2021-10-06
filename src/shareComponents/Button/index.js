import React from "react";
import "./styles.scss";

function Button({ isSubmit, submitHandle }) {
    return (
        <div className="btn-container">
            <button
                type="button"
                className={`button ${!isSubmit && "button-edit"}`}
                id={isSubmit ? "submit" : "edit"}
                onClick={() => submitHandle(isSubmit)}
            >
                {isSubmit ? "Save" : "Edit"}
            </button>
        </div>
    );
}

export default Button;
