import { getFirestore, collection, addDoc } from 'firebase/firestore';
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