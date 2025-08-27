export default function SemanaCard({ semana, semanaIndex, concluidas, setConcluidas }: any) {
  const handleToggle = (tarefaIndex: number) => {
    const id = semanaIndex * 3 + tarefaIndex;
    setConcluidas(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-purple-50 p-4 rounded-lg shadow space-y-2">
      <h3 className="font-semibold text-purple-600">{semana.titulo}</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {semana.tarefas.map((tarefa: string, i: number) => {
          const id = semanaIndex * 3 + i;
          const concluida = concluidas.includes(id);
          return (
            <li key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={concluida}
                onChange={() => handleToggle(i)}
                className="accent-purple-600"
              />
              <span className={concluida ? 'line-through text-gray-500' : ''}>{tarefa}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}