import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import MainButton from "../shared/main.button";
import DiscoverCard from "./discover.card";
import ContainerCenter from "../shared/container.center";

const Discover = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const windowSize = useWindowSize();
  const [divSize, setDivSize] = useState<number>(0);
  const [row, setRow] = useState<number>(0);
  const [total, setTotal] = useState(0);
  const [gap, setGap] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const size = containerRef.current.offsetWidth;
      setDivSize(+size);
    }

    if (windowSize.width && windowSize.width > 1364) {
      setRow(3);
      setTotal(3);
      setGap(30);
    } else if (windowSize.width && windowSize.width > 726) {
      setRow(2);
      setTotal(2);
      setGap(20);
    } else {
      setTotal(3);
      setGap(5);
      setRow(1);
    }
  }, [windowSize]);

  const discoverData = [
    {
      id: 1,
      title: "Distant Galaxy",
      img: "src/assets/dicover1.png",
      author: {
        icon: "src/assets/Avatar5.png",
        name: "MoonDancer",
      },
      price: 1.63,
      highestbid: 0.33,
    },
    {
      id: 2,
      title: "Distant Galaxy",
      img: "src/assets/dicover1.png",
      author: {
        icon: "src/assets/Avatar5.png",
        name: "MoonDancer",
      },
      price: 1.63,
      highestbid: 0.33,
    },
    {
      id: 3,
      title: "Distant Galaxy",
      img: "src/assets/dicover1.png",
      author: {
        icon: "src/assets/Avatar5.png",
        name: "MoonDancer",
      },
      price: 1.63,
      highestbid: 0.33,
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
            <h3 className="text-[28px] sm:text-[38px]">Discover More NFTs</h3>
            <p className="text-[16px] sm:text-[22px]">
              Explore new trending NFTs
            </p>
          </span>
          <MainButton
            title={"View Rankings"}
            icon={"src/assets/EyeIcon.png"}
            wide={true}
            CTS={"border-2 border-[#A259FF] bg-transparent hidden sm:flex"}
          />
        </div>
        <div
          ref={containerRef}
          role="cards-container"
          className="w-full flex flex-wrap sm:flex-nowrap"
          style={{ gap: gap }}
        >
          {discoverData.map((d, index) => {
            return (
              index < total && (
                <DiscoverCard
                  key={d.id}
                  data={d}
                  responsProps={{ divSize, row, gap }}
                />
              )
            );
          })}
        </div>
        <MainButton
          title={"View Rankings"}
          icon={"src/assets/EyeIcon.png"}
          wide={true}
          CTS={"border-2 border-[#A259FF] bg-transparent flex sm:hidden"}
        />
      </section>
    </ContainerCenter>
  );
};

export default Discover;
