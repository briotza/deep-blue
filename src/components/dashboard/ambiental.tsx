import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Acidente } from '../../types/incidentes.types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Ambiental: React.FC<{ incidentes: Acidente[] }> = ({ incidentes }) => {

  const incidentesAmbientais = incidentes.filter((incidente) => incidente.tipo === 'Ambiental');


  const calcularIncidentesPorMes = (dados: Acidente[]) => {
    const meses = Array(12).fill(0); 
    dados.forEach((incidente) => {
      const mes = new Date(incidente.data).getMonth(); 
      meses[mes] += 1;
    });
    return meses;
  };

  const dadosPorMes = calcularIncidentesPorMes(incidentesAmbientais);

  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Incidentes Ambientais",
        data: dadosPorMes,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Incidentes Ambientais por Mês",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Ambiental;
