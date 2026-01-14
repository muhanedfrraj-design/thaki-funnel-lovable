import { useState } from 'react';
import { User as UserIcon, Lock, LogIn } from 'lucide-react';
import { User, UserRole } from '../App';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - في الواقع سيتم التحقق من قاعدة البيانات
    const mockUser: User = {
      id: Math.random().toString(),
      name: email.split('@')[0],
      email,
      role: selectedRole
    };
    
    onLogin(mockUser);
  };

  const roles = [
    { value: 'student', label: 'طالب / عميل', icon: '🎓' },
    { value: 'teacher', label: 'مدرس', icon: '👨‍🏫' },
    { value: 'sales', label: 'موظف مبيعات', icon: '💼' },
    { value: 'admin', label: 'مدير', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-br from-[#6C4EE3] to-[#8B6EFF] p-4 rounded-3xl mb-4 shadow-lg">
            <div className="text-white text-4xl">🧠</div>
          </div>
          <h1 className="text-3xl mb-2" style={{ color: '#6C4EE3' }}>
            منصة ذكي
          </h1>
          <p className="text-gray-600">نظام إدارة الحصص المجانية</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ color: '#6C4EE3' }}>
            تسجيل الدخول
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block mb-3 text-gray-700">اختر نوع الحساب</label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setSelectedRole(role.value as UserRole)}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      selectedRole === role.value
                        ? 'border-[#6C4EE3] bg-purple-50 shadow-md'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{role.icon}</div>
                    <div className="text-sm">{role.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-700">البريد الإلكتروني</label>
              <div className="relative">
                <UserIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#6C4EE3] focus:outline-none transition-colors"
                  placeholder="example@thaki.com"
                  required
                  dir="ltr"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-gray-700">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#6C4EE3] focus:outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              style={{ background: 'linear-gradient(135deg, #6C4EE3 0%, #8B6EFF 100%)' }}
            >
              <LogIn size={20} />
              <span>تسجيل الدخول</span>
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-2xl border-2 border-yellow-200">
            <p className="text-sm text-gray-600 mb-2">للتجربة السريعة:</p>
            <p className="text-xs text-gray-500">أدخل أي بريد إلكتروني وكلمة مرور، ثم اختر نوع الحساب</p>
          </div>
        </div>
      </div>
    </div>
  );
}
