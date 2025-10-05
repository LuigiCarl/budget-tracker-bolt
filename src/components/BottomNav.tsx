import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Chrome as Home, Wallet, ChartPie as PieChart, User } from "lucide-react";

export const BottomNav = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/home", icon: Home, label: "Home" },
    { path: "/wallet", icon: Wallet, label: "Wallet" },
    { path: "/stats", icon: PieChart, label: "Stats" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#f0f0f0] px-7 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-[414px] mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-[linear-gradient(180deg,rgba(105,174,169,1)_0%,rgba(63,135,130,1)_100%)]"
                    : "bg-transparent"
                }`}
              >
                <Icon
                  size={24}
                  className={isActive ? "text-white" : "text-[#999999]"}
                  strokeWidth={2}
                />
              </div>
              <span
                className={`[font-family:'Inter',Helvetica] text-xs ${
                  isActive ? "font-semibold text-[#438883]" : "font-normal text-[#999999]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
