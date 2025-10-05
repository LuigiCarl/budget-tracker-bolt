import React from "react";
import { Button } from "../../components/ui/button";
import { BottomNav } from "../../components/BottomNav";
import { CreditCard, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const Wallet = (): JSX.Element => {
  const cards = [
    { name: "Main Card", number: "•••• 4532", balance: "$8,234.50", color: "from-[#438883] to-[#3f8782]" },
    { name: "Savings", number: "•••• 8921", balance: "$4,111.17", color: "from-[#5a9f9a] to-[#4a8f8a]" },
  ];

  const recentActivity = [
    { type: "sent", name: "Netflix Subscription", amount: "-$15.99", date: "Today, 10:30 AM", icon: ArrowUpRight },
    { type: "received", name: "Refund from Amazon", amount: "+$42.00", date: "Yesterday, 3:45 PM", icon: ArrowDownRight },
    { type: "sent", name: "Uber Ride", amount: "-$18.50", date: "Yesterday, 9:20 AM", icon: ArrowUpRight },
    { type: "received", name: "Payment from John", amount: "+$100.00", date: "Dec 28, 2:15 PM", icon: ArrowDownRight },
  ];

  return (
    <main className="bg-gradient-to-b from-[#f8fffe] to-white overflow-hidden w-full min-w-[414px] min-h-[896px] relative flex flex-col pb-24">
      <header className="w-full px-7 py-6">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-3xl tracking-[-0.6px]">
          My Wallet
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-sm mt-1">
          Manage your cards and payments
        </p>
      </header>

      <section className="w-full px-7 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-lg">
            My Cards
          </h3>
          <button className="flex items-center gap-1 [font-family:'Inter',Helvetica] font-medium text-[#438883] text-sm hover:underline">
            <Plus size={16} />
            Add Card
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-full bg-gradient-to-br ${card.color} rounded-3xl p-6 shadow-lg relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-white/80 text-sm">
                    {card.name}
                  </p>
                  <CreditCard size={28} className="text-white/60" />
                </div>

                <p className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl tracking-wider mb-4">
                  {card.number}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-xs mb-1">
                      Balance
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
                      {card.balance}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-xs mb-1">
                      Valid Thru
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-semibold text-white text-sm">
                      12/26
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-7 mt-8">
        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-lg mb-4">
          Recent Activity
        </h3>

        <div className="flex flex-col gap-3">
          {recentActivity.map((activity, index) => {
            const Icon = activity.icon;
            const isSent = activity.type === "sent";

            return (
              <div
                key={index}
                className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#f0f0f0] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isSent ? "bg-red-50" : "bg-green-50"
                  }`}>
                    <Icon size={20} className={isSent ? "text-red-500" : "text-green-500"} />
                  </div>
                  <div>
                    <p className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-base">
                      {activity.name}
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-sm">
                      {activity.date}
                    </p>
                  </div>
                </div>
                <p className={`[font-family:'Inter',Helvetica] font-bold text-lg ${
                  isSent ? "text-[#444444]" : "text-[#438883]"
                }`}>
                  {activity.amount}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full px-7 mt-8 pb-8">
        <div className="relative w-full h-[67px]">
          <div className="absolute top-[31px] left-[3px] w-full h-9 bg-[#3e7c77] blur-xl" />
          <Button className="flex w-full h-16 items-center justify-center gap-2.5 px-5 py-2.5 absolute top-0 left-0 rounded-[40px] bg-[linear-gradient(180deg,rgba(105,174,169,1)_0%,rgba(63,135,130,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(105,174,169,0.9)_0%,rgba(63,135,130,0.9)_100%)] h-auto">
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-lg text-center tracking-[-0.36px] leading-[38px] whitespace-nowrap">
              Send Money
            </span>
          </Button>
        </div>
      </section>

      <BottomNav />
    </main>
  );
};
