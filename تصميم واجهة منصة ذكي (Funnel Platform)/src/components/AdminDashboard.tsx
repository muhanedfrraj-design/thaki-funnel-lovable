import { useState } from 'react';
import { Users, Calendar, TrendingUp, DollarSign, LogOut, User, Eye, CheckCircle, Clock, XCircle, BarChart3 } from 'lucide-react';
import { User as UserType } from '../App';

interface AdminDashboardProps {
  user: UserType;
  onLogout: () => void;
}

interface SessionData {
  id: string;
  date: string;
  time: string;
  student: string;
  teacher: string;
  subject: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  salesRep: string;
}

interface TeacherStats {
  id: string;
  name: string;
  totalSessions: number;
  completedSessions: number;
  rating: number;
  subjects: string[];
}

interface SalesStats {
  id: string;
  name: string;
  totalLeads: number;
  bookedLeads: number;
  completedLeads: number;
  conversionRate: number;
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [selectedView, setSelectedView] = useState<'overview' | 'sessions' | 'teachers' | 'sales'>('overview');

  // Mock data - سيتم استبداله ببيانات من قاعدة البيانات
  const sessions: SessionData[] = [
    { id: '1', date: '2025-12-22', time: '10:00 ص', student: 'محمد أحمد', teacher: 'أحمد محمد', subject: 'رياضيات', status: 'scheduled', salesRep: 'علي سعيد' },
    { id: '2', date: '2025-12-21', time: '02:00 م', student: 'فاطمة علي', teacher: 'فاطمة علي', subject: 'علوم', status: 'completed', salesRep: 'نورة خالد' },
    { id: '3', date: '2025-12-21', time: '11:00 ص', student: 'عبدالله سعيد', teacher: 'أحمد محمد', subject: 'رياضيات', status: 'completed', salesRep: 'علي سعيد' },
    { id: '4', date: '2025-12-20', time: '03:00 م', student: 'نورة خالد', teacher: 'محمد سعيد', subject: 'لغة عربية', status: 'completed', salesRep: 'نورة خالد' },
    { id: '5', date: '2025-12-20', time: '10:00 ص', student: 'سارة محمد', teacher: 'نورة خالد', subject: 'إنجليزي', status: 'completed', salesRep: 'علي سعيد' },
    { id: '6', date: '2025-12-19', time: '01:00 م', student: 'خالد عمر', teacher: 'أحمد محمد', subject: 'رياضيات', status: 'cancelled', salesRep: 'نورة خالد' },
  ];

  const teachers: TeacherStats[] = [
    { id: '1', name: 'أحمد محمد', totalSessions: 15, completedSessions: 13, rating: 4.8, subjects: ['رياضيات'] },
    { id: '2', name: 'فاطمة علي', totalSessions: 12, completedSessions: 11, rating: 4.9, subjects: ['علوم'] },
    { id: '3', name: 'محمد سعيد', totalSessions: 10, completedSessions: 9, rating: 4.7, subjects: ['لغة عربية'] },
    { id: '4', name: 'نورة خالد', totalSessions: 8, completedSessions: 8, rating: 5.0, subjects: ['إنجليزي'] },
  ];

  const salesReps: SalesStats[] = [
    { id: '1', name: 'علي سعيد', totalLeads: 25, bookedLeads: 18, completedLeads: 15, conversionRate: 72 },
    { id: '2', name: 'نورة خالد', totalLeads: 20, bookedLeads: 14, completedLeads: 12, conversionRate: 70 },
  ];

  const totalSessions = sessions.length;
  const completedSessions = sessions.filter(s => s.status === 'completed').length;
  const scheduledSessions = sessions.filter(s => s.status === 'scheduled').length;
  const cancelledSessions = sessions.filter(s => s.status === 'cancelled').length;
  const totalTeachers = teachers.length;
  const totalSalesReps = salesReps.length;
  const avgConversionRate = salesReps.reduce((sum, s) => sum + s.conversionRate, 0) / salesReps.length;

  const getStatusColor = (status: SessionData['status']) => {
    switch (status) {
      case 'scheduled': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
    }
  };

