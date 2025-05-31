import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import QRCodeScanner from '../components/QRCodeScanner';
import UserInfoForm from '../components/UserInfoForm';
import PaymentProof from '../components/PaymentProof';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Access = () => {
  const [step, setStep] = useState(0);
  
  const handleFormSubmit = () => {
    setStep(1);
  };
  
  const handleScanComplete = () => {
    setStep(2);
  };
  
  const handleProofSubmitted = () => {
    setStep(3);
  };
  
  const handleGoBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 1) {
      setStep(0);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      <Navbar />
      
      <main className="pt-20 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 pt-12 animate-fade-up">
              <span className="inline-flex items-center rounded-full px-4 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary">
                شراء اشتراك
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">احصل على اشتراك الخاص بك</h1>
              <p className="text-lg text-muted-foreground">
                أدخل معلوماتك، امسح رمز QR، وأرسل إثبات الدفع للحصول على اشتراك إلى منظومتنا
              </p>
            </div>
            
            <div className="mb-12">
              <div className="flex justify-center items-center mb-12">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 0 ? <CheckCircle2 className="h-5 w-5" /> : "1"}
                </div>
                <div className={`h-1 w-16 md:w-24 ${
                  step >= 1 ? 'bg-primary' : 'bg-gray-200'
                }`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 1 ? <CheckCircle2 className="h-5 w-5" /> : "2"}
                </div>
                <div className={`h-1 w-16 md:w-24 ${
                  step >= 2 ? 'bg-primary' : 'bg-gray-200'
                }`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 2 ? <CheckCircle2 className="h-5 w-5" /> : "3"}
                </div>
                <div className={`h-1 w-16 md:w-24 ${
                  step >= 3 ? 'bg-primary' : 'bg-gray-200'
                }`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 3 ? <CheckCircle2 className="h-5 w-5" /> : "4"}
                </div>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="text-center w-24">
                  <p className={`font-medium ${step === 0 ? 'text-primary' : 'text-foreground'}`}>
                    المعلومات
                  </p>
                </div>
                <div className="w-16 md:w-24"></div>
                <div className="text-center w-24">
                  <p className={`font-medium ${step === 1 ? 'text-primary' : 'text-foreground'}`}>
                    مسح الرمز
                  </p>
                </div>
                <div className="w-16 md:w-24"></div>
                <div className="text-center w-24">
                  <p className={`font-medium ${step === 2 ? 'text-primary' : 'text-foreground'}`}>
                    إثبات الدفع
                  </p>
                </div>
                <div className="w-16 md:w-24"></div>
                <div className="text-center w-24">
                  <p className={`font-medium ${step === 3 ? 'text-primary' : 'text-foreground'}`}>
                    الاكتمال
                  </p>
                </div>
              </div>
            </div>
            
            <div className="transition-all duration-500">
              {step === 0 && (
                <div className="animate-fade-in">
                  <UserInfoForm onSubmit={handleFormSubmit} />
                </div>
              )}
              
              {step === 1 && (
                <div className="animate-fade-in">
                  <QRCodeScanner onScanComplete={handleScanComplete} />
                </div>
              )}
              
              {step === 2 && (
                <div className="animate-fade-in">
                  <PaymentProof onProofSubmitted={handleProofSubmitted} onBack={handleGoBack} />
                </div>
              )}
              
              {step === 3 && (
                <div className="animate-fade-in w-full max-w-md mx-auto">
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-smooth p-8 text-center">
                    <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">تمت العملية بنجاح!</h3>
                    <p className="text-muted-foreground mb-6">
                      تم استلام طلبك وسيتم إرسال تفاصيل اشتراكك إلى بريدك الإلكتروني قريبًا. يرجى التحقق من صندوق الوارد الخاص بك.
                    </p>
                    
                    <Link 
                      to="/"
                      className="w-full inline-block px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors"
                    >
                      العودة إلى الرئيسية
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-foreground">Dr Animal</h3>
              <p className="text-muted-foreground mt-2">الحل الأمثل لإدارة العيادات البيطرية</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">الرئيسية</a>
              <a href="/#features" className="text-foreground hover:text-primary transition-colors">خدماتنا</a>
              <a href="/Subscription" className="text-foreground hover:text-primary transition-colors">الاشتراك</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Dr Animal. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Access;
