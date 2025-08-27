export default function TrilhaDominancia() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Trilha de Desenvolvimento — Perfil Dominância</h2>
      <p className="text-gray-700">
        Você possui traços de liderança, decisão rápida e foco em resultados. Essa trilha vai te ajudar a equilibrar sua força com empatia e visão estratégica.
      </p>

      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 1 — Escuta Ativa</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Pratique ouvir sem interromper em reuniões.</li>
            <li>Anote 3 aprendizados por dia vindos de outras pessoas.</li>
            <li>Assista: “O poder da escuta” — TED Talk</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 2 — Delegação Consciente</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Escolha uma tarefa que você costuma controlar e delegue com clareza.</li>
            <li>Peça feedback sobre sua comunicação.</li>
            <li>Leitura: “O Monge e o Executivo” — capítulo 3</li>
          </ul>
        </div>

        {/* Mais semanas... */}
      </div>
    </section>
  );
}