import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebaseConfig';

import Institucional from './components/Institucional';
import LoginAnalista from './components/LoginAnalista';
import PainelAnalista from './components/PainelAnalista';
import IntroducaoDescoberta from './components/IntroducaoDescoberta';
import DescobertaTemperamento from './components/DescobertaTemperamento';
import FinalizacaoDescoberta from './components/FinalizacaoDescoberta';
import RotaProtegida from './components/RotaProtegida';

function App() {
  const [usuario, setUsuario] = useState<User | null>(null);

  useEffect(() => {
    const escutar = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => escutar();
  }, []);

  return (
    <Router>
      <header style={{ background: 'var(--cor-primaria)', padding: '1rem' }}>
        <h1 style={{ color: 'white', margin: 0 }}>Código Pleno</h1>
        <nav style={{ marginTop: '0.5rem' }}>
          <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? 'var(--cor-destaque)' : 'white',
            marginRight: '1rem',
            textDecoration: 'none',
            fontWeight: 'bold'
          })}>Institucional</NavLink>
          <NavLink to="/login" style={({ isActive }) => ({
            color: isActive ? 'var(--cor-destaque)' : 'white',
            marginRight: '1rem',
            textDecoration: 'none',
            fontWeight: 'bold'
          })}>Login</NavLink>
          <NavLink to="/painel" style={({ isActive }) => ({
            color: isActive ? 'var(--cor-destaque)' : 'white',
            marginRight: '1rem',
            textDecoration: 'none',
            fontWeight: 'bold'
          })}>Painel</NavLink>
          <NavLink to="/descoberta/temperamento" style={({ isActive }) => ({
            color: isActive ? 'var(--cor-destaque)' : 'white',
            textDecoration: 'none',
            fontWeight: 'bold'
          })}>Descoberta</NavLink>
        </nav>
      </header>

      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Institucional />} />
          <Route path="/login" element={<LoginAnalista />} />
          <Route path="/painel" element={
            <RotaProtegida>
              <PainelAnalista />
            </RotaProtegida>
          } />
          <Route path="/descoberta/temperamento" element={<IntroducaoDescoberta />} />
          <Route path="/descoberta/temperamento/iniciar" element={<DescobertaTemperamento />} />
          <Route path="/descoberta/temperamento/final" element={<FinalizacaoDescoberta />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;