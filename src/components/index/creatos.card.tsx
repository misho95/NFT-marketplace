import { useGetCardSize } from "../shared/custom.hook";

interface PropsType {
  index: number;
  title: string;
  totalSales: number;
  img: string;
  responsProps: {
    divSize: number;
    row: number;
    gap: number;
  };
}

const CreatorsCard = ({
  index,
  title,
  totalSales,
  img,
  responsProps,
}: PropsType) => {
  const { divSize, row, gap } = responsProps;
  const { width, height } = useGetCardSize({
    width: 240,
    height: 238,
    row: row,
    divSize: divSize,
    gap: gap,
  });

  return (
    <article
      className="bg-[#3B3B3B] text-white font-WorkSans rounded-3xl relative hover:scale-90 duration-200 flex flex-col justify-center items-center gap-[20px] cursor-pointer"
      style={{ width: width, height: height }}
    >
      <span className="absolute top-[20px] left-[20px] w-[30px] h-[30px] bg-[#2B2B2B] rounded-full text-[#858584] flex justify-center items-center select-none">
        {index + 1}
      </span>
      <img src={img} className="w-[120px] h-[120px] rounded-full" />
      <div className="flex flex-col gap-[3px] justify-center items-center">
        <h5 className="text-[22px]">{title}</h5>
        <div role="sale-container" className="flex gap-[10px]">
          <span className="text-[#858584]">Total Sales:</span>
          <p>
            {totalSales}
            {"  "}ETH
          </p>
        </div>
      </div>
    </article>
  );
};

export default CreatorsCard;
