import "./App.scss";
import Header from "./shareComponents/Header";
import Form from "./components/Form";
import React, { useState } from "react";
import logo from "./image/logo.png";
function App() {
    const initialValues = {
        email: "donottake@mydog.com",
        name: "John Wick",
        contact: "0123456789",
        gender: "Male",
        notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    const [text, setText] = useState("Default text");
    return (
        <>
            <Header />
            <div className="searchContent">
                <p>Normal</p>
                <input type="search" id="gsearch" name="gsearch" />
                <br />
                <br />
                <p>Fixed</p>
                <form action=".">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: 60, height: 60 }}
                    />
                    <input
                        type="search"
                        onKeyDown={(ev) => {
                            if (ev.key === "Enter" || ev.keyCode === 13) {
                                setText("SUCCESS");
                            }
                        }}
                    />
                </form>
                <p>Result</p>
                <p>{text}</p>
                <br />
                <br />
                <div onClick={() => setText("Default text")}>RETEST</div>
            </div>
            <div className="container">
                <div className="form-section">
                    <Form initialValues={initialValues} />
                </div>
            </div>
        </>
    );
}

export default App;
