import { useState } from 'react';
import { Users, Phone, Mail, Calendar, CheckCircle, Clock, XCircle, LogOut, User, Filter, TrendingUp } from 'lucide-react';
import { User as UserType } from '../App';

interface SalesDashboardProps {
  user: UserType;
  onLogout: () => void;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  bookingDate: string | null;
  bookingTime: string | null;
  status: 'new' | 'contacted' | 'booked' | 'completed' | 'cancelled';
  lastContact: string;
  notes: string;
  assignedTo: string;
}

export function SalesDashboard({ user, onLogout }: SalesDashboardProps) {
  const [selectedStatus, setSelectedStatus] = useState<'all' | Lead['status']>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Mock data - سيتم استبداله ببيانات من قاعدة البيانات
  const leads: Lead[] = [
    {
      id: '1',
      name: 'محمد أحمد السعيد',
      email: 'mohammed@example.com',
      phone: '+966501234567',
      bookingDate: '2025-12-22',
      bookingTime: '10:00 ص',
      status: 'booked',
      lastContact: '2025-12-21',
      notes: 'مهتم بالرياضيات، يفضل الحصص الصباحية',
      assignedTo: user.name
    },
    {
      id: '2',
      name: 'فاطمة علي محمد',
      email: 'fatima@example.com',
      phone: '+966507654321',
      bookingDate: null,
      bookingTime: null,
      status: 'contacted',
      lastContact: '2025-12-21',
      notes: 'تم الاتصال، تفكر في الحجز',
      assignedTo: user.name
    },
    {
      id: '3',
      name: 'عبدالله خالد',
      email: 'abdullah@example.com',
      phone: '+966502345678',
      bookingDate: null,
      bookingTime: null,
      status: 'new',
      lastContact: '2025-12-21',
      notes: 'طلب جديد من الموقع',
      assignedTo: user.name
    },
    {
      id: '4',
      name: 'نورة سعيد',
      email: 'noura@example.com',
      phone: '+966508765432',
      bookingDate: '2025-12-20',
      bookingTime: '02:00 م',
      status: 'completed',
      lastContact: '2025-12-20',
      notes: 'أكملت الحصة المجانية، مهتمة بالاشتراك',
      assignedTo: user.name
    },
    {
      id: '5',
      name: 'سارة محمد',
      email: 'sara@example.com',
      phone: '+966503456789',
      bookingDate: '2025-12-23',
      bookingTime: '12:00 م',
      status: 'booked',
      lastContact: '2025-12-21',
      notes: 'حجزت حصة في العلوم',
      assignedTo: user.name
    },
    {
      id: '6',
      name: 'خالد عمر',
      email: 'khaled@example.com',
      phone: '+966509876543',
      bookingDate: null,
      bookingTime: null,
      status: 'cancelled',
      lastContact: '2025-12-19',
      notes: 'ألغى بسبب ارتباطات أخرى',
      assignedTo: user.name
    }
  ];

  const filteredLeads = selectedStatus === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === selectedStatus);

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    booked: leads.filter(l => l.status === 'booked').length,
    completed: leads.filter(l => l.status === 'completed').length,
    cancelled: leads.filter(l => l.status === 'cancelled').length
  };

  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'contacted': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'booked': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'completed': return 'bg-green-100 text-green-700 border-green-300';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-300';
    }
  };

  const getStatusLabel = (status: Lead['status']) => {
    switch (status) {
      case 'new': return 'جديد';
      case 'contacted': return 'تم الاتصال';
      case 'booked': return 'محجوز';
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
              <h1 className="text-xl" style={{ color: '#6C4EE3' }}>منصة ذكي - المبيعات</h1>
              <p className="text-sm text-gray-600">لوحة متابعة العملاء</p>
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
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-200">
            <div className="text-2xl mb-1" style={{ color: '#6C4EE3' }}>{stats.total}</div>
            <div className="text-sm text-gray-600">إجمالي العملاء</div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-4 shadow-md border-2 border-blue-200">
            <div className="text-2xl text-blue-700 mb-1">{stats.new}</div>
            <div className="text-sm text-blue-600">جديد</div>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 shadow-md border-2 border-purple-200">
            <div className="text-2xl text-purple-700 mb-1">{stats.contacted}</div>
            <div className="text-sm text-purple-600">تم الاتصال</div>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 shadow-md border-2 border-yellow-200">
            <div className="text-2xl text-yellow-700 mb-1">{stats.booked}</div>
            <div className="text-sm text-yellow-600">محجوز</div>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 shadow-md border-2 border-green-200">
            <div className="text-2xl text-green-700 mb-1">{stats.completed}</div>
            <div className="text-sm text-green-600">مكتمل</div>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 shadow-md border-2 border-red-200">
            <div className="text-2xl text-red-700 mb-1">{stats.cancelled}</div>
            <div className="text-sm text-red-600">ملغي</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leads List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filter */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} style={{ color: '#6C4EE3' }} />
                <h3 className="text-lg" style={{ color: '#6C4EE3' }}>تصفية العملاء</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'all', label: 'الكل' },
                  { value: 'new', label: 'جديد' },
                  { value: 'contacted', label: 'تم الاتصال' },
                  { value: 'booked', label: 'محجوز' },
                  { value: 'completed', label: 'مكتمل' },
                  { value: 'cancelled', label: 'ملغي' }
                ].map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedStatus(filter.value as typeof selectedStatus)}
                    className={`px-4 py-2 rounded-xl transition-all ${
                      selectedStatus === filter.value
                        ? 'bg-[#6C4EE3] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Leads Cards */}
            <div className="space-y-4">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className={`bg-white rounded-2xl p-5 shadow-md border-2 transition-all cursor-pointer ${
                    selectedLead?.id === lead.id
                      ? 'border-[#6C4EE3] shadow-lg'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg mb-1">{lead.name}</h4>
                      <div className={`inline-block px-3 py-1 rounded-lg text-sm border-2 ${getStatusColor(lead.status)}`}>
                        {getStatusLabel(lead.status)}
                      </div>
                    </div>
                    {lead.status === 'booked' && (
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <Calendar size={20} className="text-yellow-600" />
                      </div>
                    )}
                    {lead.status === 'completed' && (
                      <div className="bg-green-100 p-2 rounded-lg">
                        <CheckCircle size={20} className="text-green-600" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span dir="ltr">{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span dir="ltr">{lead.phone}</span>
                    </div>
                    {lead.bookingDate && (
                      <div className="flex items-center gap-2 text-[#6C4EE3]">
                        <Calendar size={16} />
                        <span>{new Date(lead.bookingDate).toLocaleDateString('ar-SA')} - {lead.bookingTime}</span>
                      </div>
                    )}
                  </div>

                  {lead.notes && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                      💬 {lead.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Lead Details */}
          <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-8 h-fit">
            <h3 className="text-xl mb-4" style={{ color: '#6C4EE3' }}>تفاصيل العميل</h3>
            
            {selectedLead ? (
              <div className="space-y-4">
                <div className="text-center pb-4 border-b-2 border-gray-100">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6C4EE3] to-[#8B6EFF] mx-auto mb-3 flex items-center justify-center text-white text-2xl">
                    {selectedLead.name[0]}
                  </div>
                  <h4 className="text-lg mb-2">{selectedLead.name}</h4>
                  <div className={`inline-block px-3 py-1 rounded-lg text-sm border-2 ${getStatusColor(selectedLead.status)}`}>
                    {getStatusLabel(selectedLead.status)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Mail size={16} />
                      <span>البريد الإلكتروني</span>
                    </div>
                    <div className="text-sm" dir="ltr">{selectedLead.email}</div>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Phone size={16} />
                      <span>رقم الجوال</span>
                    </div>
                    <div className="text-sm" dir="ltr">{selectedLead.phone}</div>
                  </div>

                  {selectedLead.bookingDate && (
                    <div className="p-3 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar size={16} />
                        <span>موعد الحصة</span>
                      </div>
                      <div className="text-sm">{new Date(selectedLead.bookingDate).toLocaleDateString('ar-SA')}</div>
                      <div className="text-sm" style={{ color: '#6C4EE3' }}>{selectedLead.bookingTime}</div>
                    </div>
                  )}

                  <div className="p-3 bg-purple-50 rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Clock size={16} />
                      <span>آخر اتصال</span>
                    </div>
                    <div className="text-sm">{new Date(selectedLead.lastContact).toLocaleDateString('ar-SA')}</div>
                  </div>
                </div>

                {selectedLead.notes && (
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-600 mb-2">الملاحظات:</div>
                    <div className="text-sm">{selectedLead.notes}</div>
                  </div>
                )}

                <div className="pt-4 space-y-2">
                  <button
                    className="w-full py-3 rounded-xl text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    style={{ background: 'linear-gradient(135deg, #6C4EE3 0%, #8B6EFF 100%)' }}
                  >
                    <Phone size={18} />
                    <span>اتصال</span>
                  </button>
                  <button
                    className="w-full py-3 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
                  >
                    <Mail size={18} />
                    <span>إرسال بريد</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <Users size={48} className="mx-auto mb-4 opacity-30" />
                <p>اختر عميل لعرض التفاصيل</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
