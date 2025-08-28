import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { app } from '../firebaseConfig';

const db = getFirestore(app);

export const salvarDescoberta = async (dados: {
  nome: string;
  perfil: string;
  data: string;
}) => {
  try {
    await addDoc(collection(db, 'descobertas'), dados);
    console.log('Descoberta salva com sucesso!');
  } catch (erro) {
    console.error('Erro ao salvar descoberta:', erro);
  }
};

export const buscarDescobertas = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'descobertas'));
    const lista = snapshot.docs.map((doc) => doc.data());
    return lista;
  } catch (erro) {
    console.error('Erro ao buscar descobertas:', erro);
    return [];
  }
};