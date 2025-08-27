import GraficoPerfis from '../components/GraficoPerfis';
import GraficoEvolucao from '../components/GraficoEvolucao';
import ExportarRelatorios from '../components/ExportarRelatorios';

export default function Dashboard() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-2xl font-bold text-purple-700">Dashboard do Analista</h2>

      <GraficoPerfis />
      <GraficoEvolucao />
      <ExportarRelatorios />
    </section>
  );
}