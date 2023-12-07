import { useEffect, useRef, useState } from "react";
import CreatorsCard from "./creatos.card";
import { useWindowSize } from "@uidotdev/usehooks";
import MainButton from "../shared/main.button";
import ContainerCenter from "../shared/container.center";

const Creators = () => {
  const creatorsData = [
    {
      id: 1,
      title: "Keepitreal",
      totalSales: 34.53,
      img: "/assets/ava1.avif",
    },
    {
      id: 2,
      title: "DigiLab",
      totalSales: 34.53,
      img: "/assets/ava2.avif",
    },
    {
      id: 3,
      title: "GravityOne",
      totalSales: 34.53,
      img: "/assets/ava3.avif",
    },
    {
      id: 4,
      title: "Juanie",
      totalSales: 34.53,
      img: "/assets/ava4.avif",
    },
    {
      id: 5,
      title: "BlueWhale",
      totalSales: 34.53,
      img: "/assets/ava5.avif",
    },
    {
      id: 6,
      title: "Mr Fox",
      totalSales: 34.53,
      img: "/assets/ava6.avif",
    },
    {
      id: 7,
      title: "Shroomie",
      totalSales: 34.53,
      img: "/assets/ava7.avif",
    },

    {
      id: 8,
      title: "robotica",
      totalSales: 34.53,
      img: "/assets/ava8.avif",
    },
    {
      id: 9,
      title: "RustyRobot",
      totalSales: 34.53,
      img: "/assets/ava9.avif",
    },
    {
      id: 10,
      title: "animakid",
      totalSales: 34.53,
      img: "/assets/ava10.avif",
    },
    {
      id: 11,
      title: "Dotgu",
      totalSales: 34.53,
      img: "/assets/ava11.avif",
    },
    {
      id: 12,
      title: "Ghiblier",
      totalSales: 34.53,
      img: "/assets/ava12.avif",
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
    <ContainerCenter>
      <section className="flex flex-col gap-[30px] py-[30px]">
        <div className="font-WorkSans text-white flex justify-between items-center pb-[45px]">
          <span className="flex flex-col gap-[8px]">
            <h3 className="text-[28px] sm:text-[38px]">Top creators</h3>
            <p className="text-[16px] sm:text-[22px]">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </span>
          <MainButton
            title={"View Rankings"}
            icon={"/assets/RocketLaunchIcon.png"}
            wide={true}
            CTS={"border-2 border-[#A259FF] bg-transparent hidden sm:flex"}
          />
        </div>
        <div
          ref={containerRef}
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
        <MainButton
          title={"View Rankings"}
          icon={"/assets/RocketLaunchIcon.png"}
          wide={true}
          CTS={"border-2 border-[#A259FF] bg-transparent flex sm:hidden"}
        />
      </section>
    </ContainerCenter>
  );
};

export default Creators;
