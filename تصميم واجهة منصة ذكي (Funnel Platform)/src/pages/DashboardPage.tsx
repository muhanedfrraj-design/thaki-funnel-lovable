import React from 'react';
import { Card } from '../components/Card';
import { Calendar, Clock, BookOpen, Trophy, TrendingUp, Play, CheckCircle, Award, Star } from 'lucide-react';
import { Button } from '../components/Button';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const upcomingClasses = [
    { id: 1, subject: 'الرياضيات', time: '10:00 ص', teacher: 'أ. محمد أحمد', status: 'live' },
    { id: 2, subject: 'العلوم', time: '12:00 م', teacher: 'أ. فاطمة علي', status: 'upcoming' },
    { id: 3, subject: 'اللغة العربية', time: '02:00 م', teacher: 'أ. سارة خالد', status: 'upcoming' },
  ];

  const homework = [
    { id: 1, subject: 'الرياضيات', title: 'حل المسائل 1-10', dueDate: 'غداً', status: 'pending' },
    { id: 2, subject: 'العلوم', title: 'تقرير عن النباتات', dueDate: 'بعد يومين', status: 'pending' },
    { id: 3, subject: 'اللغة الإنجليزية', title: 'كتابة موضوع', dueDate: 'اليوم', status: 'urgent' },
  ];

  const achievements = [
    { id: 1, title: 'متفوق الأسبوع', icon: '🏆', color: 'from-[#FFD447] to-[#FFC107]' },
    { id: 2, title: 'قارئ نشط', icon: '📚', color: 'from-[#6C4EE3] to-[#4A2FBF]' },
    { id: 3, title: 'مشارك فعّال', icon: '⭐', color: 'from-[#10B981] to-[#059669]' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF] rounded-3xl p-8 text-white shadow-2xl shadow-[#6C4EE3]/30 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl mb-2">مرحباً، أحمد! 👋</h1>
                <p className="text-lg opacity-90">جاهز لبدء يوم تعليمي جديد؟</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                <p className="text-sm opacity-90">النقاط الكلية</p>
                <p className="text-3xl">1,250</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFD447] rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <p className="text-2xl">12</p>
                    <p className="text-sm opacity-75">حصة هذا الأسبوع</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFD447] rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <p className="text-2xl">8</p>
                    <p className="text-sm opacity-75">إنجاز جديد</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFD447] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <p className="text-2xl">95%</p>
                    <p className="text-sm opacity-75">نسبة الحضور</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD447]/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Classes */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-[#4A2FBF]">الحصص القادمة</h2>
              <button 
                onClick={() => onNavigate('classes')}
                className="text-[#6C4EE3] hover:text-[#4A2FBF] text-sm"
              >
                عرض الكل ←
              </button>
            </div>

            <div className="space-y-3">
              {upcomingClasses.map((classItem) => (
                <div
                  key={classItem.id}
                  className="flex items-center justify-between p-4 bg-[#F3F3F6] rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      classItem.status === 'live' 
                        ? 'bg-gradient-to-br from-[#10B981] to-[#059669]' 
                        : 'bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF]'
                    } shadow-lg`}>
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[#1A1A1A]">{classItem.subject}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {classItem.time}
                        </p>
                        <p className="text-sm text-gray-600">{classItem.teacher}</p>
                      </div>
                    </div>
                  </div>
                  
                  {classItem.status === 'live' ? (
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => onNavigate('classes')}
                      className="bg-[#10B981] hover:bg-[#059669]"
                    >
                      <Play className="w-4 h-4" />
                      انضم الآن
                    </Button>
                  ) : (
                    <span className="text-sm text-gray-500 px-4 py-2 bg-white rounded-lg">
                      قريباً
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Homework */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-[#4A2FBF]">الواجبات المطلوبة</h2>
              <button 
                onClick={() => onNavigate('homework')}
                className="text-[#6C4EE3] hover:text-[#4A2FBF] text-sm"
              >
                عرض الكل ←
              </button>
            </div>

            <div className="space-y-3">
              {homework.map((hw) => (
                <div
                  key={hw.id}
                  className="flex items-center justify-between p-4 bg-[#F3F3F6] rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      hw.status === 'urgent' 
                        ? 'bg-red-100' 
                        : 'bg-[#FFD447]/20'
                    }`}>
                      <CheckCircle className={`w-6 h-6 ${
                        hw.status === 'urgent' ? 'text-red-500' : 'text-[#FFD447]'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-[#1A1A1A]">{hw.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {hw.subject} • موعد التسليم: {hw.dueDate}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onNavigate('homework')}
                  >
                    ابدأ الحل
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Progress */}
          <Card>
            <h3 className="text-xl text-[#4A2FBF] mb-4">تقدمك هذا الأسبوع</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">الدروس المكتملة</span>
                  <span className="text-[#4A2FBF]">8/10</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#6C4EE3] to-[#4A2FBF] rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">الواجبات المسلمة</span>
                  <span className="text-[#4A2FBF]">6/7</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FFD447] to-[#FFC107] rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">معدل الأداء</span>
                  <span className="text-[#4A2FBF]">92%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card>
            <h3 className="text-xl text-[#4A2FBF] mb-4">آخر الإنجازات</h3>
            
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 bg-gradient-to-br ${achievement.color} rounded-xl shadow-lg text-white`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{achievement.icon}</span>
                    <div>
                      <h4>{achievement.title}</h4>
                      <p className="text-sm opacity-90">تم الحصول عليه</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-4"
              onClick={() => onNavigate('achievements')}
            >
              <Trophy className="w-4 h-4" />
              عرض جميع الإنجازات
            </Button>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-gradient-to-br from-[#FFD447]/10 to-[#FFD447]/5">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD447] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Star className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl text-[#4A2FBF] mb-1">المركز الثالث</h3>
              <p className="text-gray-600 mb-4">في مدرستك هذا الشهر</p>
              <Button variant="secondary" size="sm" className="w-full">
                عرض لوحة المتصدرين
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
