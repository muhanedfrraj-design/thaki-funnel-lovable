import React from 'react';
import { Menu, User, Bell, LogOut } from 'lucide-react';
import logo from 'figma:asset/89b6f04af5e715d59a849819021160ddb1113e3d.png';

interface HeaderProps {
  userName?: string;
  onMenuClick?: () => void;
  showProfile?: boolean;
}

export function Header({ userName, onMenuClick, showProfile = false }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 hover:bg-[#F3F3F6] rounded-xl transition-colors"
              >
                <Menu className="w-6 h-6 text-[#1A1A1A]" />
              </button>
            )}
            <img src={logo} alt="ذكي" className="h-10 w-auto" />
          </div>

          {/* Right Section */}
          {showProfile && (
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[#F3F3F6] rounded-xl transition-colors relative">
                <Bell className="w-5 h-5 text-[#1A1A1A]" />
                <span className="absolute top-1 left-1 w-2 h-2 bg-[#FFD447] rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 bg-[#F3F3F6] rounded-xl px-3 py-2">
                <div className="w-8 h-8 bg-[#6C4EE3] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                {userName && <span className="hidden sm:inline">{userName}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}