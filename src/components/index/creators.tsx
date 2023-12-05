import { useEffect, useRef, useState } from "react";
import CreatorsCard from "./creatos.card";
import { useWindowSize } from "@uidotdev/usehooks";

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
      img: "src/assets/ava1.png",
    },
    {
      id: 3,
      title: "GravityOne",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 4,
      title: "Juanie",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 5,
      title: "BlueWhale",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 6,
      title: "Mr Fox",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 7,
      title: "Shroomie",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },

    {
      id: 8,
      title: "robotica",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 9,
      title: "RustyRobot",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 10,
      title: "animakid",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 11,
      title: "Dotgu",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
    },
    {
      id: 12,
      title: "Ghiblier",
      totalSales: 34.53,
      img: "src/assets/ava1.png",
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
      setRow(1);
    }
  }, [windowSize]);

  return (
    <section className="flex flex-col py-[30px]">
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
