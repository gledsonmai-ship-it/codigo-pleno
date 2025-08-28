import { useEffect, useState } from 'react';
import { buscarDescobertas } from '../services/firebaseService';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const cores = {
  Calmo: '#6C63FF',
  Impulsivo: '#FF6584',
  Analítico: '#00C49F',
};

const PainelAnalista = () => {
  const [descobertas, setDescobertas] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const carregar = async () => {
      const dados = await buscarDescobertas();
      setDescobertas(dados);
    };
    carregar();
  }, []);

  const filtradas = descobertas.filter((d) =>
    d.nome?.toLowerCase().includes(filtro.toLowerCase())
  );

  const contagem = filtradas.reduce((acc, d) => {
    acc[d.perfil] = (acc[d.perfil] || 0) + 1;
    return acc;
  }, {});

  const dadosGrafico = Object.entries(contagem).map(([perfil, valor]) => ({
    name: perfil,
    value: valor,
  }));

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

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Nome</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Perfil</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Data</th>
          </tr>
        </thead>
        <tbody>
          {filtradas.map((d, index) => (
            <tr key={index}>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{d.nome}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{d.perfil}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{d.data}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Distribuição de Perfis</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dadosGrafico}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {dadosGrafico.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={cores[entry.name] || '#8884d8'} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PainelAnalista;