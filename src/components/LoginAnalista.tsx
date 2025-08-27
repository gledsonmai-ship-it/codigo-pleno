import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginAnalista() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [erro, setErro] = useState('');

  const handleSubmit = async () => {
    setErro('');
    try {
      if (modo === 'login') {
        await signInWithEmailAndPassword(auth, email, senha);
      } else {
        await createUserWithEmailAndPassword(auth, email, senha);
      }
      window.location.href = '/painel';
    } catch (e: any) {
      setErro(e.message);
    }
  };

  return (
    <section className="max-w-md mx-auto px-6 py-12 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700 text-center">
        {modo === 'login' ? 'Login do Analista' : 'Cadastro de Analista'}
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />

      {erro && <p className="text-red-600 text-sm">{erro}</p>}

      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
      >
        {modo === 'login' ? 'Entrar' : 'Cadastrar'}
      </button>

      <p className="text-center text-sm text-gray-600">
        {modo === 'login' ? 'Não tem conta?' : 'Já tem conta?'}{' '}
        <button onClick={() => setModo(modo === 'login' ? 'cadastro' : 'login')} className="text-purple-600 underline">
          {modo === 'login' ? 'Cadastre-se' : 'Faça login'}
        </button>
      </p>
    </section>
  );
}