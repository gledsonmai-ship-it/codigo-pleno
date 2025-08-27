export default function TrilhaMelancolico() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Trilha de Desenvolvimento — Temperamento Melancólico</h2>
      <p className="text-gray-700">
        Você possui um perfil profundo, sensível e analítico. Essa trilha vai te ajudar a desenvolver leveza, autoconfiança e expressão emocional sem perder sua capacidade de reflexão e excelência.
      </p>

      <div className="space-y-4">
        {/* Semana 1 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 1 — Leveza na Jornada</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Escolha uma atividade prazerosa e faça sem cobrança de resultado.</li>
            <li>Evite revisar ou corrigir — apenas viva a experiência.</li>
            <li>Assista: “A leveza do ser” — vídeo de Mario Sergio Cortella</li>
          </ul>
        </div>

        {/* Semana 2 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 2 — Autoconfiança e Valor Pessoal</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Liste 5 qualidades suas e compartilhe com alguém de confiança.</li>
            <li>Evite autocrítica por 24h — pratique afirmações positivas.</li>
            <li>Leitura: “O poder da autoestima” — capítulo do livro “Você é Insubstituível”</li>
          </ul>
        </div>

        {/* Semana 3 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 3 — Expressão Emocional com Segurança</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Escreva sobre uma emoção que você costuma esconder.</li>
            <li>Compartilhe com alguém como você se sentiu em uma situação marcante.</li>
            <li>Assista: “A coragem de ser vulnerável” — TED Talk de Brené Brown</li>
          </ul>
        </div>
      </div>
    </section>
  );
}