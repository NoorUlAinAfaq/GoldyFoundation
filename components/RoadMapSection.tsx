import React from "react";

const RoadMapSection = () => {
  const preLaunchData = [
    {
      no: 1,
      title: "Initial Launch",
      desc: `ICO of Goldy Crypto Cash start 12.02.2025 on pink Sale`,
      status: "upcoming",
    },
    {
      no: 2,
      title: "Own blockchain",
      desc: " Transforming into its own blockchain / December 2025",
      status: "upcoming",
    },
    {
      no: 3,
      title: "E-Commerce Development",
      desc: "Connecting E-Commerce plattforms January 2026 (Mila, Vital Vie and Centralita) ",
      status: "upcoming",
    },
    {
      no: 4,
      title: "Establishment of community centers",
      desc: "Social community centers of Goldy in EU, USA, India, Pakistan, China on April 2026. Education of sustainability and self governance (valid for all cryptos) ",
      status: "upcoming",
    },
  ]

  // const postLaunchData = [
  //   {
  //     no: 5,
  //     title: "Price Evolution",
  //     desc: "target price evolution 1,50 USD/ EUR by January 2026.",
  //     status: "upcoming",
  //   },
  //   {
  //     no: 6,
  //     title: "Tracking Mineral and Mining on the Blockchain",
  //     desc: "Empowering mineral and mining through blockchain, ensuring transparent, traceable, and ethical practices.",
  //   },
  //   {
  //     no: 7,
  //     title: "AI Integration and Testing",
  //     desc: "Develop and implement the software connecting Mineral Global Yield AI with GOLDY.",
  //   },
  //   {
  //     no: 8,
  //     title: "Mining Expansion",
  //     desc: "Mining Expansion in Sierra Leone, Mexico, South Africe. Miners association under GOLDY Coin led by EZCARAY Mining",
  //   },
    // {
    //   no: 9,
    //   title: "Exploration of New Gold Fields",
    //   desc: "Identify and explore new gold fields in South Africa, Peru, Colombia, Chile, and Ecuador. Conduct feasibility studies and assessments.",
    // },
    // {
    //   no: 10,
    //   title: "Onboarding Preparation",
    //   desc: "Prepare the framework for onboarding gold mining corporations and associates. Establish communication channels for collaboration.",
    // },
    // {
    //   no: 11,
    //   title: "Collaborative Agreements",
    //   desc: "Establish collaborative agreements with mining entities. Define roles and responsibilities for the associates joining the GOLDY group ",
    // },
    // {
    //   no: 12,
    //   title: "Sky Is The Limit",
    //   desc: "Possibility Of Expansion to Other Parts of the World",
    // },
  //];
  return (
    <section className="main-container mt-10" id="roadmap">
      <div className="max-w-[1440px] mx-auto roadmap-bg text-orange-100">
        <h1 className="text-center text-6xl md:text-8xl xl:text-[140px] gradient-text uppercase mb-10">
          Roadmap
        </h1>
        <div className="md:flex justify-between items-start px-8 md:px-0">
          <div className="hidden md:block">
            {preLaunchData.map((item, index) => {
              return (
                <div
                  className="mx-auto flex items-start gap-4 mt-4 max-w-[360px] h-[120px]"
                  key={index}
                >
                  <div
                    className={`text-wrap number-container before:w-10 before:h-10 text-black ${item.status === "completed" &&
                      "before:bg-[#EAB308] after:border-l-[#EAB308]"
                      } ${item.status === "running" && "before:w-14 before:h-14"
                      } ${item.no !== preLaunchData.length && "number-after"}`}
                  >
                    {item.no}
                  </div>
                  <div>
                    <h4 className="text-lg whitespace-nowrap">{item.title}</h4>
                    <p className="text-dark2 min-h-[80px] leading-[20px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:hidden">
            {preLaunchData.map((item, index) => {
              return (
                <div
                  className="mx-auto flex items-start gap-4 mt-4 max-w-[360px] h-[120px]"
                  key={index}
                  style={{ marginBottom: item.no === 6 ? "70px" : "0" }}
                >
                  <div
                    className={`number-container before:w-10 before:h-10 text-black ${item.status === "completed" &&
                      "before:bg-[#EAB308] after:border-l-[#EAB308]"
                      } ${item.status === "running" && "before:w-14 before:h-14"
                      } ${item.no !== preLaunchData.length + 1 && "number-after"
                      }`}
                  >
                    {item.no}
                  </div>
                  <div>
                    <h4 className="text-lg text-wrap">{item.title}</h4>
                    <p className="text-dark2 min-h-[80px] leading-[20px] text-wrap">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="ml-0 md:ml-6 xl:ml-0">
            {postLaunchData.map((item, index) => {
              return (
                <div
                  className={`mx-auto flex items-start gap-4 mt-4 max-w-[360px] h-[120px] ${item.no === 7 && "h-[140px] md:h-[120px]"
                    }`}
                  key={index}
                >
                  <div
                    className={`number-container before:w-10 before:h-10 text-black ${index !== preLaunchData.length - 1 && "number-after"
                      } ${item.no === 10 && "right-1"} ${item.no === 7 && "after:h-[100px] md:after:h-[80px]"
                      }`}
                  >
                    {item.no === 6 && (
                      <span className="block md:hidden connecter-line"></span>
                    )}
                    {item.no}
                  </div>
                  <div className={`${item.no > 9 && "-ml-2"}`}>
                    <h4 className="text-lg text-wrap">{item.title}</h4>
                    <p className="text-dark2 min-h-[80px] leading-[20px] md:leading-6 text-wrap">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
