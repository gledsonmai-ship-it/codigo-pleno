import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

import LoginAnalista from './components/LoginAnalista';
import PainelAnalista from './components/PainelAnalista';
import Institucional from './components/Institucional';
import TesteTemperamento from './components/TesteTemperamento';
import TesteCodigoPleno from './components/TesteCodigoPleno';

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Página institucional pública */}
        <Route path="/" element={<Institucional />} />

        {/* Testes acessados via link individual */}
        <Route
          path="/teste/:slug"
          element={
            <>
              <TesteTemperamento />
              <TesteCodigoPleno />
            </>
          }
        />

        {/* Painel do analista protegido */}
        <Route
          path="/painel"
          element={usuario ? <PainelAnalista /> : <LoginAnalista />}
        />

        {/* Login direto (opcional) */}
        <Route path="/login" element={<LoginAnalista />} />
      </Routes>
    </Router>
  );
}

export default App;