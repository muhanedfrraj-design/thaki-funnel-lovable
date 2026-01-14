import { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle, LogOut, User } from 'lucide-react';
import { User as UserType } from '../App';

interface StudentDashboardProps {
  user: UserType;
  onLogout: () => void;
}

interface BookingSlot {
  id: string;
  date: string;
  time: string;
  teacher: string;
  subject: string;
  status: 'available' | 'booked' | 'completed';
}

export function StudentDashboard({ user, onLogout }: StudentDashboardProps) {
  const [selectedDate, setSelectedDate] = useState('2025-12-22');
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);

  // Mock data - سيتم استبداله ببيانات من قاعدة البيانات
  const availableSlots: BookingSlot[] = [
    { id: '1', date: '2025-12-22', time: '10:00 ص', teacher: 'أحمد محمد', subject: 'رياضيات', status: 'available' },
    { id: '2', date: '2025-12-22', time: '12:00 م', teacher: 'فاطمة علي', subject: 'علوم', status: 'available' },
    { id: '3', date: '2025-12-22', time: '02:00 م', teacher: 'محمد سعيد', subject: 'لغة عربية', status: 'available' },
    { id: '4', date: '2025-12-22', time: '04:00 م', teacher: 'نورة خالد', subject: 'إنجليزي', status: 'available' },
    { id: '5', date: '2025-12-23', time: '10:00 ص', teacher: 'أحمد محمد', subject: 'رياضيات', status: 'available' },
    { id: '6', date: '2025-12-23', time: '12:00 م', teacher: 'فاطمة علي', subject: 'علوم', status: 'available' },
  ];

  const myBooking: BookingSlot | null = bookedSlot 
    ? availableSlots.find(slot => slot.id === bookedSlot) || null
    : null;

  const handleBookSlot = (slotId: string) => {
    setBookedSlot(slotId);
  };

  const filteredSlots = availableSlots.filter(slot => slot.date === selectedDate);

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
              <h1 className="text-xl" style={{ color: '#6C4EE3' }}>منصة ذكي</h1>
              <p className="text-sm text-gray-600">احجز حصتك المجانية</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-2xl">
              <User size={18} style={{ color: '#6C4EE3' }} />
              <span className="text-sm">{user.name}</span>
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Booking */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Card */}
            <div className="bg-gradient-to-br from-[#6C4EE3] to-[#8B6EFF] rounded-3xl p-8 text-white shadow-xl">
              <h2 className="text-3xl mb-3">مرحباً {user.name}! 👋</h2>
              <p className="text-purple-100 text-lg">
                احجز حصتك المجانية الآن واستمتع بتجربة تعليمية مميزة مع أفضل المدرسين
              </p>
            </div>

            {/* Date Selector */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl mb-4" style={{ color: '#6C4EE3' }}>اختر التاريخ</h3>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {['2025-12-22', '2025-12-23', '2025-12-24', '2025-12-25'].map((date) => {
                  const dateObj = new Date(date);
                  const dayName = dateObj.toLocaleDateString('ar-SA', { weekday: 'short' });
                  const dayNum = dateObj.getDate();
                  
                  return (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`flex-shrink-0 p-4 rounded-2xl border-2 transition-all min-w-[100px] ${
                        selectedDate === date
                          ? 'border-[#6C4EE3] bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-sm text-gray-600">{dayName}</div>
                      <div className="text-2xl mt-1" style={{ color: selectedDate === date ? '#6C4EE3' : '#333' }}>
                        {dayNum}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Available Slots */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl mb-4" style={{ color: '#6C4EE3' }}>المواعيد المتاحة</h3>
              
              {filteredSlots.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                  <p>لا توجد مواعيد متاحة في هذا اليوم</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredSlots.map((slot) => (
                    <div
                      key={slot.id}
                      className={`p-5 rounded-2xl border-2 transition-all ${
                        bookedSlot === slot.id
                          ? 'border-[#FFD447] bg-yellow-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Clock size={18} style={{ color: '#6C4EE3' }} />
                          <span className="text-lg">{slot.time}</span>
                        </div>
                        {bookedSlot === slot.id && (
                          <CheckCircle size={20} style={{ color: '#FFD447' }} />
                        )}
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>👨‍🏫</span>
                          <span>{slot.teacher}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>📚</span>
                          <span>{slot.subject}</span>
                        </div>
                      </div>

                      {bookedSlot === slot.id ? (
                        <button
                          disabled
                          className="w-full py-3 rounded-xl bg-[#FFD447] text-gray-800"
                        >
                          تم الحجز ✓
                        </button>
                      ) : bookedSlot ? (
                        <button
                          disabled
                          className="w-full py-3 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed"
                        >
                          غير متاح
                        </button>
                      ) : (
                        <button
                          onClick={() => handleBookSlot(slot.id)}
                          className="w-full py-3 rounded-xl text-white transition-all hover:shadow-lg"
                          style={{ background: 'linear-gradient(135deg, #6C4EE3 0%, #8B6EFF 100%)' }}
                        >
                          احجز الآن
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - My Booking */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-8">
              <h3 className="text-xl mb-4" style={{ color: '#6C4EE3' }}>حجزي</h3>
              
              {myBooking ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: '#FFD447' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle size={24} className="text-gray-800" />
                      <span className="text-lg">تم تأكيد الحجز</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <Calendar size={20} style={{ color: '#6C4EE3' }} />
                      <div>
                        <div className="text-sm text-gray-600">التاريخ</div>
                        <div>{new Date(myBooking.date).toLocaleDateString('ar-SA')}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <Clock size={20} style={{ color: '#6C4EE3' }} />
                      <div>
                        <div className="text-sm text-gray-600">الوقت</div>
                        <div>{myBooking.time}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <User size={20} style={{ color: '#6C4EE3' }} />
                      <div>
                        <div className="text-sm text-gray-600">المدرس</div>
                        <div>{myBooking.teacher}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <Video size={20} style={{ color: '#6C4EE3' }} />
                      <div>
                        <div className="text-sm text-gray-600">المادة</div>
                        <div>{myBooking.subject}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="w-full py-3 rounded-xl text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                    style={{ background: 'linear-gradient(135deg, #6C4EE3 0%, #8B6EFF 100%)' }}
                  >
                    <Video size={20} />
                    <span>انضم للحصة</span>
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    سيتم إرسال رابط الحصة على بريدك الإلكتروني
                  </p>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <Calendar size={48} className="mx-auto mb-4 opacity-30" />
                  <p>لم تقم بحجز حصة بعد</p>
                  <p className="text-sm mt-2">اختر موعد مناسب من المواعيد المتاحة</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
