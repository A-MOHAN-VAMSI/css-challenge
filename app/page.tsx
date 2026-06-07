export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="text-center py-32 px-6 border-b border-white/10">

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          CSS Challenge
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl">
          Modern Layout Systems & Interactive Animations
        </p>

      </section>

      {/* Flexbox Challenge */}
      <section className="py-24 px-6 md:px-12">

        <h2 className="text-4xl font-bold text-center mb-16">
          Flexbox Layout
        </h2>

        <div className="flex flex-col md:flex-row gap-8">

          <div className="flex-1 bg-zinc-950 border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Frontend Development
            </h3>

            <p className="text-zinc-400">
              Building responsive and user-friendly interfaces.
            </p>
          </div>

          <div className="flex-1 bg-zinc-950 border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Backend Systems
            </h3>

            <p className="text-zinc-400">
              Developing scalable APIs and server-side logic.
            </p>
          </div>

          <div className="flex-1 bg-zinc-950 border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Database Design
            </h3>

            <p className="text-zinc-400">
              Managing structured and reliable data storage.
            </p>
          </div>

        </div>

      </section>

      {/* Grid Challenge */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10">

        <h2 className="text-4xl font-bold text-center mb-16">
          CSS Grid Layout
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            "Analytics",
            "Projects",
            "Users",
            "Reports",
            "Tasks",
            "Settings",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-950 border border-white/10 rounded-3xl p-12 text-center text-2xl font-semibold hover:border-white transition"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* Animation Showcase */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10">

        <h2 className="text-4xl font-bold text-center mb-16">
          Animation Showcase
        </h2>

        <div className="flex flex-col items-center gap-12">

          {/* Hover Button */}
          <button
            className="
            px-8
            py-4
            bg-white
            text-black
            rounded-xl
            font-semibold
            hover:scale-110
            transition
            "
          >
            Launch Project
          </button>

          {/* Floating Card */}
          <div
            className="
            bg-zinc-950
            border
            border-white/10
            rounded-3xl
            p-10
            animate-bounce
            "
          >
            Floating Card
          </div>

          {/* Animated Links */}
          <div className="flex gap-10 text-lg">

            <a className="group cursor-pointer">
              Home
              <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a className="group cursor-pointer">
              Projects
              <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a className="group cursor-pointer">
              Contact
              <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500">

        <p>
          Created by Mohan Vamsi
        </p>

      </footer>

    </main>
  );
}