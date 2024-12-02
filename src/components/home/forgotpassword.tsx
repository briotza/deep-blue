import email from "../../assets/email.png"

interface onSwitchSignupProps {
    onSwitchForm: () => void;
    onSwitchSignup: () => void;
    onSwitchToEmail: () => void;
}

export default function ForgotPassword({ onSwitchForm, onSwitchSignup, onSwitchToEmail }: onSwitchSignupProps) {
    return (
        <div className="bg-white md:w-[50%] w-[100%] h-[100%] flex items-center justify-center font-inter flex-col">
            <form className="space-y-4 w-[64%]">
                <span className="text-2xl font-bold">Alterar senha</span>
                <p>Digite o endereço de e-mail associado à sua conta e enviaremos um link para redefinir sua senha.</p>

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

                <button className="w-[100%] bg-[#150050] text-white rounded-xl border h-12" onClick={onSwitchToEmail}>Continue</button>

            </form>

            <span className="text-sm mt-8">
                <button onClick={onSwitchForm}><b>Voltar</b></button>
            </span>
            <p className="absolute bottom-16">Não tem uma conta? <button onClick={onSwitchSignup}><b>Cadastre-se</b></button></p>
        </div>

    )
}