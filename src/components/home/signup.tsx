import username from "../../assets/username.png"
import email from "../../assets/email.png"
import password from "../../assets/password.png"
import google from "../../assets/google.png"
import facebook from "../../assets/facebook.png"
import { Link } from "react-router-dom"


interface SignupProps {
    onSwitchForm: () => void;
}

export default function Signup({ onSwitchForm }: SignupProps) {
    return (
        <div className="bg-white w-[50%] h-[100%] flex items-center justify-center font-inter flex-col">
            <form className="space-y-4 max-w-[64%]">
                <span className="text-2xl font-bold">Sign Up for an Account</span>
                <div className="flex flex-row border rounded-xl items-center">
                    <img src={username} className="w-5 h-6 mx-4" />
                    <input
                        className="w-[100%] h-12 pl-2 rounded-xl"
                        id="username"
                        type="text"
                        placeholder="Username"
                        required
                    />
                </div>

                <div className="flex flex-row border rounded-xl items-center">
                    <img src={email} className="w-5 mx-4" />
                    <input
                        className="w-[100%] h-12 pl-2 rounded-xl"
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                </div>

                <div className="flex flex-row border rounded-xl items-center mb-4">
                    <img src={password} className="w-5 mx-4" />
                    <input
                        className="w-[100%] h-12 pl-2 rounded-xl"
                        id="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>

                <div className="flex flex-row items-center">
                    <input
                        className="mr-2"
                        type="checkbox"
                    />
                    <span className="text-xs">By creating an account means you agree to the <button><b>Terms
                    & Conditions</b></button> and our <button><b>Privacy Policy</b></button></span>
                </div>

                <Link to='/dashboard'><button className="w-[100%] bg-[#150050] text-white rounded-xl border h-12 mt-2">Sign Up</button></Link>

            </form>
            <div className="flex flex-row w-[100%] items-center justify-center my-8">
                <div className="border-t w-[20%]"></div>
                <span className="text-[#64748B] text-sm mx-4">Or sign up with</span>
                <div className="border-t w-[20%]"></div>
            </div>
            
            <div className="flex space-x-8">
                <button className="flex items-center rounded-xl border py-5 px-8"><img src={google} className="mr-1"/>Google</button>
                <button className="flex items-center rounded-xl border py-5 px-8"><img src={facebook} className="mr-1"/>Facebook</button>
            </div>

            <span className="text-sm mt-8">Already have an account? <button onClick={onSwitchForm}><b>Log In</b></button></span>
        </div>
    )
}