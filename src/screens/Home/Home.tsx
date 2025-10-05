import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "../../components/BottomNav";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <main className="bg-gradient-to-b from-[#f8fffe] to-white overflow-hidden w-full min-w-[414px] min-h-[896px] relative flex flex-col pb-24">
      <header className="w-full px-7 py-6 flex items-center justify-between">
        <div>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-sm">
            Welcome back
          </p>
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-2xl tracking-[-0.48px]">
            Dashboard
          </h2>
        </div>
        <button
          onClick={handleLogout}
          className="[font-family:'Inter',Helvetica] font-medium text-[#438883] text-sm hover:underline"
        >
          Logout
        </button>
      </header>

      <section className="w-full px-7 mt-6">
        <div className="w-full bg-[linear-gradient(180deg,rgba(105,174,169,1)_0%,rgba(63,135,130,1)_100%)] rounded-3xl p-6 shadow-lg">
          <p className="[font-family:'Inter',Helvetica] font-medium text-white text-sm mb-2">
            Total Balance
          </p>
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl tracking-[-0.72px] mb-4">
            $12,345.67
          </h3>
          <div className="flex gap-3 mt-6">
            <div className="flex-1 bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <p className="[font-family:'Inter',Helvetica] font-medium text-white text-xs mb-1">
                Income
              </p>
              <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
                $8,420
              </p>
            </div>
            <div className="flex-1 bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <p className="[font-family:'Inter',Helvetica] font-medium text-white text-xs mb-1">
                Expenses
              </p>
              <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
                $3,240
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-7 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#444444] text-xl">
            Recent Transactions
          </h3>
          <button className="[font-family:'Inter',Helvetica] font-medium text-[#438883] text-sm hover:underline">
            See All
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { name: "Grocery Store", amount: "-$85.20", category: "Food", time: "Today" },
            { name: "Salary Deposit", amount: "+$3,200", category: "Income", time: "Yesterday" },
            { name: "Coffee Shop", amount: "-$12.50", category: "Food", time: "Yesterday" },
            { name: "Gas Station", amount: "-$45.00", category: "Transport", time: "2 days ago" },
          ].map((transaction, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#f0f0f0] flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f0f8f7] flex items-center justify-center">
                  <span className="text-xl">{transaction.amount.startsWith("+") ? "💰" : "💳"}</span>
                </div>
                <div>
                  <p className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-base">
                    {transaction.name}
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-sm">
                    {transaction.category} • {transaction.time}
                  </p>
                </div>
              </div>
              <p
                className={`[font-family:'Inter',Helvetica] font-bold text-lg ${
                  transaction.amount.startsWith("+") ? "text-[#438883]" : "text-[#444444]"
                }`}
              >
                {transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-7 mt-8 pb-8">
        <div className="relative w-full h-[67px]">
          <div className="absolute top-[31px] left-[3px] w-full h-9 bg-[#3e7c77] blur-xl" />
          <Button className="flex w-full h-16 items-center justify-center gap-2.5 px-5 py-2.5 absolute top-0 left-0 rounded-[40px] bg-[linear-gradient(180deg,rgba(105,174,169,1)_0%,rgba(63,135,130,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(105,174,169,0.9)_0%,rgba(63,135,130,0.9)_100%)] h-auto">
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-lg text-center tracking-[-0.36px] leading-[38px] whitespace-nowrap">
              Add Transaction
            </span>
          </Button>
        </div>
      </section>

      <BottomNav />
    </main>
  );
};
