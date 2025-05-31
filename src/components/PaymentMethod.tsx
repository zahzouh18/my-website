
import React, { useState } from 'react';
import { CreditCard, Check, ArrowLeft, Loader2 } from 'lucide-react';

interface PaymentMethodProps {
  onPaymentComplete: () => void;
  onBack: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ onPaymentComplete, onBack }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      
      // Move to complete state after showing success
      setTimeout(() => {
        onPaymentComplete();
      }, 1500);
    }, 2000);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-smooth p-8">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-primary/5 rounded-xl flex items-center justify-center">
            <CreditCard className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center">الدفع عبر بريدي موب</h3>
        
        {isComplete ? (
          <div className="flex items-center justify-center flex-col py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-scale-in">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-medium text-green-600 mb-2">تمت عملية الدفع بنجاح</h4>
            <p className="text-muted-foreground text-center">سيتم إرسال رمز الوصول الخاص بك عبر البريد الإلكتروني</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between p-4 border border-gray-200 rounded-lg">
                <span className="font-medium">رمز وصول لمدة شهر</span>
                <span className="font-bold">1,500 د.ج</span>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">سعر الخدمة</span>
                  <span>1,500 د.ج</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">الضريبة</span>
                  <span>0 د.ج</span>
                </div>
                <div className="h-px bg-gray-200 my-2"></div>
                <div className="flex justify-between font-bold">
                  <span>المجموع</span>
                  <span>1,500 د.ج</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white ${
                  isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90 transition-colors'
                }`}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    جاري معالجة الدفع...
                  </>
                ) : (
                  'الدفع الآن'
                )}
              </button>
              
              <button
                onClick={onBack}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-xl font-medium text-foreground hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                العودة
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
