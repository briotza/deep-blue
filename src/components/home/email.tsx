export default function Email() {
    return(
        <div className="bg-white w-[50%] h-[100%] flex items-center justify-center font-inter flex-col">
            <form className="space-y-4 w-[64%]">
                <span className="text-2xl font-bold">Verify your Email</span>
                <p>Thank you, check your email for instructions to reset your password</p>

                <button className="w-[100%] bg-[#150050] text-white rounded-xl border h-12">Skip Now</button>

            </form>

            <span className="text-sm mt-8">
            Don’t receive an email? <button><b>Resend</b></button>
            </span>
           
        </div>
        
    )
}