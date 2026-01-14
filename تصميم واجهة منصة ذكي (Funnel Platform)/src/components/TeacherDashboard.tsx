import { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle, LogOut, User, TrendingUp, Award } from 'lucide-react';
import { User as UserType } from '../App';

interface TeacherDashboardProps {
  user: UserType;
  onLogout: () => void;
}

interface Session {
  id: string;
  date: string;
  time: string;
  student: string;
  subject: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  duration: number;
}

export function TeacherDashboard({ user, onLogout }: TeacherDashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'all'>('month');

  // Mock data - سيتم استبداله ببيانات من قاعدة البيانات
  const sessions: Session[] = [
    { id: '1', date: '2025-12-22', time: '10:00 ص', student: 'محمد أحمد', subject: 'رياضيات', status: 'scheduled', duration: 60 },
    { id: '2', date: '2025-12-21', time: '02:00 م', student: 'فاطمة علي', subject: 'رياضيات', status: 'completed', duration: 60 },
    { id: '3', date: '2025-12-20', time: '11:00 ص', student: 'عبدالله سعيد', subject: 'رياضيات', status: 'completed', duration: 60 },
    { id: '4', date: '2025-12-19', time: '03:00 م', student: 'نورة خالد', subject: 'رياضيات', status: 'completed', duration: 60 },
    { id: '5', date: '2025-12-18', time: '10:00 ص', student: 'سارة محمد', subject: 'رياضيات', status: 'completed', duration: 60 },
    { id: '6', date: '2025-12-17', time: '01:00 م', student: 'خالد عمر', subject: 'رياضيات', status: 'completed', duration: 60 },
    { id: '7', date: '2025-12-16', time: '04:00 م', student: 'ريم عبدالله', subject: 'رياضيات', status: 'completed', duration: 60 },
    { id: '8', date: '2025-12-15', time: '11:00 ص', student: 'يوسف أحمد', subject: 'رياضيات', status: 'completed', duration: 60 },
  ];

  const completedSessions = sessions.filter(s => s.status === 'completed');
  const scheduledSessions = sessions.filter(s => s.status === 'scheduled');
  const totalHours = completedSessions.reduce((sum, s) => sum + s.duration, 0) / 60;
  const thisMonthSessions = completedSessions.filter(s => {
    const sessionDate = new Date(s.date);
    const now = new Date();
    return sessionDate.getMonth() === now.getMonth();
  }).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#6C4EE3] to-[#8B6EFF] p-3 rounded-2xl">
              <span className="text-white text-2xl">🧠</span>
            </div>
            <div>
              <h1 className="text-xl" style={{ color: '#6C4EE3' }}>منصة ذكي - المدرسين</h1>
              <p className="text-sm text-gray-600">لوحة تحكم المدرس</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-2xl">
              <User size={18} style={{ color: '#6C4EE3' }} />
              <span className="text-sm">المدرس {user.name}</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-2xl hover:bg-red-100 transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm">خروج</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#6C4EE3] to-[#8B6EFF] rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-2xl">
                <CheckCircle size={28} />
              </div>
              <TrendingUp size={24} className="opacity-50" />
            </div>
            <div className="text-4xl mb-2">{completedSessions.length}</div>
            <div className="text-purple-100">إجمالي الحصص المكتملة</div>
          </div>

          <div className="bg-gradient-to-br from-[#FFD447] to-[#FFE380] rounded-3xl p-6 text-gray-800 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/40 p-3 rounded-2xl">
                <Clock size={28} />
              </div>
              <TrendingUp size={24} className="opacity-30" />
            </div>
            <div className="text-4xl mb-2">{totalHours.toFixed(1)}</div>
            <div className="text-yellow-800">ساعات التدريس</div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-2xl">
                <Award size={28} style={{ color: '#6C4EE3' }} />
              </div>
              <Calendar size={24} className="text-gray-300" />
            </div>
            <div className="text-4xl mb-2" style={{ color: '#6C4EE3' }}>{thisMonthSessions}</div>
            <div className="text-gray-600">حصص هذا الشهر</div>
          </div>
        </div>

        {/* Period Filter */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl" style={{ color: '#6C4EE3' }}>سجل الحصص</h3>
            <div className="flex gap-2">
              {[
                { value: 'week', label: 'هذا الأسبوع' },
                { value: 'month', label: 'هذا الشهر' },
                { value: 'all', label: 'الكل' }
              ].map((period) => (
                <button
                  key={period.value}
                  onClick={() => setSelectedPeriod(period.value as 'week' | 'month' | 'all')}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    selectedPeriod === period.value
                      ? 'bg-[#6C4EE3] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Completed Sessions */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl mb-4 flex items-center gap-2" style={{ color: '#6C4EE3' }}>
              <CheckCircle size={24} />
              الحصص المكتملة
            </h3>
            
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {completedSessions.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <CheckCircle size={48} className="mx-auto mb-4 opacity-30" />
                  <p>لا توجد حصص مكتملة</p>
                </div>
              ) : (
                completedSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 rounded-2xl border-2 border-gray-200 hover:border-purple-300 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-xl">
                        <CheckCircle size={20} className="text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span>👨‍🎓</span>
                          <span>{session.student}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>📚 {session.subject}</span>
                          <span>•</span>
                          <span>{session.duration} دقيقة</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-600">{new Date(session.date).toLocaleDateString('ar-SA')}</div>
                      <div className="text-sm" style={{ color: '#6C4EE3' }}>{session.time}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl mb-4 flex items-center gap-2" style={{ color: '#6C4EE3' }}>
              <Calendar size={24} />
              الحصص القادمة
            </h3>
            
            <div className="space-y-3">
              {scheduledSessions.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Calendar size={48} className="mx-auto mb-4 opacity-30" />
                  <p>لا توجد حصص قادمة</p>
                </div>
              ) : (
                scheduledSessions.map((session) => (
                  <div
                    key={session.id}
                    className="p-4 rounded-2xl border-2 border-[#FFD447] bg-yellow-50"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={18} style={{ color: '#6C4EE3' }} />
                      <span>{session.time}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span>👨‍🎓</span>
                        <span>{session.student}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>📚</span>
                        <span>{session.subject}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(session.date).toLocaleDateString('ar-SA')}
                      </div>
                    </div>

                    <button
                      className="w-full py-2 rounded-xl text-white text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                      style={{ background: 'linear-gradient(135deg, #6C4EE3 0%, #8B6EFF 100%)' }}
                    >
                      <Video size={16} />
                      <span>بدء الحصة</span>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
