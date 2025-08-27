// src/utils/salvarResultado.ts
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export async function salvarResultadoCliente(dados: {
  nome: string;
  temperamento: string;
  secundario: string;
  perfilDISC: string;
  pontuacoes: any;
  pdi: string[];
  analistaId: string;
}) {
  const docRef = await addDoc(collection(db, 'clientes'), {
    ...dados,
    criadoEm: Timestamp.now(),
  });
  return docRef.id;
}