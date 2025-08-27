import { useState } from 'react';
import ListaClientes from './ListaClientes';
import CompraCreditos from './CompraCreditos';

export default function PainelAnalista() {
  const [aba, setAba] = useState<'clientes' | 'creditos'>('clientes');

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl font-bold text-purple-700 text-center">Painel do Analista</h2>

      <div className="flex justify-center gap-6">
        <button
          onClick={() => setAba('clientes')}
          className={`px-4 py-2 rounded ${aba === 'clientes' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Clientes
        </button>
        <button
          onClick={() => setAba('creditos')}
          className={`px-4 py-2 rounded ${aba === 'creditos' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Créditos
        </button>
      </div>

      {aba === 'clientes' && <ListaClientes />}
      {aba === 'creditos' && <CompraCreditos />}
    </section>
  );
}