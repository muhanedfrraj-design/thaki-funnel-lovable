import React from 'react';
import { Button } from '../components/Button';
import { Sparkles, Brain, Trophy, Users, BookOpen, Star, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroImage from 'figma:asset/cffb4d8e77b64c493219061192e48fcda35c2965.png';
import logo from 'figma:asset/89b6f04af5e715d59a849819021160ddb1113e3d.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    { icon: Brain, title: 'تعليم ذكي', description: 'تعلم بطريقة تفاعلية مع الذكاء الاصطناعي' },
    { icon: Trophy, title: 'إنجازات وجوائز', description: 'احصل على نقاط ومكافآت مع كل درس' },
    { icon: Users, title: 'معلمون محترفون', description: 'تعلم من أفضل المعلمين' },
    { icon: BookOpen, title: 'مناهج متنوعة', description: 'محتوى تعليمي شامل ومتطور' },
  ];

  const plans = [
    {
      name: '3 أشهر',
      price: '899',
      duration: 'لمدة 3 أشهر',
      features: [
        'جلسة تعريفية مجانية.',
        'جميع الحسابات تفاعلية ومباشرة.',
        'دعم فني واستشارات للأهل.',
        'تحديد مستوى الطالب وتصميم مساراته التعليمية.',
      ],
      highlight: false,
    },
    {
      name: '6 أشهر',
      price: '1799',
      duration: 'لمدة 6 أشهر',
      features: [
        'جلسة تعريفية مجانية.',
        'جميع الحسابات تفاعلية ومباشرة.',
        'دعم فني واستشارات للأهل.',
        'تحديد مستوى الطالب وتصميم مساراته التعليمية.',
        'إمكانية تجديد 4 دروس مجاناً.',
      ],
      highlight: true,
    },
    {
      name: 'سنــة',
      price: '3599',
      duration: 'لمدة سنة كاملة',
      features: [
        'جلسة تعريفية مجانية.',
        'جميع الحسابات تفاعلية ومباشرة.',
        'دعم فني واستشارات للأهل.',
        'تحديد مستوى الطالب وتصميم مساراته التعليمية.',
        'إمكانية تجديد 8 دروس مجاناً.',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F3F3F6]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="ذكي" className="h-12 w-auto" />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="md" onClick={() => onNavigate('login')}>
              تسجيل الدخول
            </Button>
            <Button variant="primary" size="md" onClick={() => onNavigate('signup')}>
              إنشاء حساب
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FFD447]/20 text-[#1A1A1A] px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-[#FFD447]" />
              <span>منصة التعليم الذكي للأطفال</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl text-[#4A2FBF] leading-tight">
              تعلّم بذكاء
              <br />
              <span className="text-[#6C4EE3]">مع ذكي</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              منصة تعليمية تفاعلية تستخدم الذكاء الاصطناعي لمساعدة الأطفال على التعلم بطريقة ممتعة وفعالة
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" onClick={() => onNavigate('signup')}>
                ابدأ التعلم مجاناً
                <Sparkles className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('login')}>
                لدي حساب بالفعل
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div>
                <div className="flex items-center gap-1 text-[#FFD447]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">أكثر من 10,000 طالب سعيد</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-[#6C4EE3]/10 to-[#FFD447]/10 rounded-3xl p-8 backdrop-blur-sm">
              <img
                src={heroImage}
                alt="AI Tutor - معلم ذكي"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFD447] rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#6C4EE3] rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#4A2FBF] mb-4">لماذا ذكي؟</h2>
          <p className="text-xl text-gray-600">تعلم بطريقة ذكية وممتعة</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#6C4EE3]/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-[#4A2FBF] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#4A2FBF] mb-4">اختر الخطة المناسبة لك</h2>
          <p className="text-xl text-gray-600">ابدأ رحلتك التعليمية مع أفضل الباقات</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:scale-105 ${
                plan.highlight ? 'ring-4 ring-[#FFD447] transform scale-105' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD447] text-[#1A1A1A] px-6 py-2 rounded-full shadow-lg">
                  <span>الأكثر شعبية</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-3xl text-[#4A2FBF] mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.duration}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl text-[#4A2FBF]">{plan.price}</span>
                  <span className="text-2xl text-gray-600 mb-2">ريال</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#10B981]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                size="lg"
                className="w-full"
                onClick={() => onNavigate('signup')}
              >
                اشترك الآن
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF] rounded-3xl p-12 text-center text-white shadow-2xl shadow-[#6C4EE3]/30">
          <h2 className="text-4xl mb-4">جاهز للبدء؟</h2>
          <p className="text-xl mb-8 opacity-90">انضم إلى آلاف الطلاب وابدأ رحلتك التعليمية اليوم</p>
          <Button variant="secondary" size="lg" onClick={() => onNavigate('signup')}>
            ابدأ الآن مجاناً
            <Sparkles className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500 border-t border-gray-100">
        <p>© 2025 ذكي - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}