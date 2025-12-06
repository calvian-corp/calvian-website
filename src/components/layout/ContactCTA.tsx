import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section className="text-white py-20 text-center -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-32 2xl:-mx-40">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Transform Your Digital Presence?</h2>
        <p className="text-lg mb-10 opacity-80">
          Don't let complexity slow you down. Contact our expert team for a free, no-obligation consultation.
        </p>
        <a 
          href="/contact" 
          className="bg-accent text-white font-bold py-4 px-10 rounded-full text-xl shadow-2xl transition-all duration-300 hover:bg-opacity-90 hover:scale-105 inline-block"
        >
          Start Your Project Today &rarr;
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;