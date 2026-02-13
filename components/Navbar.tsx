"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-black/70">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo / Nama */}
        <Link href="/" className="text-xl font-bold tracking-tighter">
          EGO<span className="text-blue-600">.</span>
        </Link>

        {/* Menu Links */}
        <div className="flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition">
            Contact
          </Link>

          {/* Tombol Call to Action */}
          <Link href="/resume.pdf" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
            Download CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
