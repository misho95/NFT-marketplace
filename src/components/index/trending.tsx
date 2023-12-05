import { useEffect, useRef, useState } from "react";
import FeaturedCard from "./featured.card";
import { useWindowSize } from "@uidotdev/usehooks";

const Trending = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const windowSize = useWindowSize();
  const [divSize, setDivSize] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [gap, setGap] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const size = containerRef.current.offsetWidth;
      setDivSize(+size);
    }

    if (windowSize.width && windowSize.width > 1364) {
      setRows(3);
      setGap(20);
    } else if (windowSize.width && windowSize.width > 726) {
      setRows(2);
      setGap(30);
    } else {
      setRows(1);
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
        className="flex justify-between w-full "
        style={{ gap: gap }}
      >
        {rows > 0 && <FeaturedCard divSize={divSize} row={rows} gap={gap} />}
        {rows > 1 && <FeaturedCard divSize={divSize} row={rows} gap={gap} />}
        {rows > 2 && <FeaturedCard divSize={divSize} row={rows} gap={gap} />}
      </div>
    </section>
  );
};

export default Trending;
