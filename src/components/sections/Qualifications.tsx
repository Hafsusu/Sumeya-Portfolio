import { useState } from 'react';
import type { Qualification } from '../../types';
import { GraduationCap, Trophy } from 'lucide-react';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const education: Qualification[] = [
    {
      id: 1,
      title: 'Secondary School',
      institution: 'Addis Ketema Preparatory School',
      period: 'Sep, 2019 - Mar, 2021',
      description: ''
    },
    {
      id: 2,
      title: 'Bachelor of Science in Software Engineering',
      institution: 'Jimma University, Institute of Technology',
      period: 'Jul, 2021 - Jul, 2025',
      description: 'Graduated with GPA: 3.30/4.0. Final year project: Support System for Breast Cancer Patients with Flutter and Laravel.'
    }
  ];

  const certifications: Qualification[] = [
    {
      id: 3,
      title: 'Javascript Essentials',
      institution: 'Cisco Networking Academy',
      period: 'Nov, 2023',
      description: ''
    },
    {
      id: 4,
      title: 'Python Essentials',
      institution: 'Cisco Networking Academy',
      period: 'Feb, 2024',
      description: ''
    },
    {
      id: 5,
      title: 'AI Career Essentials',
      institution: 'ALX Africa',
      period: 'Jul, 2024',
      description: ''
    },
    {
      id: 6,
      title: 'Professional Foundations',
      institution: 'ALX Africa',
      period: 'Oct, 2024',
      description: ''
    }
  ];

  const workExperience: Qualification[] = [
    {
      id: 7,
      title: 'Full Stack Developer',
      institution: 'SimbaTech Trading PLC',
      period: 'Oct, 2024 - Nov, 2025',
      description: 'Developed and maintained web applications using the Django framework and implemented user interfaces using React.js. Implemented and customized Frappe/ERPNext applications according to project requirements. Participated in code reviews, ensured best practices and maintained hign standards for code quality.'
    },
    {
      id: 8,
      title: 'Junior Software Developer',
      institution: 'Fineto IoT Products',
      period: 'Feb, 2024 - Sep, 2024',
      description: 'Worked extensively with Frappe/ERPNext to customize and implement business solutions for clients. Built WordPress-based websites for small businesses. Collaborated in full-stack projects involving database integration and RESTful API development.'
    }
  ];

  return (
    <section id="qualifications" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-primary-600">Qualifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Educational background, professional certifications, and work experience that shape my expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Education & Certifications
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Work Experience
          </button>
        </div>

        {activeTab === 'education' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="text-primary-600"><GraduationCap/></span>
                  Education Background
                </h3>
                <div className="relative">
                  <div className="absolute left-6 h-full w-0.5 bg-primary-200"></div>
                  
                  <div className="space-y-8">
                    {education.map((edu) => (
                      <div key={edu.id} className="relative">
                        <div className="absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white z-10"></div>
                        
                        <div className="ml-12">
                          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-500">
                            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-3">
                              {edu.period}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {edu.title}
                            </h3>
                            <h4 className="text-primary-600 font-semibold mb-3">
                              {edu.institution}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {edu.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="text-primary-600"><Trophy/></span>
                  Certifications
                </h3>
                <div className="space-y-6">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="bg-primary-100 p-6 rounded-xl border border-primary-100 hover:border-primary-300 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <span className="inline-block py-1 bg-primary-100 text-primary-600 rounded-full text-s font-semibold mb-2">
                            {cert.period}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {cert.title}
                          </h3>
                          <h4 className="text-primary-600 font-medium mb-2">
                            {cert.institution}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1 h-full w-0.5 bg-primary-300"></div>
              
              <div className="space-y-12">
                {workExperience.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary-600 rounded-full border-4 border-white z-10 flex items-center justify-center">
                      {index === 0 && <span className="text-white text-sm"></span>}
                      {index === 1 && <span className="text-white text-sm"></span>}
                      {index === 2 && <span className="text-white text-sm"></span>}
                      {index === 3 && <span className="text-white text-sm"></span>}
                    </div>

                    <div
                      className={`ml-12 md:ml-0 md:w-5/12 ${
                        index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                      }`}
                    >
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary-200">
                        <div className="flex items-start justify-between mb-4">
                          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
                            {exp.period}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {exp.title}
                        </h3>
                        <h4 className="text-primary-600 font-semibold mb-4">
                          {exp.institution}
                        </h4>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualifications;