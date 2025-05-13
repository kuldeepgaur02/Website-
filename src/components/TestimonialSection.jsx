import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor">
    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162C3.249 8.343 3.022 8.811 2.81 9.315c-.19.497-.4 1.004-.51 1.516-.121.497-.189 1.011-.21 1.516-.023.505.004 1.009.082 1.496.061.511.166 1.02.317 1.49.161.469.343.945.562 1.351.225.405.506.783.779 1.108.297.355.609.65.937.885.346.243.696.428 1.04.572.377.172.691.319.691.319l.641-1.71c0 0-.2-.067-.45-.159-.228-.09-.495-.222-.736-.375-.229-.13-.48-.302-.682-.518-.215-.203-.383-.458-.55-.701-.148-.26-.279-.531-.377-.841-.092-.279-.131-.616-.181-.92-.07-.321-.078-.65-.067-.973-.012-.145.015-.275.015-.443.039-.404.067-.722.145-1.051.06-.335.125-.602.22-.872z"/>
    <path d="M18 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L21.258 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.242.408-.47.875-.681 1.379-.19.497-.4 1.004-.51 1.516-.121.497-.189 1.011-.21 1.516-.023.505.004 1.009.082 1.496.061.511.166 1.02.317 1.49.161.469.343.945.562 1.351.225.405.506.783.779 1.108.297.355.609.65.937.885.346.243.696.428 1.04.572.377.172.691.319.691.319l.641-1.71c0 0-.2-.067-.45-.159-.228-.09-.495-.222-.736-.375-.229-.13-.48-.302-.682-.518-.215-.203-.383-.458-.55-.701-.148-.26-.279-.531-.377-.841-.092-.279-.131-.616-.181-.92-.07-.321-.078-.65-.067-.973-.012-.145.015-.275.015-.443.039-.404.067-.722.145-1.051.06-.335.125-.602.22-.872z"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala",
    role: "Marketing Director",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "The team transformed our online presence completely. Their attention to detail and commitment to excellence made all the difference in our digital marketing efforts.",
  },
  {
    id: 2,
    name: "Jessica Martinez",
    role: "Small Business Owner",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/90.jpg", 
    text: "As a small business owner, I needed affordable but effective solutions. They delivered beyond my expectations and were always available to answer my questions.",
  },
  {
    id: 3,
    name: "Rohan Smith",
    role: "E-commerce Manager",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "We saw a 40% increase in conversions within the first three months. Their data-driven approach and regular reporting helped us understand exactly what was working.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Startup Founder",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them most.",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Tech Consultant",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business growth.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Creative Director",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200 mr-3 sm:mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/100/100";
            }}
          />
        </div>
        <div>
          <h3 className="font-semibold text-base sm:text-lg">{testimonial.name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`inline-block ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            <StarIcon />
          </span>
        ))}
      </div>
      
      <div className="relative flex-grow">
        <span className="absolute -left-1 -top-1 text-indigo-100 opacity-50">
          <QuoteIcon />
        </span>
        <p className="text-gray-700 text-sm sm:text-base italic pl-3 sm:pl-4 relative z-10">{testimonial.text}</p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  useEffect(() => {
    // Initialize any JS needed after mount
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-indigo-600 font-medium text-xs sm:text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 mt-1 sm:mt-2">
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base px-2">
            Don't just take our word for it - hear from some of our satisfied clients who have experienced the difference our services make.
          </p>
        </div>

        <div className="relative px-1 sm:px-4 md:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation buttons with responsive sizes and touch-friendly targets */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-indigo-600 rounded-full shadow-md p-2 sm:p-3 hidden md:flex items-center justify-center focus:outline-none hover:bg-indigo-50 transition-all duration-200">
            <ChevronLeftIcon />
          </button>
          
          <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-indigo-600 rounded-full shadow-md p-2 sm:p-3 hidden md:flex items-center justify-center focus:outline-none hover:bg-indigo-50 transition-all duration-200">
            <ChevronRightIcon />
          </button>
        </div>

        {/* Small screen swipe instruction */}
        <div className="text-center text-gray-400 text-xs mt-2 md:hidden">
          Swipe left or right to see more testimonials
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;