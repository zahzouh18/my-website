
import React from 'react';
import { 
  UserRound, 
  Calendar, 
  Stethoscope, 
  Receipt, 
  PillIcon, 
  Bell, 
  Syringe, 
  Video,
  Users,
  MapPin,
  FileText,
  Clock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "تسجيل الأطباء البيطريين",
      description: "سجل في النظام بسهولة وأدر عيادتك من أي مكان",
      icon: <UserRound className="h-10 w-10 text-primary" />
    },
    {
      title: "إدارة العيادات",
      description: "أنشئ عيادتك وأضف الأطباء المساعدين وحدد ساعات العمل",
      icon: <Stethoscope className="h-10 w-10 text-primary" />
    },
    {
      title: "إدارة المرضى",
      description: "سجل بيانات الحيوانات وتابع تاريخها المرضي",
      icon: <FileText className="h-10 w-10 text-primary" />
    },
    {
      title: "إدارة المواعيد",
      description: "سجل وتابع المواعيد وجدول المتابعات والعمليات الجراحية",
      icon: <Calendar className="h-10 w-10 text-primary" />
    },
    {
      title: "إدارة الفواتير",
      description: "أصدر الفواتير ونظم المدفوعات بطريقة مبسطة",
      icon: <Receipt className="h-10 w-10 text-primary" />
    },
    {
      title: "إدارة المخزون",
      description: "سجل الأدوية وتتبع المخزون مع تنبيهات الانخفاض",
      icon: <PillIcon className="h-10 w-10 text-primary" />
    },
    {
      title: "التنبيهات والإشعارات",
      description: "استلم إشعارات المواعيد القادمة والحالات الطارئة",
      icon: <Bell className="h-10 w-10 text-primary" />
    },
    {
      title: "متابعة العلاجات",
      description: "متابعة دقيقة للعلاجات والهرمونات المقدمة للحيوانات",
      icon: <Syringe className="h-10 w-10 text-primary" />
    },
    {
      title: "مشاركة المحتوى التوعوي",
      description: "انشر مقاطع فيديو ومقالات توعوية للمستخدمين",
      icon: <Video className="h-10 w-10 text-primary" />
    },
    {
      title: "التواصل مع المستخدمين",
      description: "تواصل مباشر مع مالكي الحيوانات للاستشارات السريعة",
      icon: <Users className="h-10 w-10 text-primary" />
    },
    {
      title: "تحديد الموقع الجغرافي",
      description: "حدد أقرب طبيب بيطري في حالات الطوارئ",
      icon: <MapPin className="h-10 w-10 text-primary" />
    },
    {
      title: "ساعات العمل المرنة",
      description: "حدد أوقات عملك وتلقى الحجوزات المناسبة",
      icon: <Clock className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full px-4 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">منظومة متكاملة تلبي جميع احتياجات العيادات البيطرية</h2>
          <p className="text-lg text-muted-foreground">
            صممنا نظامًا شاملًا يغطي كافة جوانب إدارة العيادات البيطرية، من تسجيل المرضى إلى إدارة المخزون والمتابعة المستمرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-smooth hover:shadow-lg transition-all hover:translate-y-[-4px] group"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
