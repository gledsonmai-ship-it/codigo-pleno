export default function TrilhaColerico() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Trilha de Desenvolvimento — Temperamento Colérico</h2>
      <p className="text-gray-700">
        Você possui um perfil intenso, direto e orientado por resultados. Essa trilha vai te ajudar a desenvolver empatia, visão estratégica e equilíbrio emocional sem perder sua força natural.
      </p>

      <div className="space-y-4">
        {/* Semana 1 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 1 — Empatia na Liderança</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Pratique ouvir sem interromper em 3 conversas importantes.</li>
            <li>Reconheça publicamente o esforço de alguém da sua equipe.</li>
            <li>Assista: “Liderança com empatia” — vídeo de Simon Sinek</li>
          </ul>
        </div>

        {/* Semana 2 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 2 — Visão Estratégica</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Liste 3 decisões recentes e analise os impactos de longo prazo.</li>
            <li>Compartilhe uma ideia com alguém que pensa diferente de você.</li>
            <li>Leitura: “O Estratégico” — capítulo do livro “O Monge e o Executivo”</li>
          </ul>
        </div>

        {/* Semana 3 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 3 — Equilíbrio Emocional</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Identifique 3 gatilhos que te fazem reagir com intensidade.</li>
            <li>Pratique respiração consciente antes de tomar decisões importantes.</li>
            <li>Assista: “Inteligência Emocional na Prática” — vídeo de Daniel Goleman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}