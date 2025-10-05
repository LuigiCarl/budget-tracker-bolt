import React from "react";
import { BottomNav } from "../../components/BottomNav";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export const Stats = (): JSX.Element => {
  const categories = [
    { name: "Food & Dining", amount: "$842.50", percentage: 35, color: "bg-[#438883]", icon: "🍔" },
    { name: "Shopping", amount: "$620.00", percentage: 26, color: "bg-[#69aea9]", icon: "🛍️" },
    { name: "Transportation", amount: "$385.20", percentage: 16, color: "bg-[#8bc9c5]", icon: "🚗" },
    { name: "Entertainment", amount: "$295.80", percentage: 12, color: "bg-[#a8d9d6]", icon: "🎬" },
    { name: "Bills & Utilities", amount: "$256.50", percentage: 11, color: "bg-[#c5e9e7]", icon: "📱" },
  ];

  const monthlyData = [
    { month: "Jan", amount: 2400 },
    { month: "Feb", amount: 2100 },
    { month: "Mar", amount: 2800 },
    { month: "Apr", amount: 2600 },
    { month: "May", amount: 3100 },
    { month: "Jun", amount: 2900 },
  ];

  const maxAmount = Math.max(...monthlyData.map(d => d.amount));

  return (
    <main className="bg-gradient-to-b from-[#f8fffe] to-white overflow-hidden w-full min-w-[414px] min-h-[896px] relative flex flex-col pb-24">
      <header className="w-full px-7 py-6">
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-3xl tracking-[-0.6px]">
          Statistics
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-sm mt-1">
          Track your spending patterns
        </p>
      </header>

      <section className="w-full px-7 mt-4">
        <div className="w-full bg-white rounded-3xl p-6 shadow-sm border border-[#f0f0f0]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-lg">
              This Month
            </h3>
            <select className="[font-family:'Inter',Helvetica] text-sm text-[#438883] font-medium bg-transparent border border-[#e0e0e0] rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#438883]">
              <option>June 2024</option>
              <option>May 2024</option>
              <option>April 2024</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 bg-[#f8fffe] rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-[#438883] flex items-center justify-center mb-2">
                <TrendingUp size={24} className="text-white" />
              </div>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-xs mb-1">
                Income
              </p>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-lg">
                $8,420
              </p>
            </div>

            <div className="flex flex-col items-center p-4 bg-[#fff8f8] rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-2">
                <TrendingDown size={24} className="text-white" />
              </div>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-xs mb-1">
                Expenses
              </p>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#444444] text-lg">
                $3,240
              </p>
            </div>

            <div className="flex flex-col items-center p-4 bg-[#f8f8ff] rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-[#69aea9] flex items-center justify-center mb-2">
                <DollarSign size={24} className="text-white" />
              </div>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-xs mb-1">
                Saved
              </p>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-lg">
                $5,180
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-7 mt-6">
        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-lg mb-4">
          Spending by Category
        </h3>

        <div className="flex flex-col gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#f0f0f0]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f0f8f7] flex items-center justify-center text-xl">
                    {category.icon}
                  </div>
                  <div>
                    <p className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-base">
                      {category.name}
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-sm">
                      {category.percentage}% of total
                    </p>
                  </div>
                </div>
                <p className="[font-family:'Inter',Helvetica] font-bold text-[#444444] text-lg">
                  {category.amount}
                </p>
              </div>

              <div className="w-full h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
                <div
                  className={`h-full ${category.color} rounded-full transition-all`}
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-7 mt-6 pb-8">
        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#444444] text-lg mb-4">
          Monthly Trend
        </h3>

        <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-[#f0f0f0]">
          <div className="flex items-end justify-between gap-2 h-40">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center h-32">
                  <div
                    className="w-full bg-gradient-to-t from-[#438883] to-[#69aea9] rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
                    style={{ height: `${(data.amount / maxAmount) * 100}%` }}
                  />
                </div>
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#999999] text-xs">
                  {data.month}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#438883]" />
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-sm">
                Average: $2,650
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomNav />
    </main>
  );
};
