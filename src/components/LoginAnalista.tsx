import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const LoginAnalista = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const fazerLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/painel');
    } catch (erro) {
      console.error('Erro ao fazer login:', erro);
    }
  };

  return (
    <div>
      <h2>Login do Analista</h2>
      <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={fazerLogin}>Entrar</button>
    </div>
  );
};

export default LoginAnalista;