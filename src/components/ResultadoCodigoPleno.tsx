import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ResultadoCodigoPleno({ resultado }: { resultado: { [key: string]: number } }) {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Relatório Código Pleno',
  });

  const labels = Object.keys(resultado);
  const dataValues = Object.values(resultado);
  const dominante = labels[dataValues.indexOf(Math.max(...dataValues))];

  const interpretacao = {
    Dominância: 'liderança, decisão rápida e foco em resultados.',
    Influência: 'comunicação, entusiasmo e capacidade de engajar pessoas.',
    Estabilidade: 'consistência, paciência e preferência por ambientes previsíveis.',
    Conformidade: 'atenção aos detalhes, precisão e respeito às regras.',
  };

  const pdi = {
    Dominância: [
      'Pratique escuta ativa antes de tomar decisões rápidas.',
      'Delegue com clareza e acompanhe com empatia.',
      'Evite sobrecarga por excesso de controle — confie nos processos.',
      'Leitura recomendada: “O Monge e o Executivo”.',
    ],
    Influência: [
      'Desenvolva foco e disciplina para concluir projetos.',
      'Evite dispersão por excesso de estímulo social.',
      'Use sua comunicação para inspirar com propósito, não só entusiasmo.',
      'Leitura recomendada: “Como Fazer Amigos e Influenciar Pessoas”.',
    ],
    Estabilidade: [
      'Aprenda a lidar com mudanças sem perder sua essência.',
      'Evite procrastinar decisões importantes por medo de conflito.',
      'Fortaleça sua autoconfiança em ambientes dinâmicos.',
      'Leitura recomendada: “Mindset” de Carol Dweck.',
    ],
    Conformidade: [
      'Pratique flexibilidade diante de imprevistos.',
      'Evite paralisia por perfeccionismo — entregue com consistência.',
      'Desenvolva visão estratégica além dos detalhes.',
      'Leitura recomendada: “Essencialismo” de Greg McKeown.',
    ],
  };

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

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <div className="text-right">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Exportar Relatório (PDF)
        </button>
      </div>

      <div ref={componentRef}>
        <Bar data={data} options={options} />

        <div className="bg-white p-6 rounded-xl shadow space-y-4 text-gray-700 text-lg mt-8">
          <p><strong>Perfil dominante:</strong> {dominante}</p>
          <p>
            Seu resultado mostra uma predominância em <strong>{dominante}</strong>, o que indica traços como{" "}
            <em>{interpretacao[dominante]}</em>
          </p>
          <p>
            Esse perfil, combinado com seu temperamento, forma o seu <strong>Código Pleno</strong> — uma identidade única que pode ser usada para tomar decisões mais conscientes, melhorar relacionamentos e viver com clareza e propósito.
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl space-y-4 mt-6">
          <h4 className="text-xl font-semibold text-purple-700">Plano de Desenvolvimento Individual (PDI)</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {pdi[dominante].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}