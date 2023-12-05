import { useEffect, useRef, useState } from "react";
import FeaturedCard from "./featured.card";
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
      setGap(20);
    } else if (windowSize.width && windowSize.width > 726) {
      setRow(2);
      setGap(30);
    } else {
      setRow(1);
    }
  }, [windowSize]);

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
        {row > 0 && (
          <FeaturedCard
            props={{
              img: "src/assets/dog.png",
              icons: {
                icon: "src/assets/dog1.png",
                icon2: "src/assets/dog2.png",
              },
            }}
            responsProps={{ divSize, row, gap }}
          />
        )}
        {row > 1 && (
          <FeaturedCard
            props={{
              img: "src/assets/mushrooms.png",
              icons: {
                icon: "src/assets/mushrooms2.png",
                icon2: "src/assets/mushrooms3.png",
              },
            }}
            responsProps={{ divSize, row, gap }}
          />
        )}
        {row > 2 && (
          <FeaturedCard
            props={{
              img: "src/assets/robot.png",
              icons: {
                icon: "src/assets/robot1.png",
                icon2: "src/assets/robot2.png",
              },
            }}
            responsProps={{ divSize, row, gap }}
          />
        )}
      </div>
    </section>
  );
};

export default Trending;
