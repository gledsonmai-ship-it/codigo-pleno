import { useState } from 'react';
import ResultadoCodigoPleno from './ResultadoCodigoPleno';

const perguntasDISC = [
  { id: 1, texto: 'Você gosta de assumir o controle em situações difíceis?', perfil: 'Dominância' },
  { id: 2, texto: 'Você se comunica com entusiasmo e facilidade?', perfil: 'Influência' },
  { id: 3, texto: 'Você prefere ambientes estáveis e previsíveis?', perfil: 'Estabilidade' },
  { id: 4, texto: 'Você é detalhista e segue regras com rigor?', perfil: 'Conformidade' },
  { id: 5, texto: 'Você toma decisões rápidas mesmo sob pressão?', perfil: 'Dominância' },
  { id: 6, texto: 'Você costuma motivar outras pessoas com suas ideias?', perfil: 'Influência' },
  { id: 7, texto: 'Você evita mudanças bruscas no seu dia a dia?', perfil: 'Estabilidade' },
  { id: 8, texto: 'Você revisa seu trabalho para garantir precisão?', perfil: 'Conformidade' },
];

export default function TesteCodigoPleno() {
  const [respostas, setRespostas] = useState<{ [key: number]: number }>({});
  const [resultado, setResultado] = useState<{ [key: string]: number } | null>(null);

  const handleChange = (id: number, valor: number) => {
    setRespostas({ ...respostas, [id]: valor });
  };

  const calcularResultado = () => {
    const perfis: { [key: string]: number } = {};
    perguntasDISC.forEach((p) => {
      const valor = respostas[p.id] || 0;
      perfis[p.perfil] = (perfis[p.perfil] || 0) + valor;
    });

    setResultado(perfis);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {!resultado ? (
        <>
          <h2 className="text-3xl font-bold text-purple-700 text-center">Teste Código Pleno — Perfil Comportamental</h2>
          <p className="text-center text-gray-600">
            Responda com sinceridade. Use a escala de 1 (Discordo totalmente) a 5 (Concordo totalmente).
          </p>

          <form className="space-y-6">
            {perguntasDISC.map((p) => (
              <div key={p.id} className="bg-purple-50 p-4 rounded-lg shadow">
                <label className="block font-medium text-gray-800 mb-2">{p.texto}</label>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((valor) => (
                    <label key={valor} className="flex items-center gap-1">
                      <input
                        type="radio"
                        name={`pergunta-${p.id}`}
                        value={valor}
                        checked={respostas[p.id] === valor}
                        onChange={() => handleChange(p.id, valor)}
                      />
                      {valor}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </form>

          <div className="text-center">
            <button
              onClick={calcularResultado}
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            >
              Ver Resultado
            </button>
          </div>
        </>
      ) : (
        <ResultadoCodigoPleno resultado={resultado} />
      )}
    </section>
  );
}