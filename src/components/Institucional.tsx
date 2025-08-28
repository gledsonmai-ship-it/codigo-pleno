const Institucional = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Bem-vindo ao Código Pleno</h2>
      <p>
        Criado por <strong>Sandra Maia</strong>, o Código Pleno é uma jornada de autoconhecimento que une ciência, fé e empatia para revelar o seu verdadeiro temperamento e perfil emocional.
      </p>

      <img
        src="/imagemSandra.jpg"
        alt="Sandra Maia"
        style={{ width: '100%', borderRadius: '8px', margin: '2rem 0' }}
      />

      <h3>Por que viver essa descoberta?</h3>
      <ul>
        <li>🌱 Porque você merece se conhecer com profundidade</li>
        <li>🧠 Porque entender seu temperamento muda suas decisões</li>
        <li>💬 Porque sua forma de sentir, pensar e agir tem um padrão — e ele pode ser revelado</li>
      </ul>

      <h3>Como funciona?</h3>
      <p>
        Você será guiado por uma experiência emocional que revela seu perfil, e poderá receber orientações personalizadas com base nos resultados. Tudo com acolhimento, leveza e propósito.
      </p>

      <a
        href="/descoberta/temperamento"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          backgroundColor: 'var(--cor-primaria)',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Quero viver essa descoberta
      </a>
    </div>
  );
};

export default Institucional;