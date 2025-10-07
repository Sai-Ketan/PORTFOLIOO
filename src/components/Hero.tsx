import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-slate-900 tracking-tight">
            Garisa Sai Ketan Reddy
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
            Graphic Designer and UI/UX, Visual Designer
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting compelling visual experiences through thoughtful design,
            from motion graphics to user interfaces
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-slate-400" />
      </div>
    </section>
  );
}
