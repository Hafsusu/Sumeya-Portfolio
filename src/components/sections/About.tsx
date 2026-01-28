import { Code, Laptop } from 'lucide-react';
import aboutPhoto from '../../assets/sum_1.png'
import Resume from '../../assets/Sumeya _Abesha_Resume.pdf'

const About = () => {
  const stats = [
    { number: '2', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '8+', label: 'Technologies' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCVClick = () => {
    window.open(`${Resume}`, '_blank');
    
    const link = document.createElement('a');
    link.href = `${Resume}`;
    link.download = 'Sumeya_Abesha_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section id="about" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-200 via-primary-100 to-white flex items-center justify-center">
                  <img 
                    src={aboutPhoto} 
                    alt="Sumeya Abesha - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-100 rounded-full -z-10 opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-50 rounded-full -z-10 opacity-70"></div>
              
              <div className="absolute -top-6 -left-6 bg-primary-200 p-3 rounded-lg shadow-lg">
                <div className="text-2xl"><Laptop className='text-primary-700'/></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-200 p-3 rounded-lg shadow-lg">
                <div className="text-2xl"><Code className='text-primary-700'/></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About <span className="text-primary-600">Me</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
            I’m a full stack developer with hands-on experience building web, mobile, and ERP systems
            used in real operational contexts, including healthcare, finance, education, and event management.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
            Over the past years, I’ve worked with technologies like React, Flutter, Django, and ERPNext,
            often in projects where reliability, security, and usability mattered more than flashy features.
            I enjoy breaking down messy problems, asking the right questions, and designing solutions
            that make both users and developers’ lives easier.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['React', 'TypeScript', 'Node.js', 'Tailwind', 'UI/UX', 'MongoDB'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-200 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-primary-100 p-4 rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCVClick}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>View & Download CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;