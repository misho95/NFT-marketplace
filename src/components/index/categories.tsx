import { useEffect, useRef, useState } from "react";
import CategoriesCard from "./categories.card";
import { useWindowSize } from "@uidotdev/usehooks";
import ContainerCenter from "../shared/container.center";

const Categories = () => {
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
      setRow(4);
      setGap(30);
    } else if (windowSize.width && windowSize.width > 726) {
      setRow(4);
      setGap(20);
    } else {
      setGap(7);
      setRow(2);
    }
  }, [windowSize]);

  const categoriesData = [
    {
      id: 1,
      title: "Art",
      img: "/assets/Category Icon.avif",
    },
    {
      id: 2,
      title: "Collectibles",
      img: "/assets/Category Icon2.avif",
    },
    {
      id: 3,
      title: "Music",
      img: "/assets/Category Icon3.avif",
    },
    {
      id: 4,
      title: "Photography",
      img: "/assets/Category Icon4.avif",
    },
    {
      id: 5,
      title: "Video",
      img: "/assets/Category Icon5.avif",
    },
    {
      id: 6,
      title: "Utility",
      img: "/assets/Category Icon6.avif",
    },
    {
      id: 7,
      title: "Sport",
      img: "/assets/Category Icon7.avif",
    },
    {
      id: 8,
      title: "Virtual Worlds",
      img: "/assets/Category Icon8.avif",
    },
  ];

  return (
    <ContainerCenter>
      <section className="flex flex-col gap-[30px] py-[30px] text-white font-WorkSans">
        <h3 className="text-[28px] sm:text-[38px] text-white font-WorkSans">
          Browse Categories
        </h3>
        <div
          ref={containerRef}
          className="flex flex-wrap "
          style={{ gap: gap }}
        >
          {categoriesData.map((d) => {
            return (
              <CategoriesCard
                key={d.id}
                title={d.title}
                img={d.img}
                responsProps={{ divSize, row, gap }}
              />
            );
          })}
        </div>
      </section>
    </ContainerCenter>
  );
};

export default Categories;
