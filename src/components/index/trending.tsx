import { useEffect, useRef, useState } from "react";
import TrendingCard from "./trending.card";
import { useWindowSize } from "@uidotdev/usehooks";

const Trending = () => {
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
      setRow(2);
      setGap(20);
    } else {
      setRow(1);
    }
  }, [windowSize]);

  const featuredData = [
    {
      id: 1,
      img: "src/assets/dog.png",
      title: "DSGN Animals",
      author: {
        name: "MrFox",
        icon: "src/assets/Avatar2.png",
      },
      icons: {
        icon: "src/assets/dog1.png",
        icon2: "src/assets/dog2.png",
      },
    },
    {
      id: 2,
      img: "src/assets/mushrooms.png",
      title: "Magic Mushrooms",
      author: {
        name: "Shroomie",
        icon: "src/assets/Avatar3.png",
      },
      icons: {
        icon: "src/assets/mushrooms2.png",
        icon2: "src/assets/mushrooms3.png",
      },
    },
    {
      id: 3,
      img: "src/assets/robot.png",
      title: "Disco Machines",
      author: {
        name: "BeKind2Robots",
        icon: "src/assets/Avatar4.png",
      },
      icons: {
        icon: "src/assets/robot1.png",
        icon2: "src/assets/robot2.png",
      },
    },
  ];

  return (
    <section className="flex flex-col justify-between gap-[60px] py-[30px] text-white font-WorkSans">
      <div role="title" className="flex flex-col gap-[10px]">
        <h4 className="text-[38px] ">Trending Collection</h4>
        <p>Checkout our weekly updated trending collection.</p>
      </div>
      <div
        ref={containerRef}
        role="cards-holder"
        className="flex justify-between w-full"
        style={{ gap: gap }}
      >
        {featuredData.map((d, index) => {
          return (
            row > index && (
              <TrendingCard
                key={d.id}
                props={{
                  img: d.img,
                  title: d.title,
                  author: {
                    name: d.author.name,
                    icon: d.author.icon,
                  },
                  icons: {
                    icon: d.icons.icon,
                    icon2: d.icons.icon2,
                  },
                }}
                responsProps={{ divSize, row, gap }}
              />
            )
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
