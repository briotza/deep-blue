import Signup from "../../components/home/signup";
import Painel from "../../components/home/painel";
import Login from "../../components/home/login"
import ForgotPassword from "../../components/home/forgotpassword";
import Email from "../../components/home/email";
import { useState } from "react";

export default function Home() {
    const [currentForm, setCurrentForm] = useState("login");

    const handleSwitchToSignup = () => setCurrentForm("signup")
    const handleSwitchToLogin = () => setCurrentForm("login")
    const handleSwitchToForgotPassword = () => setCurrentForm("forgotPassword")
    const handleSwitchToEmail = () => setCurrentForm("email")

    return(
        <div className="flex flex-row h-screen">
            <Painel />
            {currentForm === "signup" && <Signup onSwitchForm={handleSwitchToLogin} />}
            {currentForm === "login" && <Login onSwitchForm={handleSwitchToSignup} onForgotPassword={handleSwitchToForgotPassword}/>}
            {currentForm === "forgotPassword" && <ForgotPassword onSwitchForm={handleSwitchToLogin} onSwitchSignup={handleSwitchToSignup} onSwitchToEmail={handleSwitchToEmail}/>}
            {currentForm === "email" && <Email />}
        </div>
    )
}