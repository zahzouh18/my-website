import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeviceShowcase from "../components/DeviceShowcase";
import Navbar from "./Navbar";

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlan = (plan: string) => {
    setSelectedPlan(plan);
    navigate("/access", { state: { plan } });
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <Navbar />

      <main className="flex-grow px-4 py-10 md:py-16 relative z-10">
        {/* خلفية تأثير بلور ناعم */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div
            className="absolute -inset-[10px] z-0 opacity-20 blur-3xl"
            aria-hidden="true"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.2), rgba(255, 255, 255, 0) 70%)",
            }}
          ></div>
        </div>

        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4 text-sm font-medium">
            نظام متكامل لإدارة العيادات البيطرية
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            اختر خطة الاشتراك المناسبة لك
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-up" style={{ animationDelay: '400ms' }}>
            تمتع بكافة مزايا النظام الطبي البيطري بكل سهولة ومرونة، حسب احتياجك.
          </p>
        </div>

        {/* بطاقات الاشتراك */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 animate-fade-up" style={{ animationDelay: '600ms' }}>
          {/* خطة شهرية */}
          <div
            onClick={() => handlePlan("monthly")}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">اشتراك شهري</h2>
            <div className="flex justify-center items-baseline mb-4">
              <span className="text-3xl font-bold text-primary">$10</span>
              <span className="text-gray-500 mx-1">/ شهريًا</span>
            </div>
            <ul className="text-gray-600 space-y-2 text-center mb-6">
              <li>إدارة كاملة للمواعيد</li>
              <li>متابعة الحالات المرضية</li>
              <li>إدارة المخزون</li>
            </ul>
            <button className="w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
              اشترك الآن
            </button>
          </div>

          {/* خطة سنوية */}
          <div
            onClick={() => handlePlan("yearly")}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">اشتراك سنوي</h2>
            <div className="flex justify-center items-baseline mb-4">
              <span className="text-3xl font-bold text-green-600">$100</span>
              <span className="text-gray-500 mx-1">/ سنويًا</span>
            </div>
            <ul className="text-gray-600 space-y-2 text-center mb-6">
              <li>كل مميزات الخطة الشهرية</li>
              <li>تقارير مفصلة</li>
              <li>خصم 17% مقارنة بالشهري</li>
            </ul>
            <button className="w-full py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors">
              اشترك الآن
            </button>
          </div>
        </div>

        {/* عرض الأجهزة */}
        <div className="w-full bg-[#eff5f3] py-16 rounded-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-24 h-24 rounded-full bg-white blur-2xl"></div>
            <div className="absolute top-[40%] left-[80%] w-32 h-32 rounded-full bg-white blur-2xl"></div>
            <div className="absolute bottom-[10%] left-[30%] w-40 h-40 rounded-full bg-white blur-2xl"></div>
          </div>
          <div className="container mx-auto px-4">
            <h2 className="text-center text-black text-3xl font-bold mb-12">تطبيقنا متاح على جميع الأجهزة</h2>
            <div className="flex justify-center">
              <DeviceShowcase />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-10 border-t border-gray-100 text-center text-gray-500 text-sm">
        جميع الحقوق محفوظة © DrAnimal 2025
      </footer>
    </div>
  );
};

export default Subscription;
