import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Ideal Kitchen',
    category: 'Brand Video & UI Concept',
    description: 'A comprehensive brand promotion project featuring motion design, 3D product visualization, and a modern website UI concept for a modular kitchen company.',
    tags: ['Motion Design', 'UI/UX', 'Branding', '3D Visualization'],
    link: 'https://www.canva.com/design/DAGzsckXoxo/DgCXG7I6JH_m7XgGriSpbg/edit?utm_content=DAGzsckXoxo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tools: 'CapCut, Canva',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Kurkure',
    category: 'Product Promo Website',
    description: 'A youthful and engaging website concept designed to promote Kurkure\'s vibrant snack products with bold colors, dynamic layouts, and playful energy.',
    tags: ['UI/UX', 'Web Design', 'Visual Design', 'Brand Identity'],
    link: 'https://www.canva.com/design/DAGzmTjrSo8/t_PvSw4LH069qb39TUj6Yw/edit?utm_content=DAGzmTjrSo8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tools: 'Canva',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Taj Mahal Travel Poster',
    category: 'Visual Design',
    description: 'A modern travel poster for a tour company featuring the iconic Taj Mahal, utilizing split-panel design and clean typography to create visual depth and sophistication.',
    tags: ['Poster Design', 'Branding', 'Typography', 'Visual Identity'],
    link: 'https://www.canva.com/design/DAGz6H4ghHg/oLosFKHZI0dAtBZBXJmGVA/edit?utm_content=DAGz6H4ghHg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tools: 'Canva',
    gradient: 'from-sky-500 to-blue-600'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Featured Work</h2>
          <p className="text-lg text-slate-600 mb-4">
            A selection of projects showcasing my approach to design and visual storytelling
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-12">
            <p className="text-blue-800 text-sm font-medium">
              For the best viewing experience, please view projects in presentation mode
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`bg-gradient-to-br ${project.gradient} p-12 flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-center relative z-10">
                      <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm font-medium">{project.tools}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                        {project.category}
                      </div>
                      <p className="text-slate-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-4 transition-all duration-300 group/link"
                    >
                      View Project
                      <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
