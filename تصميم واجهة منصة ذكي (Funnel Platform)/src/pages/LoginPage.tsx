import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, Lock, Eye, EyeOff, UserCircle, Users } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'student' | 'parent'>('student');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6C4EE3]/5 via-white to-[#FFD447]/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Right Side - Illustration */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF] rounded-3xl p-12 shadow-2xl shadow-[#6C4EE3]/30">
              <div className="text-white space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-white text-3xl">ذ</span>
                  </div>
                  <div>
                    <h2 className="text-3xl">ذكي</h2>
                    <p className="opacity-90">Thaki</p>
                  </div>
                </div>
                
                <h3 className="text-3xl leading-relaxed">
                  مرحباً بعودتك! 👋
                </h3>
                <p className="text-xl opacity-90 leading-relaxed">
                  ابدأ رحلتك التعليمية واكتشف عالماً من المعرفة والمرح
                </p>
                
                <div className="space-y-4 pt-8">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-12 h-12 bg-[#FFD447] rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <p>دروس تفاعلية</p>
                      <p className="text-sm opacity-75">تعلم بطريقة ممتعة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-12 h-12 bg-[#FFD447] rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <p>إنجازات ومكافآت</p>
                      <p className="text-sm opacity-75">احصل على نقاط مع كل درس</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#FFD447] rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#6C4EE3] rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>

        {/* Left Side - Login Form */}
        <div className="w-full">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            {/* Logo for mobile */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#6C4EE3]/30">
                <span className="text-white text-2xl">ذ</span>
              </div>
              <h1 className="text-2xl text-[#4A2FBF]">ذكي</h1>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl text-[#4A2FBF] mb-2">تسجيل الدخول</h2>
              <p className="text-gray-600">أدخل بياناتك للمتابعة</p>
            </div>

            {/* User Type Selection */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setUserType('student')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-200 ${
                  userType === 'student'
                    ? 'bg-[#6C4EE3] text-white shadow-lg shadow-[#6C4EE3]/20'
                    : 'bg-[#F3F3F6] text-gray-600 hover:bg-gray-200'
                }`}
              >
                <UserCircle className="w-5 h-5" />
                <span>طالب</span>
              </button>
              <button
                onClick={() => setUserType('parent')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-200 ${
                  userType === 'parent'
                    ? 'bg-[#6C4EE3] text-white shadow-lg shadow-[#6C4EE3]/20'
                    : 'bg-[#F3F3F6] text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>ولي الأمر</span>
              </button>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
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
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#6C4EE3] focus:ring-[#6C4EE3]" />
                  <span className="text-sm text-gray-600">تذكرني</span>
                </label>
                <button type="button" className="text-sm text-[#6C4EE3] hover:text-[#4A2FBF]">
                  نسيت كلمة المرور؟
                </button>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" size="lg" className="w-full">
                تسجيل الدخول
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                ليس لديك حساب؟{' '}
                <button
                  onClick={() => onNavigate('signup')}
                  className="text-[#6C4EE3] hover:text-[#4A2FBF]"
                >
                  إنشاء حساب جديد
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
      </div>
    </div>
  );
}
