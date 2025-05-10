import React, { useEffect, useRef, useState } from 'react';

interface ContactProps {
  showContent: boolean;
}

const Contact: React.FC<ContactProps> = ({ showContent }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32">
      <div className={`max-w-xl mx-auto text-center transition-all duration-500 fadein ${isVisible ? 'show' : ''}`}>
        <p className="font-mono text-green mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl text-lightest-slate font-bold mb-6">Get In Touch</h2>
        <p className="text-slate mb-12">
          I'm currently looking for opportunities to collaborate on projects and learn from experienced professionals. 
          Whether you have a question, want to work together, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:thisun.20233173.iit.ac.lk"
          className="inline-block border border-green text-green rounded px-7 py-4 text-base font-mono hover:bg-green/10 transition-colors"
        >
          Say Hello
        </a>
        
        <div className="mt-16 space-y-2">
          <p className="text-slate">Other ways to connect:</p>
          <p className="text-light-slate">Email: thisun.20233173.iit.ac.lk</p>
          <p className="text-light-slate">LinkedIn: Thisun Senevirathne</p>
          <p className="text-light-slate">GitHub: Thisun-17</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;