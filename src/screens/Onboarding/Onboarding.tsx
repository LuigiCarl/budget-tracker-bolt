import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const Onboarding = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <main className="bg-white overflow-hidden w-full min-w-[414px] min-h-[896px] relative flex flex-col">
      <img
        className="absolute top-0 left-0 w-[414px] h-[600px]"
        alt="Group"
        src="/group-2.png"
      />

      <section className="absolute top-[127px] left-[-84px] w-[524px] h-[486px]">
        <div className="absolute top-0 left-[145px] w-[277px] h-[462px] bg-[url(/base.png)] bg-cover bg-[50%_50%]">
          <div className="bg-[url(/shoes.png)] bg-[100%_100%] absolute top-0 left-0 w-[277px] h-[462px]">
            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Pants"
              src="/pants2.png"
            />

            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Pants"
              src="/pants.png"
            />

            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Cloth"
              src="/cloth2.png"
            />

            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Cloth"
              src="/cloth.png"
            />

            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Glasses"
              src="/glasses.png"
            />

            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Lips"
              src="/lips.png"
            />

            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Eyes"
              src="/eyes.png"
            />

            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Hair"
              src="/hair.png"
            />

            <img
              className="absolute top-0 left-0 w-[277px] h-[462px]"
              alt="Skin"
              src="/skin.png"
            />
          </div>

          <img
            className="absolute w-full h-full top-0 left-0 object-cover"
            alt="Specular"
            src="/specular.png"
          />
        </div>

        <div className="absolute top-[453px] left-0 w-[524px] h-[33px]">
          <img
            className="absolute w-full h-full top-0 left-[16.03%] object-cover"
            alt="Shadows"
            src="/shadows.png"
          />

          <img
            className="absolute top-0 left-[84px] w-[414px] h-[33px]"
            alt="Color"
            src="/color.png"
          />
        </div>
      </section>

      <img
        className="absolute top-[132px] left-[49px] w-24 h-24"
        alt="Coint"
        src="/coint.png"
      />

      <img
        className="absolute top-[187px] left-[268px] w-[88px] h-[88px]"
        alt="Donut"
        src="/donut.png"
      />

      <h1 className="absolute top-[643px] left-14 w-[301px] [font-family:'Inter',Helvetica] font-bold text-green text-4xl text-center tracking-[-0.72px] leading-[38px]">
        Spend Smarter Save More
      </h1>

      <p className="absolute top-[829px] left-[107px] [font-family:'Inter',Helvetica] font-normal text-transparent text-sm text-center tracking-[0] leading-[normal]">
        <span className="text-[#444444]">Already Have Account? </span>

        <button
          onClick={() => navigate("/login")}
          className="font-medium text-[#438883] hover:underline"
        >
          Log In
        </button>
      </p>

      <div className="absolute top-[745px] left-7 w-[358px] h-[67px]">
        <div className="absolute top-[31px] left-[3px] w-[352px] h-9 bg-[#3e7c77] blur-xl" />

        <Button
          onClick={() => navigate("/home")}
          className="flex w-[358px] h-16 items-center justify-center gap-2.5 px-5 py-2.5 absolute top-0 left-0 rounded-[40px] bg-[linear-gradient(180deg,rgba(105,174,169,1)_0%,rgba(63,135,130,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(105,174,169,0.9)_0%,rgba(63,135,130,0.9)_100%)] h-auto"
        >
          <span className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-lg text-center tracking-[-0.36px] leading-[38px] whitespace-nowrap">
            Get Started
          </span>
        </Button>
      </div>
    </main>
  );
};
