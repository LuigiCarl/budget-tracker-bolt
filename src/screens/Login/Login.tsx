import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <main className="bg-white overflow-hidden w-full min-w-[414px] min-h-[896px] relative flex flex-col items-center justify-center p-7">
      <div className="w-full max-w-[358px] flex flex-col gap-6">
        <div className="text-center mb-8">
          <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#438883] text-4xl tracking-[-0.72px] leading-[38px] mb-3">
            Welcome Back
          </h1>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#444444] text-base">
            Log in to continue
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Inter',Helvetica] font-medium text-[#444444] text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-2xl border border-[#e0e0e0] [font-family:'Inter',Helvetica] text-base focus:outline-none focus:border-[#438883]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="[font-family:'Inter',Helvetica] font-medium text-[#444444] text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-2xl border border-[#e0e0e0] [font-family:'Inter',Helvetica] text-base focus:outline-none focus:border-[#438883]"
            />
          </div>

          <button className="[font-family:'Inter',Helvetica] font-medium text-[#438883] text-sm text-right hover:underline">
            Forgot Password?
          </button>
        </div>

        <div className="relative w-full h-[67px] mt-4">
          <div className="absolute top-[31px] left-[3px] w-[352px] h-9 bg-[#3e7c77] blur-xl" />

          <Button
            onClick={handleLogin}
            className="flex w-full h-16 items-center justify-center gap-2.5 px-5 py-2.5 absolute top-0 left-0 rounded-[40px] bg-[linear-gradient(180deg,rgba(105,174,169,1)_0%,rgba(63,135,130,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(105,174,169,0.9)_0%,rgba(63,135,130,0.9)_100%)] h-auto"
          >
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-lg text-center tracking-[-0.36px] leading-[38px] whitespace-nowrap">
              Log In
            </span>
          </Button>
        </div>

        <p className="[font-family:'Inter',Helvetica] font-normal text-transparent text-sm text-center tracking-[0] leading-[normal] mt-4">
          <span className="text-[#444444]">Don't have an account? </span>
          <button
            onClick={() => navigate("/")}
            className="font-medium text-[#438883] hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </main>
  );
};
