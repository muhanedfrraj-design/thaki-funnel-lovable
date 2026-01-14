import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { User, Mail, Phone, Calendar, MapPin, Edit, Camera, Shield, Bell, Lock } from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);

  const studentInfo = {
    name: 'أحمد محمد العلي',
    email: 'ahmad@example.com',
    phone: '0501234567',
    birthDate: '2015-05-15',
    grade: 'الصف الرابع الابتدائي',
    school: 'مدرسة النور الابتدائية',
    city: 'الرياض',
    joinDate: '2024-09-01',
  };

  const parentInfo = {
    name: 'محمد العلي',
    email: 'mohammed@example.com',
    phone: '0509876543',
  };

  const academicHistory = [
    { year: '2024-2025', grade: 'الصف الرابع', average: '92%', status: 'جاري' },
    { year: '2023-2024', grade: 'الصف الثالث', average: '89%', status: 'مكتمل' },
    { year: '2022-2023', grade: 'الصف الثاني', average: '91%', status: 'مكتمل' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#4A2FBF] mb-2">الملف الشخصي</h1>
        <p className="text-gray-600">إدارة معلوماتك الشخصية والإعدادات</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF] rounded-3xl flex items-center justify-center shadow-xl shadow-[#6C4EE3]/30">
                <User className="w-16 h-16 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#FFD447] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FFC107] transition-colors">
                <Camera className="w-5 h-5 text-[#1A1A1A]" />
              </button>
            </div>

            <h2 className="text-2xl text-[#4A2FBF] mb-1">{studentInfo.name}</h2>
            <p className="text-gray-600 mb-4">{studentInfo.grade}</p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="px-4 py-2 bg-[#10B981]/10 text-[#10B981] rounded-xl">
                <span>حساب نشط</span>
              </div>
            </div>

            <div className="space-y-3 text-right">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{studentInfo.city}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>انضم في {studentInfo.joinDate}</span>
              </div>
            </div>

            <Button variant="primary" size="md" className="w-full mt-6">
              <Edit className="w-4 h-4" />
              تعديل الصورة الشخصية
            </Button>
          </Card>

          {/* Quick Stats */}
          <Card className="mt-6">
            <h3 className="text-lg text-[#4A2FBF] mb-4">الإحصائيات</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">المعدل التراكمي</span>
                <span className="text-xl text-[#6C4EE3]">92%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">الحصص المكتملة</span>
                <span className="text-xl text-[#6C4EE3]">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">الإنجازات</span>
                <span className="text-xl text-[#FFD447]">24</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-[#4A2FBF]">المعلومات الشخصية</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="w-4 h-4" />
                {isEditing ? 'إلغاء' : 'تعديل'}
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">الاسم الكامل</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue={studentInfo.name}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none disabled:bg-[#F3F3F6] disabled:text-gray-600"
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">البريد الإلكتروني</label>
                <div className="relative">
                  <input
                    type="email"
                    defaultValue={studentInfo.email}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none disabled:bg-[#F3F3F6] disabled:text-gray-600"
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">رقم الجوال</label>
                <div className="relative">
                  <input
                    type="tel"
                    defaultValue={studentInfo.phone}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none disabled:bg-[#F3F3F6] disabled:text-gray-600"
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">تاريخ الميلاد</label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue={studentInfo.birthDate}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none disabled:bg-[#F3F3F6] disabled:text-gray-600"
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">المدرسة</label>
                <input
                  type="text"
                  defaultValue={studentInfo.school}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none disabled:bg-[#F3F3F6] disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">المدينة</label>
                <input
                  type="text"
                  defaultValue={studentInfo.city}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none disabled:bg-[#F3F3F6] disabled:text-gray-600"
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-3 mt-6">
                <Button variant="primary" size="md" className="flex-1">
                  حفظ التغييرات
                </Button>
                <Button variant="outline" size="md" onClick={() => setIsEditing(false)}>
                  إلغاء
                </Button>
              </div>
            )}
          </Card>

          {/* Parent/Guardian Info */}
          <Card>
            <h2 className="text-2xl text-[#4A2FBF] mb-6">معلومات ولي الأمر</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">اسم ولي الأمر</label>
                <input
                  type="text"
                  defaultValue={parentInfo.name}
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F3F3F6] text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  defaultValue={parentInfo.email}
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F3F3F6] text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">رقم الجوال</label>
                <input
                  type="tel"
                  defaultValue={parentInfo.phone}
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F3F3F6] text-gray-600"
                />
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                يمكن لولي الأمر الوصول إلى التقارير والإحصائيات وتلقي التنبيهات حول التقدم الدراسي
              </p>
            </div>
          </Card>

          {/* Academic History */}
          <Card>
            <h2 className="text-2xl text-[#4A2FBF] mb-6">التاريخ الدراسي</h2>

            <div className="space-y-3">
              {academicHistory.map((record, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#F3F3F6] rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      record.status === 'جاري' 
                        ? 'bg-[#6C4EE3]' 
                        : 'bg-[#10B981]'
                    }`}>
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#1A1A1A]">{record.grade}</h3>
                      <p className="text-sm text-gray-600">{record.year}</p>
                    </div>
                  </div>

                  <div className="text-left">
                    <p className="text-xl text-[#6C4EE3]">{record.average}</p>
                    <p className="text-sm text-gray-600">{record.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Settings */}
          <Card>
            <h2 className="text-2xl text-[#4A2FBF] mb-6">الإعدادات</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#F3F3F6] rounded-xl">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-[#1A1A1A]">التنبيهات</p>
                    <p className="text-sm text-gray-600">تلقي إشعارات عن الواجبات والحصص</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6C4EE3]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6C4EE3]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#F3F3F6] rounded-xl">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-[#1A1A1A]">تغيير كلمة المرور</p>
                    <p className="text-sm text-gray-600">تحديث كلمة المرور الخاصة بك</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  تغيير
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
