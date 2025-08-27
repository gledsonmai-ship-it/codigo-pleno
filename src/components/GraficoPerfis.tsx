import { Pie } from 'react-chartjs-2';

export default function GraficoPerfis() {
  const data = {
    labels: ['Dominância', 'Influência', 'Estabilidade', 'Conformidade'],
    datasets: [
      {
        data: [12, 18, 9, 6],
        backgroundColor: ['#7C3AED', '#F59E0B', '#10B981', '#4F46E5'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-purple-600 mb-4">Distribuição de Perfis DISC</h3>
      <Pie data={data} />
    </div>
  );
}