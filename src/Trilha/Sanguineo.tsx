export default function TrilhaSanguineo() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Trilha de Desenvolvimento — Temperamento Sanguíneo</h2>
      <p className="text-gray-700">
        Você possui um perfil espontâneo, comunicativo e cheio de entusiasmo. Essa trilha vai te ajudar a desenvolver constância, escuta ativa e profundidade emocional sem perder sua essência vibrante.
      </p>

      <div className="space-y-4">
        {/* Semana 1 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 1 — Constância Criativa</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Escolha uma atividade e mantenha por 5 dias seguidos.</li>
            <li>Evite começar algo novo antes de concluir o que já iniciou.</li>
            <li>Assista: “Como manter a constância” — vídeo de Leandro Karnal</li>
          </ul>
        </div>

        {/* Semana 2 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 2 — Escuta Ativa e Presença</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Pratique ouvir sem interromper em 3 conversas importantes.</li>
            <li>Escreva o que aprendeu com cada escuta.</li>
            <li>Leitura: “A arte de ouvir” — capítulo do livro “Inteligência Emocional”</li>
          </ul>
        </div>

        {/* Semana 3 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 3 — Profundidade Emocional</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Identifique 3 emoções que você costuma evitar.</li>
            <li>Escreva sobre uma situação onde você se sentiu vulnerável.</li>
            <li>Assista: “O poder da vulnerabilidade” — TED Talk de Brené Brown</li>
          </ul>
        </div>
      </div>
    </section>
  );
}