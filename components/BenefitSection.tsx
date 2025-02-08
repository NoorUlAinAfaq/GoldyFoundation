import React from "react";

const BenefitSection = () => {
  return (
    <>
      {/* new started */}
      <div className="main-container" id="benefit">
        <div className="text-white rounded-[57px] mt-10 relative">
          <div className="grid grid-cols-12 mt-5 gap-8">
            <div className=" col-span-12 xl:col-span-7 xxl:col-span-6">
              <div className=" p-6 sm:p-14 xxl:p-20">
                <h1 className="md:text-4xl text-2xl font-bold xl:text-6xl text-orange-100">
                  Unlock the Future:{" "}
                  <span className="text-brandColor">13000%</span> Growth
                  Potential & Beyond!
                </h1>
                <p className="my-2 pr-10 sm:my-10 text-[#8A8A8E] font-bold xxl:text-[22px] xxl:leading-[33px]">
                  At Goldy Social Crypto Cash, we're not just another meme coin—we're a movement redefining digital gold on Solana!
                </p>
                <p className="my-2 pr-10 sm:my-10 text-[#8A8A8E] font-bold xxl:text-[22px] xxl:leading-[33px]">
                  Our mission goes beyond speculation; we're pioneering real utility and community-driven wealth. With verified opportunities backing our vision, Goldy is charting an unstoppable path to success—all without relying on traditional trading mechanics.
                </p>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-5 xxl:col-span-6 relative">
              <img
                src="/images/Growth-gold-coin.jpg"
                className="m-auto mt-[84px] xl:w-[76%] w-[800px] md:h-[563px] xl:right-[53px] xxl:w-[80%] rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* new ended */}
    </>
  );
};

export default BenefitSection;
