import React from "react";
import RelatorioCliente from "../components/RelatorioCliente"; // ✅ sobe 1 nível

export default function RelatorioClientePage() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Relatório</h1>
      <RelatorioCliente />
    </div>
  );
}
