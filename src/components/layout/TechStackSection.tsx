import React from 'react';

const TechStackSection: React.FC = () => {
  const technologies = [
    { name: "React", icon: "⚛️", description: "Modern, high-performance UI library." },
    { name: "Node.js", icon: "🟢", description: "Scalable server-side JavaScript runtime." },
    { name: "AWS", icon: "☁️", description: "Reliable and secure cloud infrastructure." },
    { name: "Python", icon: "🐍", description: "Data science and backend scripting power." },
    { name: "Docker", icon: "🐳", description: "Containerization for consistent deployment." },
    { name: "TypeScript", icon: "📘", description: "Type safety for large-scale applications." },
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-xl shadow-inner">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Our Core Technologies</h2>
      <div className="flex justify-center flex-wrap gap-6 max-w-6xl mx-auto px-4">
        {technologies.map((tech) => (
          <div 
            key={tech.name} 
            className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg w-40 transition-all duration-300 hover:shadow-xl hover:border-accent"
          >
            <span className="text-5xl mb-3">{tech.icon}</span>
            <h3 className="font-bold text-lg text-gray-800">{tech.name}</h3>
            <p className="text-xs text-gray-500 text-center mt-1">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;