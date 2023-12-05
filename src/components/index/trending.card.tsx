import { useGetCardSize } from "../shared/custom.hook";

interface ResponsPropsType {
  row: number;
  divSize: number;
  gap: number;
}

interface PropsType {
  img: string;
  icons: {
    icon: string;
    icon2: string;
  };
}

interface ComponentPropsType {
  responsProps: ResponsPropsType;
  props: PropsType;
}

const TrendingCard = ({ props, responsProps }: ComponentPropsType) => {
  const { row, divSize, gap } = responsProps;
  const { img, icons } = props;
  const { width, height } = useGetCardSize({
    width: 330,
    height: 525,
    row: row,
    divSize: divSize,
    gap: gap,
  });

  const avatar = useGetCardSize({
    width: 100,
    height: 100,
    row: 3,
    divSize: width,
    gap: 5,
  });

  return (
    <article
      className="flex flex-col gap-[10px]"
      style={{ width: width, height: height }}
    >
      <img
        src={img}
        style={{ width: width, height: height }}
        className="hover:scale-90 duration-200 cursor-pointer"
      />
      <div className="flex justify-between gap-[5px]">
        <img
          src={icons.icon}
          style={{ width: avatar.width, height: avatar.height }}
          className="hover:scale-90 duration-200 cursor-pointer"
        />
        <img
          src={icons.icon2}
          style={{ width: avatar.width, height: avatar.height }}
          className="hover:scale-90 duration-200 cursor-pointer"
        />
        <span
          className=" bg-[#A259FF] text-[22px] rounded-xl flex justify-center items-center hover:scale-90 duration-200 select-none cursor-pointer"
          style={{ width: avatar.width, height: avatar.height }}
        >
          1025+
        </span>
      </div>
    </article>
  );
};

export default TrendingCard;
