import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import RelatorioCliente from './RelatorioCliente';

export default function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(collection(db, 'clientes'), where('analistaId', '==', user.uid));
      const snapshot = await getDocs(q);
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setClientes(lista);
    };

    fetchClientes();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h3 className="text-xl font-semibold text-purple-700">Histórico de Clientes</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Nome</th>
            <th>Data</th>
            <th>Perfil</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c, i) => (
            <tr key={i} className="border-b">
              <td className="py-2">{c.nome}</td>
              <td>{c.criadoEm?.toDate().toLocaleDateString()}</td>
              <td>{c.perfilDISC}</td>
              <td>
                <button
                  onClick={() => setSelecionado(c)}
                  className="text-purple-600 underline"
                >
                  Ver relatório
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selecionado && <RelatorioCliente dados={selecionado} />}
    </div>
  );
}