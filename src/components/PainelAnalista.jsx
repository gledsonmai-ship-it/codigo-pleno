import { useEffect, useState } from 'react';

const PainelAnalista = () => {
  const [descobertas, setDescobertas] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    // Simulação de dados — depois podemos conectar com Firebase
    const dadosSimulados = [
      { nome: 'Elias Cruz', perfil: 'Calmo', data: '2025-08-27' },
      { nome: 'Elaine Ravacci', perfil: 'Analítico', data: '2025-08-26' },
      { nome: 'Sandra Maia', perfil: 'Impulsivo', data: '2025-08-25' },
    ];
    setDescobertas(dadosSimulados);
  }, []);

  const descobertasFiltradas = descobertas.filter((d) =>
    d.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Painel do Analista</h2>
      <p>Visualize os perfis emocionais das pessoas que viveram a descoberta.</p>

      <input
        type="text"
        placeholder="Buscar por nome..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Nome</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Perfil</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Data</th>
          </tr>
        </thead>
        <tbody>
          {descobertasFiltradas.map((d, index) => (
            <tr key={index}>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{d.nome}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{d.perfil}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{d.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PainelAnalista;