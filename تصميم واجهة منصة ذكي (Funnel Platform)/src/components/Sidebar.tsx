import React from 'react';
import { Home, Calendar, BookOpen, FileText, User, Trophy, LogOut, X } from 'lucide-react';
import logo from 'figma:asset/89b6f04af5e715d59a849819021160ddb1113e3d.png';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ activePage, onNavigate, isOpen = true, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'classes', label: 'الحصص', icon: Calendar },
    { id: 'homework', label: 'الواجبات', icon: FileText },
    { id: 'achievements', label: 'الإنجازات', icon: Trophy },
    { id: 'library', label: 'المكتبة', icon: BookOpen },
    { id: 'profile', label: 'الملف الشخصي', icon: User },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed right-0 top-0 h-full bg-white border-l border-gray-100 z-50 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64`}
      >
        <div className="p-6">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            <img src={logo} alt="ذكي" className="h-10 w-auto" />
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-2 hover:bg-[#F3F3F6] rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose?.();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-[#6C4EE3] text-white shadow-lg shadow-[#6C4EE3]/20'
                      : 'text-[#1A1A1A] hover:bg-[#F3F3F6]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <button
            onClick={() => onNavigate('home')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200 mt-8"
          >
            <LogOut className="w-5 h-5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}