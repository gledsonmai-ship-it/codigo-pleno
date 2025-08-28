import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebaseConfig";

import Institucional from "./components/Institucional";
import LoginAnalista from "./components/LoginAnalista";
import PainelAnalista from "./components/PainelAnalista";
import IntroducaoDescoberta from "./components/IntroducaoDescoberta";
import DescobertaTemperamento from "./components/DescobertaTemperamento";
import FinalizacaoDescoberta from "./components/FinalizacaoDescoberta";
import RotaProtegida from "./components/RotaProtegida";

function App() {
  const [usuario, setUsuario] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUsuario(user));
    return () => unsub();
  }, []);

  return (
    <Router>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-white text-xl font-semibold tracking-wide">Código Pleno</h1>
          <nav className="flex gap-4">
            <NavItem to="/" label="Institucional" />
            <NavItem to="/login" label="Login" />
            <NavItem to="/painel" label="Painel" />
            <NavItem to="/descoberta/temperamento" label="Descoberta" />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Institucional />} />
          <Route path="/login" element={<LoginAnalista />} />
          <Route
            path="/painel"
            element={
              <RotaProtegida>
                <PainelAnalista />
              </RotaProtegida>
            }
          />
          <Route path="/descoberta/temperamento" element={<IntroducaoDescoberta />} />
          <Route path="/descoberta/temperamento/iniciar" element={<DescobertaTemperamento />} />
          <Route path="/descoberta/temperamento/final" element={<FinalizacaoDescoberta />} />
        </Routes>
      </main>
    </Router>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-sm font-semibold transition-colors",
          isActive ? "text-amber-400" : "text-white hover:text-amber-300",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default App;
