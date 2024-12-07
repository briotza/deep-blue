import reports from '../../assets/reports.png'
import confiabilidade from '../../assets/confiabilidade.png'
import visualizacao from '../../assets/visualizacao.png'
import hands from '../../assets/hands.png'
import lady from '../../assets/lady.png'
import vitor from '../../assets/vitor.png'
import ciano from '../../assets/ciano.png'
import hillary from '../../assets/hillary.png'
import lincoln from '../../assets/lincoln.png'
import logo from '../../assets/deep-blue-logo.png'
import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
        <div className="bg-[#3000B6] text-white min-h-screen font-inter p-0 m-0">
            <div className='bg-gradient-to-b from-[#150050] to-[#452D8A]'>
                <header className="flex justify-between items-center p-4">
                    <div className='flex items-center'>
                        <img src={logo} alt="reports" className="h-14" />
                        <div className="text-3xl font-bold">Deep Blue</div>
                    </div>
                    <nav className="space-x-4 text-xl hidden md:block">
                        <Link to='/home'><a href="#" className="hover:underline">HOME</a></Link>
                        <a href="#" className="hover:underline">SOBRE NÓS</a>
                        <a href="#" className="hover:underline">CONTATO</a>
                    </nav>
                </header>


                <section className="flex md:flex-row flex-col items-center justify-center py-14 space-x-8">
                    <div className="text-left md:w-1/2 w-[90%]">
                        <h1 className="text-4xl font-bold mb-4 text-center">Vá além das análises</h1>
                        <p className="mb-8 text-2xl">
                            Oferecemos soluções seguras para a transmissão de dados, garantindo a eficiência que o setor de petróleo e gás exige.
                            Em um mundo onde a exploração de recursos naturais impacta diretamente o futuro, temos a tecnologia necessária para impulsionar
                            operações com responsabilidade e precisão.
                        </p>
                        <div className="flex justify-center space-x-8 mb-8">
                            <div className="text-center">
                                <img src={reports} alt="reports" className="mb-2" />
                            </div>
                            <div className="text-center">
                                <img src={confiabilidade} alt="confiabilidade" className="mb-2" />
                            </div>
                            <div className="text-center">
                                <img src={visualizacao} alt="visualizacao" className="mb-2" />
                            </div>
                        </div>
                        <div className="flex justify-center mb-8">
                            <Link to="/home" className="bg-purple-700 px-8 py-3 rounded text-xl hover:bg-purple-800 transition-colors">Faça o Login</Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center hidden md:block">
                        <img src={lady} alt="Lady" className="" />
                    </div>
                </section>

            </div>

            <section className="flex items-center justify-center text-center bg-gradient-to-br from-[#280590] to-[#5D39C5] py-16">
                <div className="flex md:flex-row flex-col items-center justify-center space-x-8">
                    <div className=" md:w-1/2 w-[90%] text-left">
                        <h2 className="text-4xl font-bold mb-4 text-center">SOBRE NÓS</h2>
                        <p className="mb-8 text-2xl">
                            Somos o DeepBlue, um grupo de quatro estudantes apaixonados por inovação. Desenvolvemos uma plataforma para transformar
                            a gestão de incidentes no setor petrolífero, unindo dados públicos e tecnologia preditiva. Nosso dashboard dinâmico oferece
                            insights estratégicos que fortalecem as práticas de ESG, promovendo segurança, sustentabilidade e redução de custos no setor.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <img src={hands} alt="hands" className="" />
                    </div>
                </div>
            </section>

            <section className="text-center bg-gradient-to-br from-[#522FB8] to-[#5D39C5] py-16">
                <h2 className="text-3xl font-bold mb-6">INTEGRANTES</h2>
                <div className="flex justify-center space-x-8 text-2xl md:flex-row flex-col items-center">
                    <div className="text-center md:mb-0 mb-8">
                        <img src={ciano} alt="Ciano" className="rounded-full mb-2" />
                        <p>Ciano</p>
                    </div>
                    <div className="text-center md:mb-0 mb-8">
                        <img src={hillary} alt="Hillary" className="rounded-full mb-2" />
                        <p>Hillary</p>
                    </div>
                    <div className="text-center md:mb-0 mb-8">
                        <img src={lincoln} alt="Lincoln" className="rounded-full mb-2" />
                        <p>Lincoln</p>
                    </div>
                    <div className="text-center md:mb-0 mb-8">
                        <img src={vitor} alt="Vitor" className="rounded-full mb-2" />
                        <p>Vitor</p>
                    </div>
                </div>
            </section>

            <footer className="text-center py-4 flex items-center justify-center text-xl">
                <p>Made by </p>
                <img src={logo} alt="logo" className="ml-2 h-8" />
                <p>Deep Blue.</p>
            </footer>
        </div>
    )
}
