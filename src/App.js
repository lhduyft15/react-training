import "./App.scss";
import Header from "./shareComponents/Header";
import Form from "./components/Form";
function App() {
    const initialValues = {
        email: "donottake@mydog.com",
        name: "John Wick",
        contact: "0123456789",
        gender: "Male",
        notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    return (
        <>
            <Header />
            <div className="container">
                <div className="form-section">
                    <Form initialValues={initialValues} />
                </div>
            </div>
        </>
    );
}

export default App;
