    
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          DigitalStudio
        </Link>

        <div className="flex flex-wrap gap-5 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
           <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/service" className="hover:text-blue-600">Services</Link>
          <Link href="/contact/" className="hover:text-blue-600">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
