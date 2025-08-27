import { useState } from 'react';
import ProgressoBar from '../components/ProgressoBar';
import SemanaCard from '../components/SemanaCard';

const trilha = {
  nome: 'Trilha Influência',
  semanas: [
    {
      titulo: 'Semana 1 — Foco e Finalização',
      tarefas: [
        'Escolha uma tarefa pendente e conclua sem interrupções.',
        'Evite redes sociais por 2 horas por dia.',
        'Assista: “Como manter o foco” — vídeo de Pedro Calabrez',
      ],
    },
    {
      titulo: 'Semana 2 — Comunicação com Propósito',
      tarefas: [
        'Escreva uma mensagem de agradecimento.',
        'Evite falar por impulso — pratique pausa.',
        'Leitura: “Como Fazer Amigos e Influenciar Pessoas” — cap. 2',
      ],
    },
    {
      titulo: 'Semana 3 — Disciplina Emocional',
      tarefas: [
        'Identifique 3 gatilhos emocionais.',
        'Crie uma rotina matinal com 3 hábitos.',
        'Assista: “A arte da disciplina” — TEDx Talk',
      ],
    },
  ],
};

export default function ClienteTrilha() {
  const [concluidas, setConcluidas] = useState<number[]>([]);

  const progresso = Math.round((concluidas.length / (trilha.semanas.length * 3)) * 100);

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">{trilha.nome}</h2>
      <ProgressoBar progresso={progresso} />

      {trilha.semanas.map((semana, index) => (
        <SemanaCard
          key={index}
          semana={semana}
          semanaIndex={index}
          concluidas={concluidas}
          setConcluidas={setConcluidas}
        />
      ))}
    </section>
  );
}