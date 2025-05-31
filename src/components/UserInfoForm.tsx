import React, { useState } from "react";
import { User, Mail, Phone, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

interface UserInfoFormProps {
  onSubmit: () => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setMessage("يرجى ملء جميع الحقول");
      return;
    }

    setLoading(true);
    setMessage("");

    const userInfo = {
      user_name: name,
      user_email: email,
      user_phone: phone,
    };

    // تخزين المعلومات في localStorage فقط
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // إظهار رسالة نجاح مؤقتة ثم الانتقال
    setTimeout(() => {
      setMessage("تم حفظ المعلومات بنجاح ✅");
      setLoading(false);
      onSubmit(); // الانتقال إلى الخطوة التالية
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-smooth p-8">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-primary/5 rounded-xl flex items-center justify-center">
            <User className="h-12 w-12 text-primary" />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-center">أدخل معلوماتك</h3>
        <p className="text-muted-foreground mb-6 text-center">
          يرجى إدخال معلوماتك للحصول على رمز الوصول
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              الاسم الكامل
            </label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pr-10 text-right"
                placeholder="أدخل اسمك الكامل"
                required
              />
              <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-10 text-right"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              رقم الهاتف
            </label>
            <div className="relative">
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pr-10 text-right"
                placeholder="أدخل رقم هاتفك"
                required
              />
              <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {message && <p className="text-center text-sm text-green-600">{message}</p>}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
            disabled={loading}
          >
            {loading ? "جاري المعالجة..." : "متابعة"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoForm;
