import { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from '../../types';
import niembek from '../../assets/niembek.png'
import eagle from '../../assets/eagle.png'
import portfolio from '../../assets/portfolio.png'
import longhorn from '../../assets/longhorn.png'
import mobile from '../../assets/Initial_page.png'
import cart from '../../assets/cart_new.png'
import logo from '../../assets/fin_logo.webp'
import sms from '../../assets/sms.png'
import loan from '../../assets/loan.webp'
import hospital from '../../assets/hospital.webp'
import microfinance from '../../assets/microfinance.png'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'erp'>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Agency Organization & Expo Management',
      description: 'Comprehensive website for an agency organization with integrated events and expo management system. Features include event registration, ticketing, exhibitor management, real-time updates, and admin dashboard for managing multiple events simultaneously.',
      image: niembek,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      liveUrl: 'https://niembek.vercel.app/'
    },
    {
      id: 2,
      title: 'EAGLE Mobile Livestock Care Platform',
      description: 'Website for livestock care organization connecting farmers with veterinary services. Includes farmer registration, service booking, veterinary product store, appointment scheduling, and impact dashboard. Focus on preventive care and community resilience.',
      image: eagle,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Map Integration'],
      category: 'web',
      liveUrl: 'https://eagle-nine.vercel.app/',
    },
    {
      id: 3,
      title: 'Driving School Management System',
      description: 'Website for driving school with backend powered by Frappe/ERPNext. Features include course catalog, instructor profiles, student registration, schedule management, and payment integration. Seamless data flow between frontend and ERP backend.',
      image: longhorn,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Frappe', 'ERPNext', 'REST API'],
      category: 'web',
      liveUrl: 'https://longhorncdl.com/',
    },
    {
      id: 4,
      title: 'International School Management Backend',
      description: 'Backend system for school following Cambridge International curriculum. Manages student records, academic schedules, grading system, teacher assignments, and parent communication. Built with Django for scalability and security.',
      image: sms,
      technologies: ['Python', 'Django', 'PostgreSQL', 'Django REST', 'JWT'],
      category: 'web',
    },
    {
      id: 5,
      title: 'Fineto Company Profile Website',
      description: 'Professional company profile website built with WordPress. Features responsive design, service showcase, team profiles, client testimonials, and contact forms. Focused on branding and lead generation.',
      image: logo,
      technologies: ['WordPress', 'PHP', 'Elementor', 'SEO Optimization'],
      category: 'web',
      liveUrl: 'https://fineto.fi/',
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      description: 'Modern portfolio website showcasing projects and skills. Features responsive design, smooth animations, project filtering, contact form, and performance optimization. Built with best practices in React and TypeScript.',
      image: portfolio,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'React Router'],
      category: 'web',
      liveUrl: 'https://sumeya-portfolio-pi.vercel.app/',
      githubUrl: 'https://github.com/Hafsusu/Sumeya-Portfolio'
    },
    {
      id: 7,
      title: 'Hopeline - Breast Cancer Patient Support',
      description: 'Mobile app providing support system for breast cancer patients. Features include patient profiles, symptom tracking, appointment scheduling, community forum, and educational resources. Patient-facing application.',
      image: mobile,
      technologies: ['Flutter', 'Dart', 'Laravel', 'LiveKit', 'WebRTC', 'Push Notifications'],
      category: 'mobile',
      githubUrl: 'https://github.com/Makbel116/Final-Year-Project/tree/main/frontend'
    },
    {
      id: 8,
      title: 'Hopeline Professional - Healthcare Provider',
      description: 'Healthcare provider application for managing breast cancer patients. Includes patient management, consultation scheduling, video consultations via LiveKit, medical record access, and treatment planning.',
      image: mobile,
      technologies: ['Flutter', 'Dart', 'Laravel', 'LiveKit', 'WebSocket', 'HIPAA Compliance'],
      category: 'mobile',
      githubUrl: 'https://github.com/Makbel116/Final-Year-Project/tree/main/professional_app'
    },
    {
      id: 9,
      title: 'MarketBasket - Digital Shopping Cart',
      description: 'Mobile app for creating and managing shopping lists. Helps users organize shopping efficiently.',
      image: cart,
      technologies: ['Flutter', 'Dart', 'BLoC'],
      category: 'mobile',
      githubUrl: 'https://github.com/Hafsusu/Market_Basket'
    },
    {
      id: 10,
      title: 'Custom Loan Management System',
      description: 'Deep customization of ERPNext lending module for financial institution. Features include loan application processing, credit scoring, repayment scheduling, interest calculation, collateral management, and regulatory reporting.',
      image: loan,
      technologies: ['Frappe', 'ERPNext', 'Python', 'MariaDB', 'JavaScript', 'Custom APIs'],
      category: 'erp',
    },
    {
      id: 11,
      title: 'Hospital Management System',
      description: 'Comprehensive ERP for hospital management including patient registration, appointment scheduling, billing, pharmacy, lab management, and staff scheduling. Customized to meet specific hospital workflow requirements.',
      image: hospital,
      technologies: ['Frappe', 'ERPNext', 'Python', 'MariaDB', 'Redis', 'Custom Workflows'],
      category: 'erp',
    },
    {
      id: 12,
      title: 'Microfinance Management System',
      description: 'ERP system for microfinance institution managing loans, savings, client management, group lending, and financial reporting. Includes mobile banking integration and SMS notifications for clients.',
      image: microfinance,
      technologies: ['Frappe', 'ERPNext', 'Python', 'MariaDB', 'Redis', 'REST API'],
      category: 'erp',
    }
  ];

  const filters = [
    { key: 'all' as const, label: 'All Projects', count: projects.length },
    { key: 'web' as const, label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile' as const, label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'erp' as const, label: 'ERP Systems', count: projects.filter(p => p.category === 'erp').length }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
    setCurrentSlide(0);
  }, [activeFilter]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentProject = filteredProjects[currentSlide];

  if (!currentProject) return null;

  return (
    <section id="portfolio" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-primary-600">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Featured projects showcasing my expertise across different domains and technologies.
          </p>
        </div>

        <div className=" md:flex flex-wrap justify-center gap-4 mb-12 grid grid-cols-2 text-sm">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.key
                  ? 'bg-white/20'
                  : 'bg-gray-100'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 border border-gray-200"
            aria-label="Previous project"
            disabled={filteredProjects.length <= 1}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 border border-gray-200"
            aria-label="Next project"
            disabled={filteredProjects.length <= 1}
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="bg-primary-50 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-full min-h-[400px] bg-primary-50 to-primary-600">
                <div className="inset-0 flex absolute items-center justify-center">
                  <div className="text-center p-8">
                    <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="object-cover"
                  />
                  </div>
                </div>
                
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-primary-600 font-bold">
                    {currentSlide + 1} / {filteredProjects.length}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-6 capitalize">
                  {currentProject.category} Application
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {currentProject.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {currentProject.description}
                </p>

                <div className="mb-10">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-200 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-100 hover:text-primary-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-primary-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-black transition-colors shadow-lg hover:shadow-xl"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}

                  {!currentProject.liveUrl && !currentProject.githubUrl && (
                    <div className="px-6 py-4 bg-gray-100 text-gray-500 rounded-xl font-medium">
                      Code and demo available upon request
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-primary-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;