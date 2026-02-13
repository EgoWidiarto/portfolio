import { HERO_CONTENT, PROJECTS } from "@/constants";

export default function Home() {
  return (
    <main className="container-custom">
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center text-center">
        {/* Badge status (Opsional tapi keren) */}
        <div className="mb-6 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
          Available for Internships & Full-time 🚀
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Hi, Im <span className="text-blue-600">Ego Widiarto</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
          Sistem Informasi Student at UNESA. I build robust web applications like
          <span className="font-semibold text-gray-900 dark:text-white"> Ascendemy</span> and analyze market trends with <span className="font-semibold text-gray-900 dark:text-white">Machine Learning</span>.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#projects" className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all">
            View My Projects
          </a>
          <a href="#contact" className="rounded-xl border border-gray-300 px-8 py-4 text-sm font-semibold hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900 transition-all">
            Contact Me
          </a>
        </div>

        {/* Tech Stack Mini Icons (Menunjukkan skill secara visual) */}
        <div className="mt-20">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Tech Stack</p>
          <div className="mt-4 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Kamu bisa ganti dengan icon asli nantinya */}
            <span className="font-bold text-xl">Next.js</span>
            <span className="font-bold text-xl">Laravel</span>
            <span className="font-bold text-xl">TypeScript</span>
            <span className="font-bold text-xl">Python</span>
            <span className="font-bold text-xl">PostgreSQL</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Beberapa project yang telah saya buat dan banggakan</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50 hover:shadow-lg transition-shadow">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex gap-3">
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
