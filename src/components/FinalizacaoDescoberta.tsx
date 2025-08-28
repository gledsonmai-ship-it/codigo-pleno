const FinalizacaoDescoberta = () => {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h2>Descoberta concluída com sucesso</h2>
      <p>
        Parabéns por ter vivido essa jornada de autoconhecimento.  
        Você deu um passo importante para entender seu temperamento, seu perfil emocional e sua forma única de sentir, pensar e agir.
      </p>

      <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
        “A clareza emocional é o primeiro passo para a transformação.” — Sandra Maia
      </p>

      <p style={{ marginTop: '2rem' }}>
        Se quiser conversar sobre seu resultado, tirar dúvidas ou agendar um atendimento, Sandra está disponível para te ouvir.
      </p>

      <a
        href="https://wa.me/5511943929521?text=Olá%20Sandra,%20acabei%20de%20viver%20minha%20descoberta%20no%20Código%20Pleno%20e%20gostaria%20de%20conversar%20com%20você."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#25D366',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginTop: '1rem'
        }}
      >
        Falar com Sandra pelo WhatsApp
      </a>
    </div>
  );
};

export default FinalizacaoDescoberta;