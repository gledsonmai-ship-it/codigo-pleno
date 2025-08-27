const planos = [
  { qtd: 10, preco: 'R$ 49,90' },
  { qtd: 25, preco: 'R$ 99,90' },
  { qtd: 50, preco: 'R$ 179,90' },
];

export default function CompraCreditos() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold text-purple-700 mb-4">Comprar Créditos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planos.map((p, i) => (
          <div key={i} className="border p-4 rounded-lg text-center space-y-2">
            <h4 className="text-lg font-bold">{p.qtd} Testes</h4>
            <p className="text-purple-600 font-semibold">{p.preco}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}