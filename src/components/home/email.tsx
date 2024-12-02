export default function Email() {
    return(
        <div className="bg-white md:w-[50%] w-[100%] h-[100%] flex items-center justify-center font-inter flex-col">
            <form className="space-y-4 w-[64%]">
                <span className="text-2xl font-bold">Verifique seu e-mail</span>
                <p>Obrigado, verifique seu e-mail para obter instruções para redefinir sua senha</p>

                <button className="w-[100%] bg-[#150050] text-white rounded-xl border h-12">Pular</button>

            </form>

            <span className="text-sm mt-8">
            Não recebeu o e-mail? <button><b>Enviar novamente</b></button>
            </span>
           
        </div>
        
    )
}