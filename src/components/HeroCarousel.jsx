import { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "WELCOME TO",
      subtitle: "AMLAK",
      subtitle2: "INTERNATIONAL",
      // Placeholder background - replace with your image
      background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #4f46e5 100%)",
      image: "https://via.placeholder.com/1920x1080/1e3a8a/ffffff?text=Hero+Background+1"
    },
    {
      title: "FINANCING",
      subtitle: "SOLUTIONS",
      subtitle2: "FOR YOUR FUTURE",
      // Placeholder background - replace with your image
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      image: "https://via.placeholder.com/1920x1080/0f172a/ffffff?text=Hero+Background+2"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-50px)] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            background: slide.background,
          }}
        >
          {/* Background Image Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/60 to-transparent" />

          {/* Content */}
          <div className="relative h-full w-[90%] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-light sm:mb-3 tracking-wide">
                {slide.title}
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold mb-1 sm:mb-2 tracking-tight">
                {slide.subtitle}
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold tracking-tight">
                {slide.subtitle2}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all z-10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-white w-6 sm:w-8' 
                : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
