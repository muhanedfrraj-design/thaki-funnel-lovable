import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Upload, FileText, CheckCircle, Clock, AlertCircle, Download, X } from 'lucide-react';

interface HomeworkPageProps {
  onNavigate: (page: string) => void;
}

export function HomeworkPage({ onNavigate }: HomeworkPageProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const homeworkList = [
    {
      id: 1,
      subject: 'الرياضيات',
      title: 'حل المسائل 1-10',
      description: 'حل المسائل من الصفحة 45',
      dueDate: 'غداً - 10:00 ص',
      status: 'urgent',
      points: 20,
    },
    {
      id: 2,
      subject: 'العلوم',
      title: 'تقرير عن النباتات',
      description: 'كتابة تقرير مفصل عن عملية التمثيل الضوئي',
      dueDate: '2025-12-05',
      status: 'pending',
      points: 30,
    },
    {
      id: 3,
      subject: 'اللغة الإنجليزية',
      title: 'كتابة موضوع تعبير',
      description: 'كتابة موضوع عن العطلة الصيفية',
      dueDate: 'اليوم - 11:59 م',
      status: 'urgent',
      points: 25,
    },
    {
      id: 4,
      subject: 'اللغة العربية',
      title: 'قراءة القصة',
      description: 'قراءة القصة والإجابة على الأسئلة',
      dueDate: '2025-12-06',
      status: 'submitted',
      points: 15,
      submittedDate: '2025-12-01',
      grade: '14/15',
    },
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    // Handle file upload
    setShowUploadModal(false);
    setSelectedFile(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-[#4A2FBF] mb-2">الواجبات المدرسية</h1>
        <p className="text-gray-600">تابع واجباتك وسلمها في الوقت المحدد</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-red-50 to-red-100/50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl text-red-600">2</p>
              <p className="text-sm text-gray-600">عاجل</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#FFD447]/20 to-[#FFD447]/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FFD447] rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <div>
              <p className="text-2xl text-[#1A1A1A]">1</p>
              <p className="text-sm text-gray-600">قيد الانتظار</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl text-[#10B981]">1</p>
              <p className="text-sm text-gray-600">مسلّم</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#6C4EE3]/20 to-[#6C4EE3]/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#6C4EE3] rounded-xl flex items-center justify-center">
              <span className="text-white">⭐</span>
            </div>
            <div>
              <p className="text-2xl text-[#6C4EE3]">90</p>
              <p className="text-sm text-gray-600">نقاط محتملة</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Homework List */}
      <div className="space-y-4">
        {homeworkList.map((hw) => (
          <Card key={hw.id} hover className={hw.status === 'urgent' ? 'border-2 border-red-200' : ''}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    hw.status === 'urgent'
                      ? 'bg-red-100'
                      : hw.status === 'submitted'
                      ? 'bg-[#10B981]/20'
                      : 'bg-[#6C4EE3]/20'
                  }`}
                >
                  {hw.status === 'submitted' ? (
                    <CheckCircle className="w-7 h-7 text-[#10B981]" />
                  ) : hw.status === 'urgent' ? (
                    <AlertCircle className="w-7 h-7 text-red-500" />
                  ) : (
                    <FileText className="w-7 h-7 text-[#6C4EE3]" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 bg-[#6C4EE3]/10 text-[#6C4EE3] text-xs rounded-full">
                      {hw.subject}
                    </span>
                    <span className="px-3 py-1 bg-[#FFD447]/20 text-[#1A1A1A] text-xs rounded-full">
                      {hw.points} نقطة
                    </span>
                  </div>

                  <h3 className="text-lg text-[#1A1A1A] mb-1">{hw.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{hw.description}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>موعد التسليم: {hw.dueDate}</span>
                    </div>

                    {hw.status === 'submitted' && (
                      <div className="flex items-center gap-1 text-[#10B981]">
                        <CheckCircle className="w-4 h-4" />
                        <span>تم التسليم في {hw.submittedDate}</span>
                      </div>
                    )}
                  </div>

                  {hw.grade && (
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-lg">
                      <span>الدرجة: {hw.grade}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 md:flex-col">
                {hw.status === 'submitted' ? (
                  <>
                    <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                      <Download className="w-4 h-4" />
                      تحميل
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 md:flex-none text-gray-500">
                      عرض التعليقات
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1 md:flex-none"
                      onClick={() => setShowUploadModal(true)}
                    >
                      <Upload className="w-4 h-4" />
                      تسليم الواجب
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                      <Download className="w-4 h-4" />
                      تحميل الملف
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => {
                setShowUploadModal(false);
                setSelectedFile(null);
              }}
              className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl text-[#4A2FBF] mb-6">تسليم الواجب</h2>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-3">ارفع ملف الواجب</label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-[#6C4EE3] transition-colors cursor-pointer">
                <input
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="w-16 h-16 bg-[#6C4EE3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-[#6C4EE3]" />
                  </div>
                  <p className="text-gray-700 mb-1">اضغط لاختيار الملف</p>
                  <p className="text-sm text-gray-500">PDF, DOC, DOCX, JPG, PNG (حتى 10MB)</p>
                </label>
              </div>

              {selectedFile && (
                <div className="mt-4 p-4 bg-[#F3F3F6] rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#6C4EE3]" />
                    <div>
                      <p className="text-sm text-[#1A1A1A]">{selectedFile.name}</p>
                      <p className="text-xs text-gray-500">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">ملاحظات (اختياري)</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6C4EE3] focus:ring-2 focus:ring-[#6C4EE3]/20 outline-none resize-none"
                rows={4}
                placeholder="أضف أي ملاحظات أو أسئلة للمعلم..."
              ></textarea>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="md"
                className="flex-1"
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedFile(null);
                }}
              >
                إلغاء
              </Button>
              <Button
                variant="primary"
                size="md"
                className="flex-1"
                onClick={handleSubmit}
                disabled={!selectedFile}
              >
                تسليم الواجب
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