  const getStatusLabel = (status: SessionData['status']) => {
    switch (status) {
      case 'scheduled': return 'مجدول';
      case 'completed': return 'مكتمل';
      case 'cancelled': return 'ملغي';
    }
  };

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
              <h1 className="text-xl" style={{ color: '#6C4EE3' }}>منصة ذكي - الإدارة</h1>
              <p className="text-sm text-gray-600">لوحة التحكم الرئيسية</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-2xl">
              <User size={18} style={{ color: '#6C4EE3' }} />
              <span className="text-sm">المدير {user.name}</span>
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
        {/* Navigation Tabs */}
        <div className="bg-white rounded-3xl p-2 shadow-lg mb-8 flex gap-2">
          {[
            { value: 'overview', label: 'نظرة عامة', icon: Eye },
            { value: 'sessions', label: 'الحصص', icon: Calendar },
            { value: 'teachers', label: 'المدرسين', icon: Users },
            { value: 'sales', label: 'المبيعات', icon: BarChart3 }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedView(tab.value as typeof selectedView)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl transition-all ${
                selectedView === tab.value
                  ? 'bg-gradient-to-br from-[#6C4EE3] to-[#8B6EFF] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview View */}
        {selectedView === 'overview' && (
          <div className="space-y-8">
            {/* Main Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#6C4EE3] to-[#8B6EFF] rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <Calendar size={28} />
                  </div>
                  <TrendingUp size={24} className="opacity-50" />
                </div>
                <div className="text-4xl mb-2">{totalSessions}</div>
                <div className="text-purple-100">إجمالي الحصص</div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <CheckCircle size={28} />
                  </div>
                  <TrendingUp size={24} className="opacity-50" />
                </div>
                <div className="text-4xl mb-2">{completedSessions}</div>
                <div className="text-green-100">حصص مكتملة</div>
              </div>

              <div className="bg-gradient-to-br from-[#FFD447] to-[#FFE380] rounded-3xl p-6 text-gray-800 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/40 p-3 rounded-2xl">
                    <Clock size={28} />
                  </div>
                  <TrendingUp size={24} className="opacity-30" />
                </div>
                <div className="text-4xl mb-2">{scheduledSessions}</div>
                <div className="text-yellow-800">حصص مجدولة</div>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <XCircle size={28} />
                  </div>
                  <TrendingUp size={24} className="opacity-50" />
                </div>
                <div className="text-4xl mb-2">{cancelledSessions}</div>
                <div className="text-red-100">حصص ملغية</div>
              </div>
            </div>

            {/* Team Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-2xl">
                    <Users size={28} style={{ color: '#6C4EE3' }} />
                  </div>
                </div>
                <div className="text-3xl mb-2" style={{ color: '#6C4EE3' }}>{totalTeachers}</div>
                <div className="text-gray-600">المدرسين النشطين</div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-2xl">
                    <BarChart3 size={28} style={{ color: '#6C4EE3' }} />
                  </div>
                </div>
                <div className="text-3xl mb-2" style={{ color: '#6C4EE3' }}>{totalSalesReps}</div>
                <div className="text-gray-600">موظفي المبيعات</div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-2xl">
                    <TrendingUp size={28} style={{ color: '#6C4EE3' }} />
                  </div>
                </div>
                <div className="text-3xl mb-2" style={{ color: '#6C4EE3' }}>{avgConversionRate.toFixed(1)}%</div>
                <div className="text-gray-600">معدل التحويل</div>
              </div>
            </div>

            {/* Recent Sessions */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl mb-4" style={{ color: '#6C4EE3' }}>آخر الحصص</h3>
              <div className="space-y-3">
                {sessions.slice(0, 5).map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 rounded-2xl border-2 border-gray-200 hover:border-purple-300 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`px-3 py-1 rounded-lg text-sm ${getStatusColor(session.status)}`}>
                        {getStatusLabel(session.status)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span>👨‍🎓 {session.student}</span>
                          <span className="text-gray-400">←</span>
                          <span>👨‍🏫 {session.teacher}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          📚 {session.subject} • 💼 {session.salesRep}
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-600">{new Date(session.date).toLocaleDateString('ar-SA')}</div>
                      <div className="text-sm" style={{ color: '#6C4EE3' }}>{session.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sessions View */}
        {selectedView === 'sessions' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl mb-6" style={{ color: '#6C4EE3' }}>جميع الحصص</h3>
            <div className="space-y-3">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between p-5 rounded-2xl border-2 border-gray-200 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`px-4 py-2 rounded-xl text-sm ${getStatusColor(session.status)}`}>
                      {getStatusLabel(session.status)}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg">👨‍🎓 {session.student}</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-lg">👨‍🏫 {session.teacher}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>📚 {session.subject}</span>
                        <span>•</span>
                        <span>💼 مسؤول المبيعات: {session.salesRep}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-600">{new Date(session.date).toLocaleDateString('ar-SA')}</div>
                    <div className="text-lg" style={{ color: '#6C4EE3' }}>{session.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teachers View */}
        {selectedView === 'teachers' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl mb-6" style={{ color: '#6C4EE3' }}>إحصائيات المدرسين</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xl mb-2">👨‍🏫 {teacher.name}</div>
                      <div className="flex items-center gap-2">
                        {teacher.subjects.map((subject, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-yellow-100 px-3 py-1 rounded-lg">
                      <span className="text-lg">⭐ {teacher.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-purple-50 rounded-xl">
                      <div className="text-2xl mb-1" style={{ color: '#6C4EE3' }}>{teacher.totalSessions}</div>
                      <div className="text-sm text-gray-600">إجمالي الحصص</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-xl">
                      <div className="text-2xl text-green-700 mb-1">{teacher.completedSessions}</div>
                      <div className="text-sm text-gray-600">حصص مكتملة</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>معدل الإنجاز</span>
                      <span>{Math.round((teacher.completedSessions / teacher.totalSessions) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#6C4EE3] to-[#8B6EFF] rounded-full transition-all"
                        style={{ width: `${(teacher.completedSessions / teacher.totalSessions) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sales View */}
        {selectedView === 'sales' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl mb-6" style={{ color: '#6C4EE3' }}>إحصائيات المبيعات</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {salesReps.map((rep) => (
                <div
                  key={rep.id}
                  className="p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-xl">💼 {rep.name}</div>
                    <div className="bg-purple-100 px-3 py-1 rounded-lg" style={{ color: '#6C4EE3' }}>
                      {rep.conversionRate}% معدل التحويل
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-center">
                      <div className="text-2xl text-blue-700 mb-1">{rep.totalLeads}</div>
                      <div className="text-xs text-gray-600">إجمالي العملاء</div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-xl text-center">
                      <div className="text-2xl text-yellow-700 mb-1">{rep.bookedLeads}</div>
                      <div className="text-xs text-gray-600">محجوز</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-xl text-center">
                      <div className="text-2xl text-green-700 mb-1">{rep.completedLeads}</div>
                      <div className="text-xs text-gray-600">مكتمل</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>التقدم نحو الهدف</span>
                      <span>{rep.conversionRate}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#FFD447] to-[#FFE380] rounded-full transition-all"
                        style={{ width: `${rep.conversionRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
