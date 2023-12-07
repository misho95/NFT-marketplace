import { useEffect, useRef, useState } from "react";
import TrendingCard from "./trending.card";
import { useWindowSize } from "@uidotdev/usehooks";
import ContainerCenter from "../shared/container.center";

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
      img: "/assets/dog.avif",
      title: "DSGN Animals",
      author: {
        name: "MrFox",
        icon: "/assets/Avatar2.avif",
      },
      icons: {
        icon: "/assets/dog1.avif",
        icon2: "/assets/dog2.avif",
      },
    },
    {
      id: 2,
      img: "/assets/mushrooms.avif",
      title: "Magic Mushrooms",
      author: {
        name: "Shroomie",
        icon: "/assets/Avatar3.avif",
      },
      icons: {
        icon: "/assets/mushrooms2.avif",
        icon2: "/assets/mushrooms3.avif",
      },
    },
    {
      id: 3,
      img: "/assets/robot.avif",
      title: "Disco Machines",
      author: {
        name: "BeKind2Robots",
        icon: "/assets/Avatar4.avif",
      },
      icons: {
        icon: "/assets/robot1.avif",
        icon2: "/assets/robot2.avif",
      },
    },
  ];

  return (
    <ContainerCenter>
      <section className="flex flex-col justify-between gap-[60px] py-[30px] text-white font-WorkSans">
        <div className="flex flex-col gap-[10px]">
          <h4 className="text-[38px] ">Trending Collection</h4>
          <p>Checkout our weekly updated trending collection.</p>
        </div>
        <div
          ref={containerRef}
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
    </ContainerCenter>
  );
};

export default Trending;
