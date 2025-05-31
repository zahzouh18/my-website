import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Index = () => {
  // Smooth scroll to element when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a slight delay to ensure animations complete
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Handle hash on initial page load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      <main className="pt-0">
        <Hero />
        <Features />

      
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ابدأ باستخدام منظومتنا اليوم
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                ارتقِ بعيادتك البيطرية مع نظام إدارة متكامل يوفر لك الوقت والجهد ويساعدك على تقديم أفضل رعاية للحيوانات
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/subscription" 
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
                >
                  احصل على اشتراك
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="mt-8 pt-8 border-t border-gray-100 text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} منظومة العيادات البيطرية. جميع الحقوق محفوظة</p>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
