import { useState } from 'react';
import ResultadoTemperamento from './ResultadoTemperamento';

const perguntas = [
  { id: 1, texto: 'Você se sente energizado ao estar com outras pessoas?', dimensao: 'Energia' },
  { id: 2, texto: 'Você costuma agir com base em princípios éticos?', dimensao: 'Moral' },
  { id: 3, texto: 'Você aproveita bem o seu tempo durante o dia?', dimensao: 'Aproveitamento' },
  { id: 4, texto: 'Você se adapta facilmente a novas situações?', dimensao: 'Amplitude' },
  { id: 5, texto: 'As pessoas confiam em você para cumprir o que promete?', dimensao: 'Confiabilidade' },
  // Adicione mais perguntas aqui...
];

export default function TesteTemperamento() {
  const [respostas, setRespostas] = useState<{ [key: number]: number }>({});
  const [resultado, setResultado] = useState<{ [key: string]: number } | null>(null);

  const handleChange = (id: number, valor: number) => {
    setRespostas({ ...respostas, [id]: valor });
  };

  const calcularResultado = () => {
    const dimensoes: { [key: string]: number } = {};
    perguntas.forEach((p) => {
      const valor = respostas[p.id] || 0;
      dimensoes[p.dimensao] = (dimensoes[p.dimensao] || 0) + valor;
    });

    setResultado(dimensoes);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {!resultado ? (
        <>
          <h2 className="text-3xl font-bold text-purple-700 text-center">Teste de Temperamentos</h2>
          <p className="text-center text-gray-600">Responda com sinceridade. Use a escala de 1 (Discordo totalmente) a 5 (Concordo totalmente).</p>

          <form className="space-y-6">
            {perguntas.map((p) => (
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
        <ResultadoTemperamento resultado={resultado} />
      )}
    </section>
  );
}