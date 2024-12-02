import React, { useState, useEffect } from 'react';
import Ambiental from "./ambiental";
import Seguranca from "./seguranca";
import Clima from "./clima";
import { incidentes } from "../data/index";
import { GraficoCustos } from '../relatorios/grafico';
import { noticias } from '../data/noticias';

// Função para calcular a quantidade de incidentes nos últimos 30 dias
const incidentesRecentes = (tipo: string, incidentes: any[]) => {
  const hoje = new Date();
  const trintaDiasAtras = new Date();
  trintaDiasAtras.setDate(hoje.getDate() - 30);

  // Filtra os incidentes do tipo e dentro do período de 30 dias
  return incidentes.filter((incidente) => {
    const dataIncidente = new Date(incidente.data);
    return incidente.tipo === tipo && dataIncidente >= trintaDiasAtras;
  });
};

// Função para determinar a cor do indicador com base no número de incidentes
const getCorIndicador = (quantidade: number) => {
  if (quantidade <= 2) return 'bg-[#28aa24]';
  if (quantidade <= 5) return 'bg-[#d3c726]';
  return 'bg-[#d32626]';
};

// Função para calcular os 3 últimos incidentes
const ultimosIncidentes = (incidentes: any[]) => {
  return incidentes
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .slice(0, 3);
};

// Função para calcular os 3 últimos custos
const ultimosCustos = (incidentes: any[]) => {
  return incidentes
    .filter((incidente) => incidente.resolucao?.custo_total != null)
    .sort(
      (a, b) =>
        new Date(b.resolucao.data).getTime() -
        new Date(a.resolucao.data).getTime()
    )
    .slice(0, 3);
};

const ultimasNoticias = noticias
  .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
  .slice(0, 3);



export default function Dashhome() {
  const [lastUpdate, setLastUpdate] = useState<string>(new Date().toLocaleString());

  // Atualiza a data e hora a cada 30 minutos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setLastUpdate(new Date().toLocaleString());
    }, 30 * 60 * 1000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(intervalo);
  }, []);

  // Obter os últimos 3 custos
  const custosRecentes = ultimosCustos(incidentes);

  // Filtrando incidentes por tipo e calculando a quantidade de incidentes nos últimos 30 dias
  const incidentesSeguranca = incidentesRecentes('Segurança', incidentes);
  const incidentesAmbiental = incidentesRecentes('Ambiental', incidentes);


  // Calculando as cores dos indicadores
  const corSeguranca = getCorIndicador(incidentesSeguranca.length);
  const corAmbiental = getCorIndicador(incidentesAmbiental.length);
  const corClima = 'bg-[#28aa24]';

  // Pega os últimos 3 incidentes
  const incidentesRecentesNoti = ultimosIncidentes(incidentes);

  const incidentesComResolucao = incidentes.filter((incidente) => incidente.resolucao);

  // Preparar os dados para o gráfico
  const custosPorMes = Array(12).fill(0);

  incidentesComResolucao.forEach((incidente) => {
    const dataResolucao = incidente.resolucao?.data;
    const custoTotal = incidente.resolucao?.custo_total;

    if (dataResolucao && custoTotal != null) {
      const mes = new Date(dataResolucao).getMonth();
      custosPorMes[mes] += custoTotal;
    }
  });

  return (
    <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-row space-x-12 overflow-y-auto">
      <div className="flex flex-col space-y-12">
        <div className="bg-white shadow rounded-lg p-4 w-[600px] h-[300px]">
          <Ambiental incidentes={incidentes} />
        </div>
        <div className="bg-white shadow rounded-lg p-4 w-[600px] h-[300px]">
          <Seguranca incidentes={incidentes} />
        </div>
        <div className="bg-white shadow rounded-lg p-6 w-[600px]">
          <h2 className="text-lg font-bold mb-4">Incidentes Recentes</h2>
          <div className="grid grid-cols-3 gap-4">
            {incidentesRecentesNoti.map((incidente) => (
              <div
                key={incidente.id}
                className="bg-[#F1F5F9] shadow rounded-lg p-4 flex flex-col items-center justify-center text-center"
              >
                <p className="text-sm text-gray-500 mb-2">{new Date(incidente.data).toLocaleDateString()}</p>
                <p className="font-semibold text-lg text-gray-800">{incidente.titulo}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="flex flex-col space-y-12">
        <div className="bg-white shadow rounded-lg p-4 w-[350px] h-[220px]">
          <Clima />
        </div>
        <div className="bg-white shadow rounded-lg p-4 w-[350px] h-[220px] space-y-3 flex flex-col">
          <div className="border-b pb-4">
            <span className="font-bold">Custos Recentes</span>
          </div>
          <div className="space-y-2">
            {custosRecentes.map((incidente, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-sm"
              >
                <p className="font-bold">{incidente.titulo}</p>
                <p>R$ {incidente.resolucao.custo_total.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 w-[500px]">
          <span className="mb-12 font-bold">Indicadores de Risco</span>
          <p className="text-sm">Última atualização {lastUpdate}</p>
          <div className="flex flex-row mt-4 space-x-8 justify-center">
            <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[120px] flex flex-col items-center">
              <p className="font-bold text-xl">Ambiental</p>
              <button className='flex flex-row items-center'>
                <div className={`${corAmbiental} rounded-full w-8 h-8 mt-4`}></div>
              </button>
            </div>
            <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[120px] flex flex-col items-center">
              <p className="font-bold text-xl">Segurança</p>
              <button className='flex flex-row items-center'>
                <div className={`${corSeguranca} rounded-full w-8 h-8 mt-4`}></div>
              </button>
            </div>
            <div className="bg-[#E2E8F0] shadow rounded-lg p-4 w-[120px] h-[120px] flex flex-col items-center">
              <p className="font-bold text-xl">Climático</p>
              <button className='flex flex-row items-center'>
                <div className={`${corClima} rounded-full w-8 h-8 mt-4`}></div>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 w-[500px] h-[300px]">
          <GraficoCustos custosPorMes={custosPorMes} />
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6 w-[600px]">
        <h2 className="text-lg font-bold mb-4">Notificações</h2>
        <div className="space-y-4">
          {ultimasNoticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-[#F1F5F9] shadow rounded-lg p-4"
            >
              <p className="text-sm text-gray-500 mb-2">{new Date(noticia.data).toLocaleDateString()}</p>
              <h3 className="font-semibold text-lg text-gray-800">{noticia.titulo}</h3>
              <p className="text-sm text-gray-600">{noticia.descricao}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
