import { useRef, useEffect, useState } from 'react';
import HTML from '../../assets/html.png';
import CSS from '../../assets/text.png';
import JS from '../../assets/js.png';
import TS from '../../assets/typescript.png';
import React from '../../assets/react.svg';
import Node from '../../assets/nodejs.png';
import python from '../../assets/python.png';
import mysql from '../../assets/mysql.png';
import docker from '../../assets/docker.png';
import git from '../../assets/social.png';
import figma from '../../assets/figma.png';
import tailwind from '../../assets/Tailwind_CSS_Logo.png';
import photoshop from '../../assets/photoshop.png';
import illustrator from '../../assets/illustrator.png';
import php from '../../assets/php.png'
import django from '../../assets/django.jpg';
import mongo from '../../assets/mongo.webp';
import postgres from '../../assets/postgresql.png';
import erp from '../../assets/ERP.png';
import odoo from '../../assets/odoo.png';

const Skills = () => {
  const techStacks = [
    { name: 'HTML', icon: HTML},
    { name: 'CSS', icon: CSS },
    { name: 'JavaScript', icon: JS },
    { name: 'TypeScript', icon: TS },
    { name: 'Tailwind', icon: tailwind },
    { name: 'React', icon: React },
    { name: 'Node.js', icon: Node },
    { name: 'Python', icon: python },
    { name: 'Django', icon: django },
    { name: 'PHP', icon: php },
    { name: 'MongoDB', icon: mongo },
    { name: 'PostgreSQL', icon: postgres },
    { name: 'MySQL', icon: mysql},
    { name: 'ERPNEXT', icon: erp },
    { name: 'Odoo', icon: odoo },
    { name: 'Docker', icon: docker },
    { name: 'Git', icon: git },
    { name: 'Figma', icon: figma },
    { name: 'Photoshop', icon: photoshop },
    { name: 'Illustrator', icon: illustrator },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedStacks = [...techStacks, ...techStacks];

  useEffect(() => {
    if (!carouselRef.current || isPaused) return;

    const carousel = carouselRef.current;
    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.9;
      
      if (position <= -carousel.scrollWidth / 2) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section id="skills" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tech <span className="text-primary-600">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications.
          </p>
        </div>

        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={carouselRef}
            className="flex gap-6"
          >
            {duplicatedStacks.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 md:w-40"
              >
                <div className="bg-primary-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-3 transform hover:scale-110 transition-transform duration-300">
                    <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 object-contain"
                  />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-sm">Scroll to see more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;