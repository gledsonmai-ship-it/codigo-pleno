export default function TrilhaFleumatico() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Trilha de Desenvolvimento — Temperamento Fleumático</h2>
      <p className="text-gray-700">
        Você possui um perfil calmo, conciliador e observador. Essa trilha vai te ajudar a desenvolver iniciativa, expressão emocional e tomada de decisão sem perder sua serenidade natural.
      </p>

      <div className="space-y-4">
        {/* Semana 1 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 1 — Iniciativa com Leveza</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Escolha uma tarefa que você costuma adiar e execute hoje.</li>
            <li>Proponha uma ideia em uma reunião ou conversa de grupo.</li>
            <li>Assista: “Como sair da zona de conforto” — vídeo de Murilo Gun</li>
          </ul>
        </div>

        {/* Semana 2 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 2 — Expressão Emocional</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Compartilhe com alguém como você se sentiu em uma situação recente.</li>
            <li>Escreva sobre uma emoção que você costuma esconder.</li>
            <li>Leitura: “Inteligência Emocional” — capítulo sobre expressão afetiva</li>
          </ul>
        </div>

        {/* Semana 3 */}
        <div className="bg-purple-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-purple-600">Semana 3 — Decisão com Clareza</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Tome uma decisão importante sem depender da opinião de terceiros.</li>
            <li>Liste os prós e contras e confie na sua escolha.</li>
            <li>Assista: “A arte de decidir” — TEDx Talk de Ruth Chang</li>
          </ul>
        </div>
      </div>
    </section>
  );
}