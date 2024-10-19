import BarChart from "./activity";
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import image from '../../assets/image.png'
import username from '../../assets/username.png'

export default function Dashhome() {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
        <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-row space-x-12 overflow-y-auto">
            <div className="flex flex-col space-y-12">
                <div className="bg-white shadow rounded-lg p-4 w-[600px] h-[300px]">
                    <BarChart />
                </div>
                <div className="bg-white shadow rounded-lg p-4 w-[500px]">
                    <span className="mb-12 font-bold">Empresas</span>
                    <div className="flex flex-row mt-4 space-x-8 justify-center">
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[160px] flex flex-col items-center justify-center">
                            <img src={image} className="w-10 h-10" />
                            <p>Nome</p>
                            <p className="font-bold text-xl">R: xx</p>
                        </div>
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[160px] flex flex-col items-center justify-center">
                            <img src={image} className="w-10 h-10" />
                            <p>Nome</p>
                            <p className="font-bold text-xl">R: xx</p>
                        </div>
                        <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[160px] flex flex-col items-center justify-center">
                            <img src={image} className="w-10 h-10" />
                            <p>Nome</p>
                            <p className="font-bold text-xl">R: xx</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="flex flex-col space-y-12">
                <div className="bg-white shadow rounded-lg p-4 w-[350px] h-[220px]">
                    <Calendar
                        onChange={(value) => setDate(value as Date)}
                        value={date}
                        className="react-calendar"
                    />
                </div>
                <div className="bg-white shadow rounded-lg p-4 w-[350px] h-[220px] space-y-3 flex flex-col">
                    <div className="border-b pb-4">
                        <span className="font-bold">Messages</span>
                    </div>
                    <div className="flex flex-row items-center mr-auto w-[100%]">
                        <div className="">
                            <img src={username} className="border rounded-full w-10 h-10 mr-3" />
                        </div>
                        <div>
                            <p>Nome</p>
                            <p>mensagem mensagem</p>
                        </div>
                        <span className="ml-auto">00:00</span>
                    </div>

                </div>
            </div>



        </div>
    )
}