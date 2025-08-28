import { getDocs, collection } from 'firebase/firestore';

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