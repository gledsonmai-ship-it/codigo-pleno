import BeneficioCard from "./BeneficioCard";

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-gray-50 py-12 pt-24">
      <h2 className="text-3xl font-semibold text-center mb-8">Benefícios do Código Pleno</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
        <BeneficioCard titulo="Autoconhecimento" descricao="Entenda profundamente quem você é..." />
        <BeneficioCard titulo="Clareza" descricao="Tenha mais direção sobre suas escolhas..." />
        <BeneficioCard titulo="Protagonismo" descricao="Tome as rédeas da sua história..." />
      </div>
    </section>
  );
}
