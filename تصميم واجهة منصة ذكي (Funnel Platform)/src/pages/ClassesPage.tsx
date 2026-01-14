import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Play, Calendar, Clock, User, Video, FileText, Download } from 'lucide-react';

interface ClassesPageProps {
  onNavigate: (page: string) => void;
}

export function ClassesPage({ onNavigate }: ClassesPageProps) {
  const liveClass = {
    subject: 'الرياضيات - الجبر',
    teacher: 'أ. محمد أحمد',
    startTime: '10:00 ص',
    students: 24,
  };

  const recordings = [
    { id: 1, subject: 'العلوم', topic: 'دورة الماء في الطبيعة', date: '2025-12-01', duration: '45 دقيقة', views: 156 },
    { id: 2, subject: 'اللغة العربية', topic: 'قواعد النحو - الفاعل', date: '2025-11-30', duration: '40 دقيقة', views: 142 },
    { id: 3, subject: 'الرياضيات', topic: 'الكسور والأعداد', date: '2025-11-29', duration: '50 دقيقة', views: 198 },
    { id: 4, subject: 'التاريخ', topic: 'الحضارات القديمة', date: '2025-11-28', duration: '38 دقيقة', views: 134 },
  ];

  const materials = [
    { id: 1, title: 'ملف الدرس - الجبر', type: 'PDF', size: '2.4 MB' },
    { id: 2, title: 'أوراق العمل', type: 'PDF', size: '1.8 MB' },
    { id: 3, title: 'العرض التقديمي', type: 'PPT', size: '5.2 MB' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#4A2FBF] mb-2">الحصص الدراسية</h1>
        <p className="text-gray-600">انضم للحصص المباشرة أو شاهد التسجيلات السابقة</p>
      </div>

      {/* Live Class */}
      <Card className="mb-8 bg-gradient-to-br from-[#10B981]/5 to-[#059669]/5 border-2 border-[#10B981]/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
          <span className="text-[#10B981]">حصة مباشرة الآن</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl text-[#4A2FBF] mb-4">{liveClass.subject}</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-600">
                <User className="w-5 h-5" />
                <span>{liveClass.teacher}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>بدأت في {liveClass.startTime}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Users className="w-5 h-5" />
                <span>{liveClass.students} طالب متصل الآن</span>
              </div>
            </div>

            <Button variant="primary" size="lg" className="w-full bg-[#10B981] hover:bg-[#059669]">
              <Play className="w-5 h-5" />
              الانضمام للحصة
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-lg text-[#4A2FBF] mb-4">مواد الحصة</h3>
            <div className="space-y-2">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="flex items-center justify-between p-3 bg-[#F3F3F6] rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#6C4EE3] rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1A1A1A]">{material.title}</p>
                      <p className="text-xs text-gray-500">{material.type} • {material.size}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Download className="w-4 h-4 text-[#6C4EE3]" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Recorded Classes */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-[#4A2FBF]">الحصص المسجلة</h2>
          <div className="flex items-center gap-2">
            <select className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none">
              <option>جميع المواد</option>
              <option>الرياضيات</option>
              <option>العلوم</option>
              <option>اللغة العربية</option>
              <option>التاريخ</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {recordings.map((recording) => (
            <div
              key={recording.id}
              className="group bg-[#F3F3F6] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative bg-gradient-to-br from-[#6C4EE3] to-[#4A2FBF] aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <button className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-[#6C4EE3] mr-1" />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm">
                  {recording.duration}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#6C4EE3]/10 text-[#6C4EE3] text-xs rounded-full">
                    {recording.subject}
                  </span>
                </div>
                
                <h3 className="text-lg text-[#1A1A1A] mb-3">{recording.topic}</h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{recording.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span>{recording.views} مشاهدة</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
