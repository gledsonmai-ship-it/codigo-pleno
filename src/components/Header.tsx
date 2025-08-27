export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Código Pleno</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#sobre" className="hover:text-purple-600">Sobre</a></li>
          <li><a href="#beneficios" className="hover:text-purple-600">Benefícios</a></li>
          <li><a href="#contato" className="hover:text-purple-600">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
