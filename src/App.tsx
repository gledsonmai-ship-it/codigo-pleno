import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import PainelAnalista from './components/PainelAnalista';
import LoginAnalista from './components/LoginAnalista';

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUsuario(user));
  }, []);

  return usuario ? <PainelAnalista /> : <LoginAnalista />;
}

export default App;