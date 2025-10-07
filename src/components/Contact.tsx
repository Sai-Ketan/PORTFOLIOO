import { Mail, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saiketan2004@gmail.com',
    link: 'mailto:saiketan2004@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7205652143',
    link: 'tel:+917205652143'
  }
];

export default function Contact() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
            Let's create something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 group text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-700 group-hover:bg-slate-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">{method.label}</div>
                      <div className="font-medium">{method.value}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
              © 2025 Garisa Sai Ketan Reddy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
