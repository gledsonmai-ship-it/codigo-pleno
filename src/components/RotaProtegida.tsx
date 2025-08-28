import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useEffect, useState } from "react";

interface RotaProtegidaProps {
  children: ReactNode;
}

export default function RotaProtegida({ children }: RotaProtegidaProps) {
  const [carregando, setCarregando] = useState(true);
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAutenticado(!!user);
      setCarregando(false);
    });
    return () => unsub();
  }, []);

  if (carregando) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Verificando acesso...
      </div>
    );
  }

  if (!autenticado) {
    // Se não tiver logado, redireciona para /login
    return <Navigate to="/login" replace />;
  }

  // Se estiver logado, renderiza os filhos
  return <>{children}</>;
}
