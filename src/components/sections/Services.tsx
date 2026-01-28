import { CodeXml, Computer, Globe, Handshake, Palette, Tablet } from 'lucide-react';

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, TypeScript, and Node.js. Responsive, fast, and user-friendly.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs built with best practices. Secure, scalable, and well-documented backend services.',
      icon: <CodeXml className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native & Flutter. Native performance with shared codebase for iOS and Android.',
      icon: <Tablet className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'DevOps & Deployment',
      description: 'CI/CD pipeline setup, cloud deployment, and infrastructure management. Ensuring your applications run smoothly in production.',
      icon: <Computer className="w-8 h-8" />
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed with user experience in mind. From wireframes to pixel-perfect implementations.',
      icon: <Palette className="w-8 h-8" /> 
    },
    {
      id: 6,
      title: 'Consulting',
      description: 'Technical consulting and code reviews. Helping teams improve their development processes and code quality.',
      icon: <Handshake className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs. From concept to deployment and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-primary-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
            >
              <div className="inline-flex mb-6 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300">
                <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button onClick={() => scrollToSection('contact')} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center gap-2 group-hover:gap-3 duration-300">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;