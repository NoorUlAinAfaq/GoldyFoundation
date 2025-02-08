import Image from "next/image";
import Phone from "../public/Phone..jpeg";
import PhoneDisply from "../public/PhoneDisply.jpeg";
import TeamSection from "@/components/TeamSection";
import AboutUsSection from "@/components/AboutUsSection";
import Faqs from "@/components/Faqs/Faqs";
import { FaqsData } from "@/components/Faqs/FaqsData";
import RoadMapSection from "@/components/RoadMapSection";
import BenefitSection from "@/components/BenefitSection";
import YoutubeSection from "@/components/YoutubeSection";
import WhatsApp from "@/components/WhatsApp";
import CountdownClock from "@/components/CountdownClock";

export default function Home() {
  return (
    <main className="overflow-x-hidden -mt-14">
      <div className="flex justify-center align-center">
        <button className="btn my-6 text-xl md:text-2xl xxl:text-4xl xxl:my-8 text-yellow-500">
          First emission starting on pinksale soon!
        </button>
      </div>
      <section
        className="main-container mb-0 xl:flex xxl:items-start justify-between text-orange-100"
        id="hero"
      >
        {/* hero text container */}
        <div className=" text-center lg:text-left xl:pt-10">
          <div>
            <h2 className="xl:whitespace-nowrap text-[28px] -tracking-[1.54px] md:text-[32px] lg:tracking-normal lg:text-[40px] xl:-mt-10 xxl:-mt-10">
              {" "}
              <span className="text-brandColor">
                🚀 Goldy Social Crypto Cash is Here! 🚀 </span>
            </h2>
          </div>
          <div>
            <h1 className="mt-4 text-[20.89px] -tracking-[2.469px] md:text-[40px] xxl:tracking-normal xl:text-[40px] xl:tracking-[-5.934px] xl:whitespace-nowrap hero-text">
              <span className="text-brandColor">💰 The Altcoin with a Golden Touch! 💰 </span>
            </h1>
          </div>
          {/* <h1 className="text-[44.89px] -tracking-[2.469px] leading-[105%] md:text-[85px] xl:tracking-normal xl:text-[65px] xxl:text-[90px] xxl:tracking-[-1.934px] xl:whitespace-nowrap hero-text">
            by<span className="text-dark2"></span>{" "}
            <span className="text-brandColor">GOLD</span> <br />
          </h1> */}
          {/* <button className="btn my-6 text-xl md:text-2xl xxl:text-4xl xxl:my-8 text-yellow-500">
            Secured by Gold, Supercharged by Community
          </button> */}
          <p className="sub-title-large xl:pb-2 xxl:pb-20">
            Forget the hype—Goldy Social Crypto Cash is bringing real value to the altcoin space with gold-backed stability and meme-powered momentum!
            <br />
            <button className="btn my-4 text-xl md:text-1xl xxl:text-2xl xxl:my-8 text-yellow-500">
              🔹 Secured by Gold, Supercharged by Community<br />
              🔹 Blockchain + AI = Unstoppable Growth<br />
              🔹 Shaping the Future of Digital Wealth<br />

              Goldy isn’t just another altcoin—it’s your digital gold rush! Ride the wave and turn memes into millions!
            </button>
            <p className="text-brandColor">
              {/* TOKEN ADDRESS: 0xEC0D3Fde1939e554123Ace9644ec6ae635B0256a */}
            </p>
          </p>
        </div>

        {/* hand image container*/}
        <div className="w-[500px] pt-2 md:w-full md:ml-auto xl:ml-[300px] xl:mt-1 xl:pt-2 xl:mb-[6rem] xxl:mt-1 xxl:mb-[3rem] xxl:ml-112">
          <Image
            src={Phone}
            alt="phone"
            quality={100}
            className="h-[350px] md:h-[500px] md:w-[650px] rounded-3xl"
          />
        </div>
      </section>

      <section className="main-container flex flex-col items-center md:flex-row md:pb-10 md:px-2 md:mb-40 xl:pb-0 xxl:-mt-16  xxl:top-[-6px]">
        <div className="flex items-end order-2 md:order-1 md:absolute md:-bottom-1 md:right-0 md:w-1/2 xl:w-[60%] xl:-ml- xl:static ">
          <Image
            src={PhoneDisply}
            alt="phoneDisply"
            className="h-[350px] md:h-[700px] md:w-[800px] rounded-3xl"
          />
        </div>

        <div className="xl:w-[40%] my-8 order-1 xl:order-2">
          <div className="xl:text-4xl text-2xl font-bold xxl:text-6xl">
            <span className="text-brandColor">GOLDY SOCIAL CRYPTO CASH</span> <br />
            <p className="text-orange-100 pt">
              🔸 Your Digital Gold Rush Awaits!
            </p>
          </div>
          <p className="text-dark2 font-bold xxl:text-2xl my-6 pr-10">
            Why just hold when you can mine wealth in the digital era? Goldy Social Crypto Cash is the ultimate meme coin with a golden vision, combining community power with the unstoppable growth of Solana.
          </p>
          <p className="text-dark2 font-bold xxl:text-2xl pr-10">
            💰 Backed by trust, driven by innovation—Goldy isn’t just another token; it’s your ticket to financial freedom. No outdated barriers, no gatekeepers—just pure potential.
          </p>

          {/* <button className="font-SourceSans3 bg-brandColor mt-8 text-2xl px-8 font-bold leading-150 hover:bg-transparent border border-brandColor hover:text-brandColor text-white py-4 rounded-2xl">Buy PreSale</button> */}
        </div>
      </section>

      <BenefitSection />

      <AboutUsSection />

      {/* <YoutubeSection /> */}

      <RoadMapSection />

      <TeamSection />

      <WhatsApp />

      {/* <Faqs faqs={FaqsData} /> */}
    </main>
  );
}
