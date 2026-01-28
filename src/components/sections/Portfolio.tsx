import { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from '../../types';
import niembek from '../../assets/niembek.png';
import eagle from '../../assets/eagle.png';
import mobile from '../../assets/Initial_page.png';
import logo from '../../assets/habesha.png';
import sms from '../../assets/sms.png';
import loan from '../../assets/loan.webp';
import microfinance from '../../assets/microfinance.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'erp' | 'backend'>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Agency Organization & Expo Management',
      summary: 'Web-based platform for managing large-scale events and expos, including registration, ticketing, exhibitor management, and real-time administration.',
      image: niembek,
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://niembek.vercel.app/',
      caseStudy: {
        problem: 'Event organizations managing expos relied on spreadsheets and manual coordination, leading to errors in registration, exhibitor tracking, and real-time event updates.',
        goals: [
          'Centralize event and expo management into one platform',
          'Support attendee registration and ticketing',
          'Enable exhibitor management across multiple events',
          'Provide admins with real-time operational visibility'
        ],
        constraints: [
          'Multiple events running concurrently',
          'High traffic during registration periods',
          'Need for real-time updates without overloading the system'
        ],
        role: 'Full Stack Developer responsible for frontend architecture, backend API integration, and admin dashboard design.',
        decisions: [
          {
            title: 'React + TypeScript for Frontend',
            explanation: 'Improved maintainability and reduced runtime errors for a system expected to scale and evolve.'
          },
          {
            title: 'MongoDB for Flexible Event Data',
            explanation: 'Allowed dynamic handling of varying event and exhibitor data structures.'
          }
        ],
        challenges: [
          {
            challenge: 'Managing multiple events simultaneously',
            solution: 'Designed scalable data models and separated event-specific logic at both frontend and backend levels.'
          },
          {
            challenge: 'Admin usability under time pressure',
            solution: 'Built a clear dashboard with prioritized actions and real-time status indicators.'
          }
        ],
        outcome: [
          'Centralized management of multiple expos within a single dashboard',
          'Reduced manual registration and exhibitor coordination work by an estimated 30–40%',
          'Cut event setup and update time from hours to minutes during active expos'
        ],
        improvements: [
          'Role-based permissions for large teams',
          'Advanced analytics for attendee behavior',
          'QR-based ticket validation'
        ]
      }
    },    
    {
      id: 2,
      title: 'EAGLE Mobile Livestock Care Platform',
      summary: 'Web platform connecting farmers with veterinary services to improve preventive livestock care.',
  image: eagle,
  category: 'web',
  technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Map Integration'],
  liveUrl: 'https://eagle-nine.vercel.app/',
  caseStudy: {
    problem: 'Small-scale farmers lacked timely access to veterinary services, leading to preventable livestock losses.',
    goals: [
      'Connect farmers with nearby veterinary services',
      'Enable appointment scheduling and service tracking',
      'Provide visibility into agricultural impact'
    ],
    constraints: [
      'Low digital literacy among users',
      'Unstable internet connectivity',
      'NGO budget limitations'
    ],
    role: 'Frontend Developer responsible for UI architecture, API integration, and user experience design.',
    decisions: [
      {
        title: 'Catalog-based Service Discovery',
        explanation: 'Helped farmers finad veterinary services and livestock products.'
      },
      {
        title: 'TypeScript for Reliability',
        explanation: 'Reduced runtime errors and improved maintainability.'
      }
    ],
    challenges: [
      {
        challenge: 'Designing for first-time digital users',
        solution: 'Used large visual cues, simplified flows, and minimal form inputs.'
      }
    ],
    outcome: [
      'Enabled farmers to discover and book veterinary services in a single flow',
      'Reduced service booking friction by replacing manual coordination with structured scheduling',
      'Provided NGOs with centralized visibility into service delivery and regional impact'
    ],
    improvements: [
      'Centralized Database',
      'Email-based notifications',
      'Advanced analytics dashboard'
    ]
  }
},
{
  id: 3,
  title: 'International School Management Backend',
  summary: 'Backend system for managing academic operations of a Cambridge International curriculum school.',
  image: sms,
  category: 'backend',
  technologies: ['Python', 'Django', 'PostgreSQL', 'Django REST', 'JWT'],
  caseStudy: {
    problem: 'Schools following international curricula struggled with fragmented systems for academics, grading, and communication, increasing administrative workload.',
    goals: [
      'Centralize student and academic records',
      'Support structured grading and reporting',
      'Enable secure role-based access',
      'Provide API-first backend for future integrations'
    ],
    constraints: [
      'Strict academic data accuracy requirements',
      'Need for scalable and secure backend',
      'Multiple user roles with different permissions'
    ],
    role: 'Backend Developer responsible for database design, API development, and authentication mechanisms.',
    decisions: [
      {
        title: 'Django for Rapid and Secure Development',
        explanation: 'Provided a mature framework with strong security and scalability features.'
      },
      {
        title: 'JWT Authentication',
        explanation: 'Enabled stateless, secure access for multiple frontend clients.'
      }
    ],
    challenges: [
      {
        challenge: 'Modeling complex academic relationships',
        solution: 'Designed normalized database schemas to reflect curriculum structure, grading, and schedules.'
      },
      {
        challenge: 'Ensuring data security',
        solution: 'Implemented role-based permissions and token-based authentication.'
      }
    ],
    outcome: [
      'Designed a normalized backend supporting multiple academic roles and workflows',
      'Improved data integrity by enforcing structured relationships and validations',
      'Prepared the system for future web and mobile clients via REST APIs'
    ],
    improvements: [
      'Parent portal integration',
      'Advanced reporting and analytics',
      'Complex interlap between models handled'
    ]
  }
},
{
  id: 4,
  title: 'Habesha Advert Company Profile Website',
  summary: 'Modern company profile website showcasing advertising, design, architecture, and software services.',
  image: logo,
  category: 'web',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'React Router'],
  liveUrl: 'https://habesha-advert.vercel.app/',
  caseStudy: {
    problem: 'The company lacked a modern digital presence that clearly communicated its diverse services and professional credibility.',
    goals: [
      'Present services clearly and professionally',
      'Strengthen brand identity',
      'Improve client trust and lead generation'
    ],
    constraints: [
      'Wide range of services to communicate',
      'Need for fast loading and smooth animations',
      'Marketing-focused rather than feature-heavy'
    ],
    role: 'Frontend Developer responsible for UI design, animations, and performance optimization.',
    decisions: [
      {
        title: 'React + Vite for Performance',
        explanation: 'Ensured fast build times and optimal page load performance.'
      },
      {
        title: 'Framer Motion for Subtle Animations',
        explanation: 'Used motion to enhance brand perception without distracting users.'
      }
    ],
    challenges: [
      {
        challenge: 'Communicating multiple services without clutter',
        solution: 'Structured content into clear sections with visual hierarchy.'
      }
    ],
    outcome: [
      'Replaced a weak or missing online presence with a clear, credible brand website',
      'Reduced user confusion by clearly separating and explaining diverse services',
      'Positioned the company for client inquiries and digital marketing efforts'
    ],
    improvements: [
      'CMS integration for content updates',
      'Email notifications for faster communication',
    ]
  }
},
    {
      id: 5,
      title: 'Hopeline - Breast Cancer Patient Support',
      summary: 'Mobile platform connecting breast cancer patients with healthcare providers through symptom tracking, consultations, and community support.',
  image: mobile,
  category: 'mobile',
  technologies: ['Flutter', 'Dart', 'Laravel', 'LiveKit', 'WebRTC', 'Push Notifications'],
  githubUrl: 'https://github.com/Makbel116/Final-Year-Project/tree/main/frontend',
  caseStudy: {
    problem: 'Breast cancer patients often experience fragmented care, poor follow-up, and limited emotional support due to disconnected healthcare systems.',
    goals: [
      'Centralize patient care tools into one platform',
      'Enable remote consultations with healthcare providers',
      'Support appointment management',
      'Provide emotional and community support'
    ],
    constraints: [
      'Sensitive medical data requiring secure handling',
      'Users with varying levels of digital literacy',
      'Mobile network instability',
      'Limited project timeline'
    ],
    role: 'Mobile and Full Stack Developer responsible for app architecture, feature implementation, and real-time communication integration.',
    decisions: [
      {
        title: 'Using Flutter for Mobile Development',
        explanation: 'Flutter enabled rapid UI development with a single codebase for Android and iOS, reducing maintenance complexity.'
      },
      {
        title: 'Separating Patient and Professional Apps',
        explanation: 'Splitting the applications reduced UX complexity and improved role-based access control.'
      },
      {
        title: 'LiveKit for Video Consultations',
        explanation: 'Chosen for its scalability and low-latency real-time communication using WebRTC.'
      }
    ],
    challenges: [
      {
        challenge: 'Maintaining video call stability on unreliable networks',
        solution: 'Implemented optimized connection handling and session recovery strategies.'
      },
      {
        challenge: 'Designing for non-technical users',
        solution: 'Used simplified navigation, minimal UI elements, and consistent design patterns.'
      }
    ],
    outcome: [
      'Enabled patients to track symptoms, appointments, and consultations in one platform',
      'Supported remote care workflows that reduced unnecessary physical visits',
      'Strengthened continuity of care through consistent digital communication'
    ],
    improvements: [
      'Analytics dashboard for providers',
      'AI-assisted symptom insights',
      'Offline resources on breast cancer survival & medications'
    ]
  }},
  {
    id: 6,
    title: 'Hopeline Professional – Healthcare Provider',
    summary: 'Mobile application enabling healthcare professionals to manage breast cancer patients and conduct remote consultations.',
    image: mobile,
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'Laravel', 'LiveKit', 'WebSocket'],
    githubUrl: 'https://github.com/Makbel116/Final-Year-Project/tree/main/professional_app',
    caseStudy: {
      problem: 'Healthcare providers lacked a centralized tool to manage patient data, consultations, and follow-ups efficiently.',
      goals: [
        'Enable structured patient management',
        'Support remote consultations',
        'Improve continuity of care'
      ],
      constraints: [
        'Strict data privacy requirements',
        'Time-sensitive workflows',
        'Need for reliable real-time communication'
      ],
      role: 'Mobile Developer responsible for provider-facing application architecture and real-time feature integration.',
      decisions: [
        {
          title: 'Separate Provider Application',
          explanation: 'Avoided overloading the patient app and ensured focused clinical workflows.'
        },
        {
          title: 'WebSocket-Based Updates',
          explanation: 'Enabled real-time synchronization of consultation data.'
        }
      ],
      challenges: [
        {
          challenge: 'Balancing feature depth with usability',
          solution: 'Prioritized core clinical workflows and minimized UI complexity.'
        }
      ],
      outcome: [
        'Reduced time spent on patient coordination by consolidating workflows into a single app',
        'Improved consultation turnaround through real-time communication tools',
        'Minimized context switching for healthcare providers'
      ],
      improvements: [
        'Advanced analytics for patient outcomes',
        'AI-assisted treatment recommendations',
        'Offline resources on breast cancer treatment'
      ]
    }
  },  
    {
      id: 7,
      title: 'Custom Loan Management System',
      summary: 'Deep customization of ERPNext lending module for loan processing, risk analysis, and regulatory reporting.',
  image: loan,
  category: 'erp',
  technologies: ['Frappe', 'ERPNext', 'Python', 'MariaDB', 'JavaScript'],
  caseStudy: {
    problem: 'Financial institutions relied on manual loan processing and fragmented systems, leading to inefficiencies and poor risk visibility.',
    goals: [
      'Automate loan lifecycle management',
      'Enable credit scoring and repayment analysis',
      'Integrate accounting and regulatory reporting',
      'Support scalable financial operations'
    ],
    constraints: [
      'Existing ERPNext architecture limitations',
      'Strict financial accuracy requirements',
      'Need for backward compatibility'
    ],
    role: 'ERP Developer responsible for customizing ERPNext modules, designing workflows, and implementing financial logic.',
    decisions: [
      {
        title: 'Customizing ERPNext Instead of Building from Scratch',
        explanation: 'Leveraged ERPNext’s existing accounting and ledger systems to reduce development time and risk.'
      },
      {
        title: 'Workflow-Based Loan Processing',
        explanation: 'Used Frappe workflows to enforce approval stages and compliance.'
      }
    ],
    challenges: [
      {
        challenge: 'Complex repayment and interest calculations',
        solution: 'Implemented custom server-side scripts with validation checks.'
      },
      {
        challenge: 'Ensuring data consistency across modules',
        solution: 'Used hooks and background jobs to synchronize loan and accounting data.'
      }
    ],
    outcome: [
      'Automated the full loan lifecycle from application to repayment',
      'Reduced manual processing errors through validation and workflow enforcement',
      'Improved visibility into loan performance and repayment status for decision-makers'
    ],
    improvements: [
      'Predictive risk analytics',
      'Advanced delinquency dashboards'
    ]
  }},
  {
    id: 8,
    title: 'Microfinance Management System',
    summary: 'ERP system for managing loans, savings, group lending, and financial reporting for microfinance institutions.',
    image: microfinance,
    category: 'erp',
    technologies: ['Frappe', 'ERPNext', 'Python', 'MariaDB', 'Redis', 'REST API'],
    caseStudy: {
      problem: 'Microfinance institutions relied on disconnected tools, limiting visibility into loans, savings, and client performance.',
      goals: [
        'Centralize microfinance operations',
        'Support individual and group lending',
        'Improve financial reporting accuracy',
        'Enable client communication via email'
      ],
      constraints: [
        'Complex regulatory requirements',
        'High transaction volumes',
        'Need for reliability and data integrity'
      ],
      role: 'ERP Developer responsible for customizing ERPNext modules and financial workflows.',
      decisions: [
        {
          title: 'ERPNext Customization',
          explanation: 'Leveraged existing accounting and reporting features to reduce risk.'
        },
        {
          title: 'Redis for Performance',
          explanation: 'Improved system responsiveness under heavy load.'
        }
      ],
      challenges: [
        {
          challenge: 'Managing group lending logic',
          solution: 'Designed custom workflows and validation rules.'
        }
      ],
      outcome: [
        'Centralized loans, savings, and client management into a single ERP system',
        'Improved visibility into individual and group lending performance',
        'Enhanced compliance and reporting accuracy through structured financial records'
      ],
      improvements: [
        'Real time Notifications',
        'Predictive risk analysis',
        'Client credit scoring models'
      ]
    }
  }  
  ];

  const filters = [
    { key: 'all' as const, label: 'All Projects', count: projects.length },
    { key: 'web' as const, label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile' as const, label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'erp' as const, label: 'ERP Systems', count: projects.filter(p => p.category === 'erp').length },
    { key: 'backend' as const, label: 'Backend Systems', count: projects.filter(p => p.category === 'backend').length }
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
            <div className="flex flex-col">
              <div className="relative bg-gradient-to-b from-primary-50 to-primary-100">
                <div className="inset-0 flex items-center justify-center">
                  <div className="text-center p-6 md:p-10">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full max-h-[360px] object-contain rounded-2xl shadow-md bg-white"
                    />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="text-primary-600 font-bold text-sm">
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
                  {currentProject.summary}
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

                {currentProject.caseStudy && (
                  <div className="mb-10 space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Project Context
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {currentProject.caseStudy.problem}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Goals
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {currentProject.caseStudy.goals.map((goal, index) => (
                            <li key={index}>{goal}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Constraints
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {currentProject.caseStudy.constraints.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          My Role
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {currentProject.caseStudy.role}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Outcomes
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {currentProject.caseStudy.outcome.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Key Decisions
                        </h4>
                        <ul className="space-y-3">
                          {currentProject.caseStudy.decisions.map((decision, index) => (
                            <li key={index} className="text-gray-700">
                              <p className="font-semibold text-gray-900">{decision.title}</p>
                              <p className="text-gray-700 text-sm">{decision.explanation}</p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Challenges & Solutions
                        </h4>
                        <ul className="space-y-3">
                          {currentProject.caseStudy.challenges.map((item, index) => (
                            <li key={index} className="text-gray-700">
                              <p className="font-semibold text-gray-900">{item.challenge}</p>
                              <p className="text-gray-700 text-sm">{item.solution}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Improvements
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {currentProject.caseStudy.improvements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

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