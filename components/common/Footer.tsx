import Image from "next/image";
import Link from "next/link";
import Telegram from "../../public/telegram.svg";
import FB from "../../public/Facebook.svg";
import Twitter from "../../public/Twitter.svg";
import Git from "../../public/Github.svg";
const Footer = () => {
  const SocialLink = [
    {
      "name": "Twitter",
      "icon": Twitter,
      "link": "https://www.twitter.com/"
    },
    {
      "name": "Facebook",
      "icon": FB,
      "link": "https://www.facebook.com/"
    },
    {
      "name": "Telegram",
      "icon": Telegram,
      "link": "https://t.me/"
    },
    {
      "name": "Github",
      "icon": Git,
      "link": "https://www.github.com/"
    }
  ]

  const Company = [
    {
      "name": "About",
      "link": "/#about"
    },
    {
      "name": "Features",
      "link": "/#hero"
    },
    {
      "name": "Partners",
      "link": "/#partner"
    },
    {
      "name": "Road map",
      "link": "/#roadmap"
    },
  ];

  const Home = [
    {
      "name": "Terms & Conditions",
      "link": "/terms"
    },
    {
      "name": "Privacy Policy",
      "link": "/privacy"
    },
    // {
    //   "name": "FAQ",
    //   "link": "/#faq"
    // }
  ];

  return (
    <div className="bg-black py-16 lg:px-52 md:px-8 px-8 flex justify-center flex-col ">
      <div className="flex justify-center md:justify-between text-white flex-col md:flex-row">
        <div className="py-4">
          {/* <Image src={Logo} alt="logo" className="mb-5" width={197.26} height={60.67} /> */}
          <p className="font-normal text-dark2">SHAPING TOMORROW'S FINANCES, BACKED BY GROWING POWER NETWORK OF CRYPTOCURRENCIES, WITH
            <br /> BLOCKCHAIN TECHNOLOGY & ARTIFICAL INTELLEGENCE. </p>
            <br /> Yours Goldy Foundation
          <div className="flex mt-[48px]">
            {SocialLink.map((data, index) => (
              <div key={index}>
                <div className="bg-dark2 hover:bg-brandColor hover:border border-white mr-4 h-[28px] w-[28px] rounded-full flex items-center justify-center grayscale">
                  <a href={data.link} target="_blank"><Image src={data.icon} alt={data.name} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-5">
          <div className="text-brandColor uppercase my-3">Company</div>
          <div className="flex flex-col items-start">
            {Company.map((data, index) => (
              <div key={index}>
                <div className="text-dark2 my-3">
                  <a href={data.link} className="hover:text-white active:text-brandColor transition-all">{data.name}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-5">
          <div className="text-brandColor uppercase my-3">Resources</div>
          <div className="flex flex-col items-start">
            {Home.map((data, index) => (
              <div key={index}>
                <div className="text-dark2 my-3">
                  <Link href={data.link} className="hover:text-white active:text-brandColor transition-all">{data.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <hr className="bg-[#E2E8F0] h-px my-5" />
      </div>
      <div className="text-dark2 flex justify-center text-center">
        &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by GOLDY
      </div>
    </div>
  );
};
export default Footer;
