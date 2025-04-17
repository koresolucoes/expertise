import Link from 'next/link';

export default function MainNav() {
  return (
    <nav className="w-full flex justify-center py-6 px-4 bg-black bg-opacity-80 border-b border-ciano-eletrico z-30">
      <ul className="flex gap-6 flex-wrap justify-center items-center">
        <li>
          <Link href="/" className="mainnav-btn">Página Inicial</Link>
        </li>
        <li>
          <Link href="/blog" className="mainnav-btn">Blog</Link>
        </li>
        <li>
          <Link href="/servicos" className="mainnav-btn">Serviços</Link>
        </li>
        <li>
          <Link href="/cursos" className="mainnav-btn">Cursos</Link>
        </li>
        <li>
          <Link href="/sobre" className="mainnav-btn">Sobre</Link>
        </li>
        <li>
          <Link href="/contato" className="mainnav-btn">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
