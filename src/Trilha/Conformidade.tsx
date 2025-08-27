export default function TrilhaConformidade() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Trilha de Desenvolvimento — Perfil Conformidade</h2>
      <p className="text-gray-700">
        Seu perfil mostra precisão, organização e busca por excelência. Essa trilha vai te ajudar a desenvolver flexibilidade emocional, coragem para errar e visão estratégica.
      </p>

      <div className="space-y-4">
        {/* Semana 1 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 1 — Liberdade para Errar</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Liste 3 erros que te ensinaram algo importante.</li>
            <li>Execute uma tarefa sem buscar perfeição — apenas conclusão.</li>
            <li>Assista: “O valor do erro” — TEDx Talk</li>
          </ul>
        </div>

        {/* Semana 2 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 2 — Flexibilidade Estratégica</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Adapte uma rotina rígida e experimente uma nova abordagem.</li>
            <li>Converse com alguém que pensa diferente de você.</li>
            <li>Leitura: “Mindset” — capítulo sobre mentalidade de crescimento</li>
          </ul>
        </div>

        {/* Semana 3 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 3 — Visão Sistêmica</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Mapeie um processo que você executa e identifique pontos de melhoria.</li>
            <li>Compartilhe uma sugestão de melhoria com sua equipe ou mentor.</li>
            <li>Assista: “Pensamento sistêmico” — vídeo de Flávio Augusto</li>
          </ul>
        </div>
      </div>
    </section>
  );
}