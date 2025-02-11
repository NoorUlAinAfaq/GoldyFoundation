import { OurTeam } from "@/data/TeamData";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section className="main-container text-orange-100 mt-18" id="partner">
      <h1 className="text-4xl md:text-6xl xl:text-[65px] font-bold text-center mb-10">
        Partners
      </h1>

      {/* team member container */}
      <div className="flex flex-wrap justify-between items-center gap-y-6 md:gap-y-8 xl:gap-8 xl:px-10">
        {OurTeam.map((item, index) => {
          return (
            <div
              className="mx-auto bg-brandColor border border-brandColor rounded-[20px] text-center px-10 md:px-16 py-5 transition-all"
              key={index}
            >
              <div className="">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.photo}
                    alt=""
                    className="rounded-full w-40 h-40"
                  />
                </a>
              </div>
              <h3 className="text-xl font-bold mt-4">{item.name}</h3>
              <p className="text-sm text-[#757575]">{item.title}</p>
            </div>
          );
        })}
                <div className="text-white rounded-[57px] mt-10 relative border-white">
                <p className="my-2 pr-10 sm:my-10 text-[#ced133] font-bold xxl:text-[22px] xxl:leading-[33px]">
              HOW TO BUY GOLDY CRYPTO CASH (GDYCC):</p>
              <p className="my-2 pr-10 sm:my-10 text-[#757575] font-bold xxl:text-[18px] xxl:leading-[33px]">
              1-Hit the buy button on the top right and it brings you straight to launchpad pink sale.<br />
              2-Connect your wallet (we recomand PHANTOM).Once you hit connect wallet Pink Sale shows all wallet options<br />
              3-You need to have or buy first such an amount of Solana you want to put into Goldy (ie. 20, 30, 50 or 100 USD or EUR or Yuan)<br />
              4-In case you got lost, the ticker is GDYCC / SOL.<br />
              5-Accomplish the transaction and receive your Goldy Crypto Cash.<br />
              6-Never lose your keys or seeds and enjoy this journey into collaborative economy.<br /> 
               </p>
               </div>
      </div>
    </section>
  );
};

export default TeamSection;
