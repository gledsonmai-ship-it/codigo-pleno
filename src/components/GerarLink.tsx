import { useState } from 'react';

export default function GerarLink() {
  const [nome, setNome] = useState('');
  const [linkGerado, setLinkGerado] = useState('');

  const gerarLink = () => {
    const slug = nome.trim().toLowerCase().replace(/\s+/g, '-');
    const link = `${window.location.origin}/teste/${slug}`;
    setLinkGerado(link);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h3 className="text-xl font-semibold text-purple-700">Gerar Link para Cliente</h3>
      <input
        type="text"
        placeholder="Nome do cliente"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <button
        onClick={gerarLink}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Gerar Link
      </button>

      {linkGerado && (
        <div className="mt-4">
          <p className="text-gray-700">Link gerado:</p>
          <a href={linkGerado} target="_blank" className="text-purple-600 underline">
            {linkGerado}
          </a>
        </div>
      )}
    </div>
  );
}