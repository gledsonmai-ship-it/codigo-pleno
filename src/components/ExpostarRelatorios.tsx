export default function ExportarRelatorios() {
  const handleExport = () => {
    // lógica de exportação em lote (PDF ou CSV)
    alert('Exportação iniciada!');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow text-right">
      <button
        onClick={handleExport}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Exportar Relatórios em Lote
      </button>
    </div>
  );
}