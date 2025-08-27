export default function ProgressoBar({ progresso }: { progresso: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-purple-600 h-4 rounded-full transition-all"
        style={{ width: `${progresso}%` }}
      ></div>
      <p className="text-sm text-gray-600 mt-1">{progresso}% concluído</p>
    </div>
  );
}