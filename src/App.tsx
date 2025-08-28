import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

import Institucional from './components/Institucional';
import LoginAnalista from './components/LoginAnalista';
import PainelAnalista from './components/PainelAnalista';
import TesteTemperamento from './components/TesteTemperamento';
import TesteCodigoPleno from './components/TesteCodigoPleno';

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const escutar = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => escutar();
  }, []);

  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Institucional</Link>
        <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
        <Link to="/painel" style={{ marginRight: '1rem' }}>Painel</Link>
        <Link to="/teste/temperamento">Teste</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Institucional />} />
        <Route path="/login" element={<LoginAnalista />} />
        <Route path="/painel" element={usuario ? <PainelAnalista /> : <LoginAnalista />} />
        <Route path="/teste/:slug" element={
          <>
            <TesteTemperamento />
            <TesteCodigoPleno />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;