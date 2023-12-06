import { useEffect, useRef, useState } from "react";
import CreatorsCard from "./creatos.card";
import { useWindowSize } from "@uidotdev/usehooks";
import MainButton from "../shared/main.button";

const Creators = () => {
  const creatorsData = [
    {
      id: 1,
      title: "Keepitreal",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 2,
      title: "DigiLab",
      totalSales: 34.53,
      img: "src/assets/ava2.png",
    },
    {
      id: 3,
      title: "GravityOne",
      totalSales: 34.53,
      img: "src/assets/ava3.png",
    },
    {
      id: 4,
      title: "Juanie",
      totalSales: 34.53,
      img: "src/assets/ava4.png",
    },
    {
      id: 5,
      title: "BlueWhale",
      totalSales: 34.53,
      img: "src/assets/ava5.png",
    },
    {
      id: 6,
      title: "Mr Fox",
      totalSales: 34.53,
      img: "src/assets/ava6.png",
    },
    {
      id: 7,
      title: "Shroomie",
      totalSales: 34.53,
      img: "src/assets/ava7.png",
    },

    {
      id: 8,
      title: "robotica",
      totalSales: 34.53,
      img: "src/assets/ava8.png",
    },
    {
      id: 9,
      title: "RustyRobot",
      totalSales: 34.53,
      img: "src/assets/ava9.png",
    },
    {
      id: 10,
      title: "animakid",
      totalSales: 34.53,
      img: "src/assets/ava10.png",
    },
    {
      id: 11,
      title: "Dotgu",
      totalSales: 34.53,
      img: "src/assets/ava11.png",
    },
    {
      id: 12,
      title: "Ghiblier",
      totalSales: 34.53,
      img: "src/assets/ava12.png",
    },
  ];

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
      setRow(4);
      setTotal(12);
      setGap(30);
    } else if (windowSize.width && windowSize.width > 726) {
      setRow(2);
      setTotal(8);
      setGap(20);
    } else {
      setTotal(6);
      setGap(20);
      setRow(1);
    }
  }, [windowSize]);

  return (
    <section className="flex flex-col py-[30px]">
      <div
        role="title"
        className="font-WorkSans text-white flex justify-between items-center pb-[45px]"
      >
        <span className="flex flex-col gap-[8px]">
          <h3 className="text-[38px]">Top creators</h3>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </span>
        <MainButton
          title={"View Rankings"}
          icon={"src/assets/RocketLaunchIcon.png"}
          wide={true}
          CTS={"border-2 border-[#A259FF] bg-transparent"}
        />
      </div>
      <div
        ref={containerRef}
        role="cards-container"
        className="w-full flex flex-wrap"
        style={{ gap: gap }}
      >
        {creatorsData.map((d, index) => {
          return (
            index < total && (
              <CreatorsCard
                key={d.id}
                index={index}
                title={d.title}
                totalSales={d.totalSales}
                img={d.img}
                responsProps={{ divSize, row, gap }}
              />
            )
          );
        })}
      </div>
    </section>
  );
};

export default Creators;
