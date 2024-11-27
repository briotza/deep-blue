import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface GraficoCustosProps {
  custosPorMes: number[];
}

export function GraficoCustos({ custosPorMes }: GraficoCustosProps) {
  const graficoDados = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "Custos Acumulados (R$)",
        data: custosPorMes,
        borderColor: "#2563EB",
        backgroundColor: "rgba(37, 99, 235, 0.5)",
        tension: 0.3,
      },
    ],
  };

  const graficoOpcoes = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Crescimento dos Custos ao Longo dos Meses",
      },
    },
  };

  return (
    <div className="bg-white p-6 border border-gray-300 rounded-md shadow-md">
      <Line data={graficoDados} options={graficoOpcoes} />
    </div>
  );
}
