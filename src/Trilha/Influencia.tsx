import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function RelatorioCliente({ dados }: { dados: any }) {
  const ref = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: `Relatório - ${dados.nome}`,
  });

  const labels = Object.keys(dados.pontuacoes);
  const dataValues = Object.values(dados.pontuacoes);

  const data = {
    labels,
    datasets: [
      {
        label: 'Perfil Comportamental',
        data: dataValues,
        backgroundColor: ['#7C3AED', '#4F46E5', '#10B981', '#F59E0B'],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Perfil DISC',
        color: '#4B5563',
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 40,
        ticks: { stepSize: 10 },
      },
    },
  };

  const perfilDISC = dados.perfilDISC?.toLowerCase();

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow space-y-6">
      <div className="text-right">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Exportar PDF
        </button>
      </div>

      <div ref={ref}>
        <h3 className="text-2xl font-bold text-purple-700">{dados.nome}</h3>
        <p className="text-gray-600">Data: {dados.criadoEm?.toDate().toLocaleDateString()}</p>
        <p className="text-gray-700">
          Temperamento: <strong>{dados.temperamento}</strong> + <strong>{dados.secundario}</strong>
        </p>
        <p className="text-gray-700">
          Perfil DISC: <strong>{dados.perfilDISC}</strong>
        </p>

        <Bar data={data} options={options} />

        <div className="mt-6 bg-purple-50 p-4 rounded-xl space-y-2">
          <h4 className="text-xl font-semibold text-purple-700">
            Plano de Desenvolvimento Individual (PDI)
          </h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {dados.pdi.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {perfilDISC === 'influência' ? (
          <a
            href={`/trilha/influencia`}
            className="inline-block mt-6 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            🌟 Trilha Especial para Comunicadores — Acessar
          </a>
        ) : (
          <a
            href={`/trilha/${perfilDISC}`}
            className="inline-block mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Acessar Trilha de Desenvolvimento
          </a>
        )}
      </div>
    </div>
  );
}