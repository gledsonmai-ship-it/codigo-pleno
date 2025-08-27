interface Props {
  titulo: string;
  descricao: string;
}

export default function BeneficioCard({ titulo, descricao }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}
