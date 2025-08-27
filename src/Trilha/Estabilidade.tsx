export default function TrilhaEstabilidade() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Trilha de Desenvolvimento — Perfil Estabilidade</h2>
      <p className="text-gray-700">
        Seu perfil mostra uma forte busca por equilíbrio, cooperação e previsibilidade. Essa trilha vai te ajudar a desenvolver flexibilidade emocional, tomada de decisão e presença ativa.
      </p>

      <div className="space-y-4">
        {/* Semana 1 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 1 — Flexibilidade Consciente</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Identifique 3 situações onde você evita mudanças.</li>
            <li>Experimente uma nova rotina ou ambiente por 3 dias.</li>
            <li>Assista: “O poder da adaptação” — TEDx Talk</li>
          </ul>
        </div>

        {/* Semana 2 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 2 — Assertividade com Empatia</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Pratique dizer “não” com respeito em pelo menos 2 situações.</li>
            <li>Escreva uma mensagem clara expressando sua opinião.</li>
            <li>Leitura: “Comunicação Não Violenta” — capítulo 4</li>
          </ul>
        </div>

        {/* Semana 3 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 3 — Presença e Protagonismo</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Participe ativamente de uma reunião ou grupo.</li>
            <li>Compartilhe uma ideia sua com alguém de confiança.</li>
            <li>Assista: “Como ser protagonista da sua vida” — vídeo de Rossandro Klinjey</li>
          </ul>
        </div>
      </div>
    </section>
  );
}