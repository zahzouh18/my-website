import React, { useState } from 'react';
import { Upload, Check, ArrowRight, Image as ImageIcon, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface PaymentProofProps {
  onProofSubmitted: () => void;
  onBack: () => void;
}

const PaymentProof: React.FC<PaymentProofProps> = ({ onProofSubmitted, onBack }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [hasUploaded, setHasUploaded] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !(file.type === "image/jpeg" || file.type === "image/png")) {
      alert("يرجى رفع صورة بصيغة JPG أو PNG فقط.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'payment_proofs'); 

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/dhlu4qzrf/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setImageUrl(data.secure_url);
      setPreviewUrl(data.secure_url);
      setHasUploaded(true);
    } catch (err) {
      console.error("فشل رفع الصورة إلى Cloudinary:", err);
      alert("حدث خطأ أثناء رفع الصورة. حاول مجددًا.");
    } finally {
      setIsUploading(false);
    }
  };

  const sendAllData = () => {
    if (!hasUploaded || !imageUrl) return;
    setIsUploading(true);

    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");
    if (!userInfo) {
      alert("لا توجد معلومات مستخدم محفوظة!");
      setIsUploading(false);
      return;
    }

    const templateParams = {
      user_name: userInfo?.user_name || "غير معروف",
      user_email: userInfo?.user_email || "غير معروف",
      user_phone: userInfo?.user_phone || "غير معروف",
      payment_proof: imageUrl, // ✅ الآن نرسل رابط Cloudinary
    };

    emailjs.send("service_reyph7f", "template_p4dqx8d", templateParams, "2zWFY60B2VuNbjBFQ")
      .then(() => {
        alert("تم إرسال إثبات الدفع بنجاح!");
        setIsUploading(false);
        onProofSubmitted();
      })
      .catch((error) => {
        console.error("خطأ في إرسال البيانات:", error);
        alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
        setIsUploading(false);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-smooth p-8">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-primary/5 rounded-xl flex items-center justify-center">
            <Upload className="h-12 w-12 text-primary" />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-center">إرسال إثبات الدفع</h3>
        <p className="text-muted-foreground mb-6 text-center">
          بعد إتمام عملية الدفع عبر بريدي موب، يرجى إرسال صورة كدليل على الدفع
        </p>

        {hasUploaded && previewUrl ? (
          <div className="mb-6">
            <div className="relative w-full h-64 border-2 border-dashed border-primary/30 rounded-xl mb-2 overflow-hidden">
              <img src={previewUrl} alt="Payment proof preview" className="w-full h-full object-contain" />
              <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full">
                <Check className="h-4 w-4" />
              </div>
            </div>
            <p className="text-sm text-center text-green-600">تم رفع الصورة بنجاح</p>
          </div>
        ) : (
          <div className="mb-6">
            <label htmlFor="proof-upload" className="block">
              <div className="w-full h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
                <ImageIcon className="h-16 w-16 text-gray-400 mb-4" />
                <p className="text-muted-foreground">انقر هنا لرفع صورة إثبات الدفع</p>
                <p className="text-xs text-muted-foreground mt-2">يدعم JPG، PNG بحجم أقصى 5MB</p>
              </div>
              <input 
                id="proof-upload" 
                type="file" 
                accept="image/jpeg, image/png" 
                className="hidden" 
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={sendAllData}
            disabled={!hasUploaded || isUploading}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white ${!hasUploaded || isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90 transition-colors'}`}
          >
            {isUploading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                جاري إرسال الإثبات...
              </>
            ) : (
              <>
                إرسال إثبات الدفع
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          <button
            onClick={onBack}
            disabled={isUploading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-xl font-medium text-foreground hover:bg-gray-50 transition-colors"
          >
            العودة
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProof;
