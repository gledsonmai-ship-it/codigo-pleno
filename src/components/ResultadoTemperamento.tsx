import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function ResultadoTemperamento({ resultado }: { resultado: { [key: string]: number } }) {
  const labels = Object.keys(resultado);
  const dataValues = Object.values(resultado);

  const data = {
    labels,
    datasets: [
      {
        label: 'Seu Perfil de Temperamento',
        data: dataValues,
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        borderColor: 'rgba(139, 92, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(139, 92, 246, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 40,
        ticks: { stepSize: 10 },
      },
    },
  };

  // Identificar temperamento dominante
  const dominante = labels[dataValues.indexOf(Math.max(...dataValues))];
  const secundario = labels[dataValues.indexOf([...dataValues].sort((a, b) => b - a)[1])];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl font-bold text-purple-700 text-center">Seu Relatório de Temperamento</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <Radar data={data} options={options} />

        <div className="text-lg text-gray-700 space-y-4">
          <p><strong>Temperamento dominante:</strong> {dominante}</p>
          <p><strong>Temperamento secundário:</strong> {secundario}</p>

          <p>
            Seu perfil revela uma predominância na dimensão <strong>{dominante}</strong>, o que indica traços como{" "}
            <em>energia elevada, iniciativa, ou intensidade emocional</em> (dependendo da dimensão).
            O temperamento secundário, <strong>{secundario}</strong>, complementa sua forma de pensar e agir.
          </p>

          <p>
            Essa combinação sugere que você possui características únicas que podem ser canalizadas para decisões mais conscientes,
            relacionamentos mais saudáveis e uma vida com mais clareza e propósito.
          </p>
        </div>
      </div>
    </section>
  );
}