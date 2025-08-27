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

export default function ResultadoCodigoPleno({ resultado }: { resultado: { [key: string]: number } }) {
  const labels = Object.keys(resultado);
  const dataValues = Object.values(resultado);

  const data = {
    labels,
    datasets: [
      {
        label: 'Perfil Comportamental',
        data: dataValues,
        backgroundColor: [
          '#7C3AED', // Dominância
          '#4F46E5', // Influência
          '#10B981', // Estabilidade
          '#F59E0B', // Conformidade
        ],
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
        text: 'Seu Perfil Comportamental',
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

  const dominante = labels[dataValues.indexOf(Math.max(...dataValues))];

  const interpretacao: { [key: string]: string } = {
    Dominância: 'liderança, decisão rápida e foco em resultados.',
    Influência: 'comunicação, entusiasmo e capacidade de engajar pessoas.',
    Estabilidade: 'consistência, paciência e preferência por ambientes previsíveis.',
    Conformidade: 'atenção aos detalhes, precisão e respeito às regras.',
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <Bar data={data} options={options} />

      <div className="bg-white p-6 rounded-xl shadow space-y-4 text-gray-700 text-lg">
        <p><strong>Perfil dominante:</strong> {dominante}</p>
        <p>
          Seu resultado mostra uma predominância em <strong>{dominante}</strong>, o que indica traços como{" "}
          <em>{interpretacao[dominante]}</em>
        </p>
        <p>
          Esse perfil, combinado com seu temperamento, forma o seu <strong>Código Pleno</strong> — uma identidade única que pode ser usada para tomar decisões mais conscientes, melhorar relacionamentos e viver com clareza e propósito.
        </p>
      </div>
    </section>
  );
}
{/* PDI - Plano de Desenvolvimento Individual */}
<div className="mt-8 bg-purple-50 p-6 rounded-xl space-y-4">
  <h4 className="text-xl font-semibold text-purple-700">Plano de Desenvolvimento Individual (PDI)</h4>
  {dominante === 'Dominância' && (
    <ul className="list-disc pl-5 text-gray-700 space-y-2">
      <li>Pratique escuta ativa antes de tomar decisões rápidas.</li>
      <li>Delegue com clareza e acompanhe com empatia.</li>
      <li>Evite sobrecarga por excesso de controle — confie nos processos.</li>
      <li>Leitura recomendada: “O Monge e o Executivo”</li>
    </ul>
  )}
  {dominante === 'Influência' && (
    <ul className="list-disc pl-5 text-gray-700 space-y-2">
      <li>Desenvolva foco e disciplina para concluir projetos.</li>
      <li>Evite dispersão por excesso de estímulo social.</li>
      <li>Use sua comunicação para inspirar com propósito, não só entusiasmo.</li>
      <li>Leitura recomendada: “Como Fazer Amigos e Influenciar Pessoas”</li>
    </ul>
  )}
  {dominante === 'Estabilidade' && (
    <ul className="list-disc pl-5 text-gray-700 space-y-2">
      <li>Aprenda a lidar com mudanças sem perder sua essência.</li>
      <li>Evite procrastinar decisões importantes por medo de conflito.</li>
      <li>Fortaleça sua autoconfiança em ambientes dinâmicos.</li>
      <li>Leitura recomendada: “Mindset” de Carol Dweck</li>
    </ul>
  )}
  {dominante === 'Conformidade' && (
    <ul className="list-disc pl-5 text-gray-700 space-y-2">
      <li>Pratique flexibilidade diante de imprevistos.</li>
      <li>Evite paralisia por perfeccionismo — entregue com consistência.</li>
      <li>Desenvolva visão estratégica além dos detalhes.</li>
      <li>Leitura recomendada: “Essencialismo” de Greg McKeown</li>
    </ul>
  )}
</div>