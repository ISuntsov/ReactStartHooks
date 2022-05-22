import React, { useState } from "react";
import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const [, setState] = useState(false);

    const onLogin = () => {
        localStorage.setItem("user", "login");
        setState(prevState => !prevState);
    };

    const onLogout = () => {
        localStorage.removeItem("user");
        setState(prevState => !prevState);
    };

    return (
        <Card>
            <Component {...props} isAuth={isAuth} onLogin={onLogin} onLogout={onLogout}/>
        </Card>);
};

export default withFunctions;
