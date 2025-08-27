export default function SobreSandra() {
  const placeholderSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#e9d5ff'/>
          <stop offset='100%' stop-color='#c7d2fe'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <circle cx='256' cy='200' r='80' fill='#ffffff' opacity='0.6'/>
      <rect x='128' y='300' width='256' height='130' rx='20' fill='#ffffff' opacity='0.45'/>
      <text x='50%' y='460' text-anchor='middle' font-family='Arial, sans-serif' font-size='36' fill='#4b0082'>
        Sandra
      </text>
    </svg>
  `)}`;

  return (
    <section id="sobre" className="max-w-5xl mx-auto px-6 py-16 fade-in">
      <h2 className="text-3xl font-semibold mb-8 font-serif text-purple-800 text-center">
        Sobre Sandra Maia
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/sandra.png"
          alt="Sandra Maia"
          className="w-64 h-64 rounded-xl shadow-lg object-cover bg-purple-50"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = placeholderSvg;
          }}
        />
        <p className="text-lg leading-relaxed font-sans text-gray-700">
          Sandra Maia é especialista em neurodivergência, temperamentos humanos e transformação pessoal.
          Com uma abordagem acolhedora e profunda, ela ajuda pessoas a descobrirem seu verdadeiro potencial
          através do autoconhecimento. Sua missão é guiar indivíduos em jornadas de clareza, equilíbrio e
          realização pessoal, respeitando a singularidade de cada mente.
        </p>
      </div>
    </section>
  );
}

