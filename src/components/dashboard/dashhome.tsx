import Ambiental from "./ambiental";
import Seguranca from "./seguranca"
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import image from '../../assets/image.png'
import username from '../../assets/username.png'
import Clima from "./clima";

export default function Dashhome() {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
        <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-row space-x-12 overflow-y-auto">
            <div className="flex flex-col space-y-12">
                <div className="bg-white shadow rounded-lg p-4 w-[600px] h-[300px]">
                    <Ambiental />
                </div>
                <div className="bg-white shadow rounded-lg p-4 w-[600px] h-[300px]">
                    <Seguranca />
                </div>
                <div className="bg-white shadow rounded-lg p-4 w-[500px]">
                    <span className="mb-12 font-bold">Notificações Recentes</span>
                    <div className="flex flex-row mt-4 space-x-8 justify-center">
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[160px] flex flex-col items-center justify-center">
                            <p className="font-bold text-xl">Título</p>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[160px] flex flex-col items-center justify-center">
                            <p className="font-bold text-xl">Título</p>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[160px] flex flex-col items-center justify-center">
                            <p className="font-bold text-xl">Título</p>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="flex flex-col space-y-12">
                <div className="bg-white shadow rounded-lg p-4 w-[350px] h-[220px]">
                    <Clima
                    />
                </div>
                <div className="bg-white shadow rounded-lg p-4 w-[350px] h-[220px] space-y-3 flex flex-col">
                    <div className="border-b pb-4">
                        <span className="font-bold">Custos Recentes</span>
                    </div>
                    <div className="flex flex-row items-center mr-auto w-[100%]">

                        <div>
                            <p>Título</p>
                            <p>resumo resumo</p>
                        </div>
                        <span className="ml-auto">00:00</span>
                    </div>

                </div>
                <div className="bg-white shadow rounded-lg p-4 w-[500px]">
                    <span className="mb-12 font-bold">Indicadores de Risco</span><p className="text-sm">Última atualização 21-11-2024 16h14</p>
                    <div className="flex flex-row mt-4 space-x-8 justify-center">
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[120px] flex flex-col items-center">
                            <p className="font-bold text-xl">Ambiental</p>
                            <button className='flex flex-row items-center'><div className='bg-[#28aa24] rounded-full w-8 h-8 mt-4'></div></button>
                        </div>
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[120px] flex flex-col items-center">
                            <p className="font-bold text-xl">Segurança</p>
                            <button className='flex flex-row items-center'><div className='bg-[#d3c726] rounded-full w-8 h-8 mt-4'></div></button>
                        </div>
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[120px] flex flex-col items-center">
                            <p className="font-bold text-xl">Climático</p>
                            <button className='flex flex-row items-center'><div className='bg-[#d32626] rounded-full w-8 h-8 mt-4'></div></button>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}