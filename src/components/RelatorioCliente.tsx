import React from "react";
import RelatorioCliente from "./RelatorioCliente"; // ✅ import corrigido

export default function PainelAnalista() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold mb-4">Painel do Analista</h1>
      <RelatorioCliente />
    </main>
  );
}
