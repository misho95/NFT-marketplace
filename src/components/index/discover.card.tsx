import { useGetCardSize } from "../shared/custom.hook";

interface PropsType {
  data: {
    id: number;
    title: string;
    img: string;
    author: {
      icon: string;
      name: string;
    };
    price: number;
    highestbid: number;
  };
  responsProps: {
    divSize: number;
    row: number;
    gap: number;
  };
}

const DiscoverCard = ({ data, responsProps }: PropsType) => {
  const { divSize, row, gap } = responsProps;
  const { width, height } = useGetCardSize({
    width: 330,
    height: 469,
    row: row,
    divSize: divSize,
    gap: gap,
  });

  if (!width || !height) {
    return;
  }

  return (
    <article
      className=" text-white font-WorkSans cursor-pointer flex flex-col sm:hover:scale-90 duration-200"
      style={{ width: width, height: height }}
    >
      <img
        src={data.img}
        loading="lazy"
        alt={data.title}
        className="w-full h-fit"
      />
      <div className="flex flex-col gap-[15px] justify-between px-[20px] py-[10px] bg-[#3B3B3B] rounded-b-2xl">
        <h5 className="text-[22px]">Distant Galaxy</h5>
        <span className="flex gap-[6px]">
          <img
            src={data.author.icon}
            loading="lazy"
            alt={data.author.name}
            className="w-fit h-fit"
          />
          <p>{data.author.name}</p>
        </span>
        <div className="flex justify-between gap-[10px]">
          <div className="flex flex-col gap-[2px]">
            <span className="text-[#858584] text-[14px]">Price</span>
            <h5>{data.price} ETH</h5>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-[#858584] text-[14px]">Highest Bid</span>
            <h5>{data.highestbid} wETH</h5>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DiscoverCard;
