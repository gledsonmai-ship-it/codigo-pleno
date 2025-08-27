import { salvarResultadoCliente } from '../utils/salvarResultado';
import { auth } from '../firebaseConfig';

const handleSalvar = async () => {
  const user = auth.currentUser;
  if (!user) return;

  await salvarResultadoCliente({
    nome: nomeCliente,
    temperamento: dominanteTemperamento,
    secundario: secundarioTemperamento,
    perfilDISC: dominanteDISC,
    pontuacoes: resultadoDISC,
    pdi: pdi[dominanteDISC],
    analistaId: user.uid,
  });
};