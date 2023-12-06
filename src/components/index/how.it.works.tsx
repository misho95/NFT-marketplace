import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import ContainerCenter from "../shared/container.center";
import HowItWorksCard from "./how.it.works.card";

const HowItWorks = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const windowSize = useWindowSize();
  const [divSize, setDivSize] = useState<number>(0);
  const [row, setRow] = useState<number>(0);
  const [gap, setGap] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const size = containerRef.current.offsetWidth;
      setDivSize(+size);
    }

    if (windowSize.width && windowSize.width > 1364) {
      setRow(3);
      setGap(30);
    } else if (windowSize.width && windowSize.width > 726) {
      setRow(3);
      setGap(20);
    } else {
      setGap(10);
      setRow(1);
    }
  }, [windowSize]);

  const data = [
    {
      id: 1,
      title: "Setup Your wallet",
      text: `Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.`,
      icon: "/assets/Icon1.png",
    },
    {
      id: 2,
      title: "Create Collection",
      text: `Upload your work and setup your collection. Add a description, social links and floor price.`,
      icon: "/assets/Icon2.png",
    },
    {
      id: 3,
      title: "Start Earning",
      text: `Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.`,
      icon: "/assets/Icon3.png",
    },
  ];

  return (
    <ContainerCenter>
      <section className="flex flex-col py-[30px]">
        <div
          role="title"
          className="font-WorkSans text-white flex justify-between items-center pb-[45px]"
        >
          <span className="flex flex-col gap-[8px]">
            <h3 className="text-[28px] sm:text-[38px]">How it works</h3>
            <p className="text-[16px] sm:text-[22px]">
              Find out how to get started
            </p>
          </span>
        </div>
        <div
          ref={containerRef}
          role="cards-container"
          className="w-full flex flex-wrap sm:flex-nowrap"
          style={{ gap: gap }}
        >
          {data.map((d) => {
            return (
              <HowItWorksCard
                key={d.id}
                data={{ id: d.id, title: d.title, text: d.text, icon: d.icon }}
                responsProps={{ divSize, row, gap }}
              />
            );
          })}
        </div>
      </section>
    </ContainerCenter>
  );
};

export default HowItWorks;
