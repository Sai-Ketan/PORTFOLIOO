import { Palette, Layout, Video, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    skills: ['User Interface Design', 'User Experience', 'Interaction Design', 'Prototyping', 'Responsive Design']
  },
  {
    icon: Palette,
    title: 'Visual Design',
    skills: ['Brand Identity', 'Color Theory', 'Layout Design', 'Poster Design']
  },
  {
    icon: Video,
    title: 'Motion & Video',
    skills: ['Motion Graphics', 'Video Editing', 'Animation', '3D Visualization']
  },
  {
    icon: Sparkles,
    title: 'Tools',
    skills: ['Canva', 'CapCut']
  }
];

export default function Skills() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 mb-16">
            A diverse toolkit for creating impactful visual experiences
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors duration-300"
                >
                  <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-600 text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
