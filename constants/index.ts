// Definisi tipe data untuk keamanan (TypeScript)
export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Ascendemy",
    description: "Platform EdTech untuk Tryout Online menggunakan Laravel & Livewire.",
    tech: ["Laravel", "Livewire", "Midtrans"],
  },
  {
    title: "Stock Price Predictor",
    description: "Prediksi harga saham bank Indonesia menggunakan Random Forest.",
    tech: ["Python", "Machine Learning", "FastAPI"],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export const HERO_CONTENT = {
  name: "Ego Widiarto",
  role: "Information Systems Student @ UNESA",
  description: "Web Developer & Data Science Enthusiast. Sedang fokus pada pengembangan platform EdTech dan analisis prediktif pasar saham.",
};
