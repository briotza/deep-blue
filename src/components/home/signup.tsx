import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import birthIcon from "../../assets/username.png";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/password.png";

interface SignupProps {
    onSwitchForm: () => void;
}

export default function Signup({ onSwitchForm }: SignupProps) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: username, email, password, birthday }), 
            });

            if (response.status === 201) {
                const data = await response.json();
                console.log("Usuário registrado com sucesso:", data);
                navigate("/dashboard");
            } else {
                setError("Erro ao registrar usuário.");
            }
        } catch (error) {
            setError("Ocorreu um erro ao tentar registrar o usuário.");
            console.error(error);
        }
    };

    return (
        <div className="bg-white md:w-[50%] w-[100%] h-[100%] flex items-center justify-center font-inter flex-col">
            <form className="space-y-4 max-w-[64%]" onSubmit={handleSignup}>
                <span className="text-2xl font-bold">Crie uma conta</span>
                <div className="flex flex-row border rounded-xl items-center">
                    <img src={birthIcon} className="w-5 mx-4" />
                    <input
                        className="w-[100%] h-12 pl-2 rounded-xl"
                        id="username"
                        type="text"
                        placeholder="Nome"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-row border rounded-xl items-center">
                    <img src={birthIcon} className="w-5 h-6 mx-4" />
                    <input
                        className="w-[100%] h-12 pl-2 rounded-xl"
                        id="birthday"
                        type="date"
                        placeholder="Nascimento"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-row border rounded-xl items-center">
                    <img src={emailIcon} className="w-5 mx-4" />
                    <input
                        className="w-[100%] h-12 pl-2 rounded-xl"
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-row border rounded-xl items-center mb-4">
                    <img src={passwordIcon} className="w-5 mx-4" />
                    <input
                        className="w-[100%] h-12 pl-2 rounded-xl"
                        id="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-row items-center">
                    <input
                        className="mr-2"
                        type="checkbox"
                    />
                    <span className="text-xs">Ao criar uma conta significa que você concorda com os <button><b>Termos e Condições</b></button> e nossa <button><b>Política de Privacidade</b></button></span>
                </div>

                <button type="submit" className="w-[100%] bg-[#150050] text-white rounded-xl border h-12 mt-2">
                    Criar
                </button>

                {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>

            <div className="flex flex-row w-[100%] items-center justify-center my-8">
                <div className="border-t w-[20%]"></div>
                <span className="text-[#64748B] text-sm mx-4">Ou entrar com</span>
                <div className="border-t w-[20%]"></div>
            </div>
            
            <div className="flex space-x-8">
                <button className="flex items-center rounded-xl border py-5 px-8"><img src={google} className="mr-1"/>Google</button>
                <button className="flex items-center rounded-xl border py-5 px-8"><img src={facebook} className="mr-1"/>Facebook</button>
            </div>

            <span className="text-sm mt-8">Já tem uma conta? <button onClick={onSwitchForm}><b>Entrar</b></button></span>
        </div>
    );
}
