import React from "react";
import { Button } from "../../components/ui/button";
import { BottomNav } from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { User, Bell, Lock, CreditCard, CircleHelp as HelpCircle, Settings, LogOut, ChevronRight } from "lucide-react";

export const Profile = (): JSX.Element => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: "Personal Information", action: () => {} },
    { icon: Bell, label: "Notifications", action: () => {} },
    { icon: Lock, label: "Security & Privacy", action: () => {} },
    { icon: CreditCard, label: "Payment Methods", action: () => {} },
    { icon: Settings, label: "App Settings", action: () => {} },
    { icon: HelpCircle, label: "Help & Support", action: () => {} },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <main className="bg-gradient-to-b from-[#f8fffe] to-white overflow-hidden w-full min-w-[414px] min-h-[896px] relative flex flex-col pb-24">
      <header className="w-full px-7 py-6">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-3xl tracking-[-0.6px]">
          Profile
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-sm mt-1">
          Manage your account settings
        </p>
      </header>

      <section className="w-full px-7 mt-4">
        <div className="w-full bg-gradient-to-br from-[#438883] to-[#3f8782] rounded-3xl p-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

          <div className="relative z-10 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
              <User size={36} className="text-white" />
            </div>

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-[-0.4px] mb-1">
                Sarah Johnson
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white/80 text-sm">
                sarah.johnson@email.com
              </p>
              <button className="mt-2 [font-family:'Inter',Helvetica] font-medium text-white text-sm hover:underline">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-7 mt-6">
        <div className="w-full bg-white rounded-3xl p-4 shadow-sm border border-[#f0f0f0]">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-3">
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-2xl mb-1">
                142
              </p>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-xs text-center">
                Transactions
              </p>
            </div>

            <div className="flex flex-col items-center p-3 border-l border-r border-[#f0f0f0]">
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-2xl mb-1">
                5
              </p>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-xs text-center">
                Cards
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-2xl mb-1">
                8
              </p>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-xs text-center">
                Months Active
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-7 mt-6">
        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-lg mb-3">
          Settings
        </h3>

        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#f0f0f0] flex items-center justify-between hover:bg-[#f8fffe] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f0f8f7] flex items-center justify-center">
                    <Icon size={20} className="text-[#438883]" />
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#444444] text-base">
                    {item.label}
                  </p>
                </div>
                <ChevronRight size={20} className="text-[#999999]" />
              </button>
            );
          })}
        </div>
      </section>

      <section className="w-full px-7 mt-6 pb-8">
        <div className="relative w-full h-[67px]">
          <div className="absolute top-[31px] left-[3px] w-full h-9 bg-red-500/30 blur-xl" />
          <Button
            onClick={handleLogout}
            className="flex w-full h-16 items-center justify-center gap-2.5 px-5 py-2.5 absolute top-0 left-0 rounded-[40px] bg-white border-2 border-red-500 hover:bg-red-50 h-auto"
          >
            <LogOut size={20} className="text-red-500" />
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-red-500 text-lg text-center tracking-[-0.36px] leading-[38px] whitespace-nowrap">
              Log Out
            </span>
          </Button>
        </div>
      </section>

      <BottomNav />
    </main>
  );
};
