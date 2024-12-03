import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/password.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../AuthContext"; 

interface LoginProps {
    onSwitchForm: () => void;
    onForgotPassword: () => void;
}

export default function Login({ onSwitchForm, onForgotPassword }: LoginProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { login } = useAuth();


    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
          console.log("Tentando fazer login com email:", email);
          const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log("Login bem-sucedido:", data);
          
            login(data.user.id,data.user.name, email); 
            
            navigate("/dashboard");
          } else {
            const errorData = await response.json();
            console.log("Erro no login:", errorData);
            setError("Credenciais inválidas. Tente novamente.");
          }
        } catch (error) {
          console.log("Erro ao fazer login:", error);
          setError("Ocorreu um erro ao tentar fazer login.");
        }
    };
    
      
    return (
        <div className="bg-white md:w-[50%] w-[100%] h-[100%] flex items-center justify-center font-inter flex-col">
            <form className="space-y-4 min-w-[64%]" onSubmit={handleLogin}>
                <span className="text-2xl font-bold">Entrar na sua conta</span>
                <p>Bem-vindo de volta!</p>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex flex-row border rounded-xl items-center">
                    <img src={emailIcon} className="w-5 mx-4" />
                    <input
                        className="w-[100%] h-12 pl-2 rounded-xl"
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
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex flex-row items-center w-[100%]">
                    <input className="mr-2" type="checkbox" />
                    <span className="text-xs">Lembrar-se</span>
                    <button
                        className="ml-auto text-xs text-[#150050] font-bold"
                        type="button"
                        onClick={onForgotPassword}
                    >
                        Esqueceu a senha?
                    </button>
                </div>

                <button
                    type="submit"
                    className="mt-2 w-[100%] bg-[#150050] text-white rounded-xl border h-12"
                >
                    Entrar
                </button>
            </form>

            <div className="flex flex-row w-[100%] items-center justify-center my-8">
                <div className="border-t w-[20%]"></div>
                <span className="text-[#64748B] text-sm mx-4">Ou entrar com</span>
                <div className="border-t w-[20%]"></div>
            </div>

            <div className="flex space-x-8">
                <button className="flex items-center rounded-xl border py-5 px-8">
                    <img src={google} className="mr-1" />
                    Google
                </button>
                <button className="flex items-center rounded-xl border py-5 px-8">
                    <img src={facebook} className="mr-1" />
                    Facebook
                </button>
            </div>

            <span className="text-sm mt-8">
                Não tem uma conta?{" "}
                <button onClick={onSwitchForm}>
                    <b>Cadastre-se</b>
                </button>
            </span>
        </div>
    );
}
