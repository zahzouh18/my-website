
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0.1);
      const scale = Math.max(1 - scrollY / 5000, 0.95);
      const translateY = scrollY * 0.3;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] z-0 opacity-30 blur-3xl" aria-hidden="true" style={{
          background: "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.2), rgba(255, 255, 255, 0) 70%)"
        }}></div>
      </div>
      
      <div ref={heroRef} className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center transition-all duration-200 ease-out">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center rounded-full px-4 py-1 mb-6 text-xs font-medium bg-primary/10 text-primary">
              نظام متكامل لإدارة العيادات البيطرية
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            الحل الأمثل لإدارة
            <span className="text-primary px-2">العيادات البيطرية</span>
            بكفاءة عالية
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
            منظومة متكاملة لإدارة العيادات البيطرية، تساعد الأطباء البيطريين على متابعة الحالات المرضية، جدولة المواعيد، وإدارة المخزون بكل سهولة
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <Link to="/Subscription" className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] active:translate-y-[0px]">
             اشتراك
            </Link>
            <a 
              href="#features" 
              className="px-6 py-3 bg-white text-foreground font-semibold rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              تعرف على خدماتنا
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#features" 
          className="bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-md hover:shadow-lg transition-all"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
