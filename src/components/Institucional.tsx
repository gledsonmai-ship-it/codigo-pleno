export default function Institucional() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-20 font-sans text-gray-800">
      
      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800">Código Pleno</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Uma plataforma de autoconhecimento, temperamentos e transformação pessoal criada por <strong>Sandra Maia</strong>.
        </p>
        <a
          href="#contato"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
        >
          Quero viver o Código Pleno
        </a>
      </section>

      {/* SOBRE SANDRA */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img src="/sandra.png" alt="Sandra Maia" className="rounded-xl shadow-lg w-full h-auto" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-purple-700">Sobre Sandra Maia</h2>
          <p className="text-lg leading-relaxed">
            Neurocientista, analista de temperamentos e mentora de transformação pessoal. Sandra une ciência, fé e empatia para ajudar pessoas a descobrirem seu verdadeiro perfil e viverem com clareza, propósito e liberdade emocional.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="text-center space-y-8">
        <h2 className="text-2xl font-semibold text-purple-700">Benefícios do Código Pleno</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Autoconhecimento", desc: "Descubra seu temperamento e sua essência." },
            { title: "Clareza emocional", desc: "Entenda seus padrões e tome decisões com segurança." },
            { title: "Protagonismo", desc: "Assuma o controle da sua vida com propósito." },
          ].map((item, i) => (
            <div key={i} className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-purple-800">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 bg-purple-50">
        <h2 className="text-2xl font-semibold text-center text-purple-800 mb-10">Depoimentos de Transformação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {[
            {
              nome: "Elias Cruz",
              cargo: "Aluno do Código Pleno",
              texto:
                "Sandra Maia nos impressiona com sua vitalidade e paixão por transformar vidas. A mentoria foi uma experiência profunda e reveladora.",
            },
            {
              nome: "Elaine Ravacci",
              cargo: "Analista Comportamental",
              texto:
                "O método Código Pleno oferece uma visão clara e estratégica sobre temperamentos e neurodivergência. Recomendo fortemente!",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-700">{item.nome}</h3>
                  <p className="text-sm text-gray-500">{item.cargo}</p>
                </div>
                <div className="text-yellow-400 text-lg">★★★★★</div>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section id="contato" className="text-center space-y-6">
        <h2 className="text-2xl font-semibold text-purple-700">Você está pronta(o) para viver o Código Pleno?</h2>
        <p className="text-lg">
          Entre em contato com Sandra e descubra como transformar sua forma de pensar, sentir e agir com mais clareza e propósito.
        </p>
        <a
          href="https://wa.me/5511943929521?text=Olá%20Sandra,%20quero%20saber%20mais%20sobre%20o%20Código%20Pleno!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
        >
          Fale conosco pelo WhatsApp
        </a>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-gray-100 py-10 text-center text-sm text-gray-600 mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
          <img src="/logo-codigo-pleno.png" alt="Código Pleno" className="w-48 h-auto mb-4" />
          <ul className="flex flex-wrap justify-center gap-8 text-gray-700">
            <li>(11) 94392-9521</li>
            <li>
              <a href="mailto:contato@codigopleno.com.br" className="hover:underline">
                contato@codigopleno.com.br
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sandramaia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <div className="mt-6 text-xs text-gray-500">
            © Código Pleno 2025 — Todos os direitos reservados
          </div>
        </div>
      </footer>
    </main>
  );
}