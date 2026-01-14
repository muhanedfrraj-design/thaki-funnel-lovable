import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, Lock, Eye, EyeOff, User, Phone } from 'lucide-react';

interface SignupPageProps {
  onNavigate: (page: string) => void;
}

export function SignupPage({ onNavigate }: SignupPageProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFD447]/5 via-white to-[#6C4EE3]/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Form */}
        <div className="w-full order-2 lg:order-1">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            {/* Logo for mobile */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#6C4EE3]/30">
                <span className="text-white text-2xl">ذ</span>
              </div>
              <h1 className="text-2xl text-[#4A2FBF]">ذكي</h1>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl text-[#4A2FBF] mb-2">إنشاء حساب جديد</h2>
              <p className="text-gray-600">انضم إلى عائلة ذكي وابدأ رحلتك التعليمية</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
              {/* Name Input */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">الاسم الكامل</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none transition-all duration-200"
                    required
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">البريد الإلكتروني</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none transition-all duration-200"
                    required
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">رقم الجوال</label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="05xxxxxxxx"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none transition-all duration-200"
                    required
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none transition-all duration-200"
                    required
                  />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">يجب أن تحتوي على 8 أحرف على الأقل</p>
              </div>

              {/* Terms & Conditions */}
              <div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-[#6C4EE3] focus:ring-[#6C4EE3]" 
                    required
                  />
                  <span className="text-sm text-gray-600">
                    أوافق على{' '}
                    <button type="button" className="text-[#6C4EE3] hover:text-[#4A2FBF]">
                      الشروط والأحكام
                    </button>
                    {' '}و{' '}
                    <button type="button" className="text-[#6C4EE3] hover:text-[#4A2FBF]">
                      سياسة الخصوصية
                    </button>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" size="lg" className="w-full">
                إنشاء الحساب
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                لديك حساب بالفعل؟{' '}
                <button
                  onClick={() => onNavigate('login')}
                  className="text-[#6C4EE3] hover:text-[#4A2FBF]"
                >
                  تسجيل الدخول
                </button>
              </p>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <button
                onClick={() => onNavigate('home')}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                ← العودة للرئيسية
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:block order-1 lg:order-2">
          <div className="relative">
            <div className="bg-gradient-to-br from-[#FFD447] to-[#FFC107] rounded-3xl p-12 shadow-2xl shadow-[#FFD447]/30">
              <div className="text-[#1A1A1A] space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-16 h-16 bg-[#6C4EE3] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-3xl">ذ</span>
                  </div>
                  <div>
                    <h2 className="text-3xl text-[#4A2FBF]">ذكي</h2>
                    <p className="text-gray-700">Thaki</p>
                  </div>
                </div>
                
                <h3 className="text-3xl leading-relaxed text-[#4A2FBF]">
                  انضم إلينا اليوم! 🚀
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  ابدأ رحلة تعليمية ممتعة مليئة بالإنجازات والمكافآت
                </p>
                
                <div className="space-y-4 pt-8">
                  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-12 h-12 bg-[#6C4EE3] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <p className="text-[#4A2FBF]">مجاني تماماً</p>
                      <p className="text-sm text-gray-600">ابدأ التعلم بدون أي تكلفة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-12 h-12 bg-[#6C4EE3] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <p className="text-[#4A2FBF]">محتوى تعليمي متنوع</p>
                      <p className="text-sm text-gray-600">مئات الدروس التفاعلية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-12 h-12 bg-[#6C4EE3] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🏅</span>
                    </div>
                    <div>
                      <p className="text-[#4A2FBF]">شهادات ومكافآت</p>
                      <p className="text-sm text-gray-600">احصل على إنجازات فريدة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#6C4EE3] rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#FFD447] rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
