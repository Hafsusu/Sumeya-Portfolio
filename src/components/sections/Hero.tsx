import profilePhoto from '../../assets/Sumi_Photo.jpg'

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Hafsusu',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hab-han',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      url: 'https://t.me/Hab_su',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
          <path d="M66.964 134.874s-32.08-10.062-51.344-16.002c-17.542-6.693-1.57-14.928 6.015-17.59 7.585-2.66 186.38-71.948 194.94-75.233 8.94-4.147 19.884-.35 14.767 18.656-4.416 20.407-30.166 142.874-33.827 158.812-3.66 15.937-18.447 6.844-18.447 6.844l-83.21-61.442z" fill="currentColor" stroke="#7f38ec" strokeWidth="10"/>
          <path d="M92.412 201.62s4.295.56 8.83-3.702c4.536-4.26 26.303-25.603 26.303-25.603" fill="currentColor" stroke="#7f38ec" strokeWidth="10"/>
          <path d="M66.985 134.887l28.922 14.082-3.488 52.65s-4.928.843-6.25-3.613c-1.323-4.455-19.185-63.12-19.185-63.12z" fillRule="evenodd" stroke="#7f38ec" strokeWidth="10" strokeLinejoin="bevel"/>
          <path d="M66.985 134.887s127.637-77.45 120.09-71.138c-7.55 6.312-91.168 85.22-91.168 85.22z" fillRule="evenodd" stroke="#7f38ec" strokeWidth="9.67" strokeLinejoin="bevel"/>
        </svg>
      )
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary-50 section-padding py-20">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 p-1 shadow-xl mt-10">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-primary-300 flex items-center justify-center overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Sumeya Abesha" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Sumeya <span className="text-primary-600">Abesha</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-medium">
          Full Stack Developer building scalable web, mobile, and ERP systems
          </h2>

          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          I design and build real-world applications, from healthcare and finance platforms
          to enterprise management systems, focusing on clarity, reliability, and long-term maintainability.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label={`Visit my ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 inline-block"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-10 absolute flex left-1/2 transform -translate-x-1/2 ">
            <a
              href="#about"
              className="animate-bounce cursor-pointer"
              aria-label="Scroll to next section"
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;