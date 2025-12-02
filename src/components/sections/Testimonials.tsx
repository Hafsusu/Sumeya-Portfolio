import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '../../types';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Mengistu Abebe',
      position: 'CEO',
      company: 'Simbatech Trading PLC',
      content: 'Working with Sumeya has been an exceptional experience. Her commitment to delivering high-quality work ahead of deadlines, combined with her meticulous attention to detail, consistently exceeds expectations. She brings innovative solutions to complex challenges and demonstrates remarkable problem-solving abilities.',
      avatar: 'MA',
      rating: 5,
    },
    {
      id: 2,
      name: 'Seid Getachew',
      position: 'Co-Founder',
      company: 'Simbatech Trading PLC',
      content: 'Sumeya\'s technical expertise and work ethic are truly impressive. She consistently delivers robust solutions that not only meet requirements but anticipate future needs. Her ability to think beyond conventional approaches has significantly contributed to our project\'s success and operational efficiency.',
      avatar: 'SG',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sami Mohammed',
      position: 'CEO and Founder',
      company: 'Fineto IoT Products',
      content: 'Sumeya combines technical proficiency with exceptional project management skills. Her dedication to quality and timely delivery has been instrumental in our digital transformation. She consistently goes above and beyond to ensure solutions are both innovative and practical for real-world applications.',
      avatar: 'SM',
      rating: 5,
    },
    {
      id: 4,
      name: 'Deme Bahiru',
      position: 'Co-Founder',
      company: 'Ethionyx IT Solutions',
      content: 'Having mentored Sumeya during her time at Fineto, I\'ve witnessed her remarkable growth into an outstanding professional. Her ability to quickly grasp complex concepts and translate them into effective solutions is exceptional. She consistently demonstrates initiative, creativity, and a commitment to excellence in every project.',
      avatar: 'DB',
      rating: 5,
    },
    {
      id: 5,
      name: 'Ekram Hussen',
      position: 'Co-Founder',
      company: 'EAGLE Mobile Livestock Care',
      content: 'Sumeya delivered an outstanding website for our livestock care organization. Her understanding of our mission to connect farmers with veterinary services was exceptional. The platform has significantly improved our outreach and operational efficiency.',
      avatar: 'EH',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="pt-16 pb-0 px-6 md:px-12 lg:px-24 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Clients <span className="text-primary-600">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from clients and partners who have worked with me on various projects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="relative">
            <div className="relative z-10 bg-primary-50 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-primary-50 p-6 md:p-10 text-white">
                  <div className="h-full flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary-500 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold mb-4 border-4 border-white/30">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary-600">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-primary-400 font-medium mb-1">
                        {testimonials[currentTestimonial].position}
                      </p>
                      <p className="text-primary-500">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentTestimonial].rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 text-primary-300 w-8 h-8" />
                    <p className="text-lg md:text-l text-gray-700 leading-relaxed italic pl-6">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">
                        {currentTestimonial + 1} / {testimonials.length}
                      </span>
                      <div className="flex gap-1">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              index === currentTestimonial
                                ? 'bg-primary-600 w-4'
                                : 'bg-gray-300 hover:bg-primary-400'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={prevTestimonial}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;