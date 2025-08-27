export default function Contato() {
  return (
    <section id="contato" className="text-center py-12 pt-24">
      <h2 className="text-2xl font-semibold mb-4">Você está pronta(o) para viver o Código Pleno?</h2>
      <p className="mb-6">
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
  );
}
