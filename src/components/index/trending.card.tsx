import { useGetCardSize } from "../shared/custom.hook";

interface ResponsPropsType {
  row: number;
  divSize: number;
  gap: number;
}

interface PropsType {
  img: string;
  title: string;
  author: {
    name: string;
    icon: string;
  };
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
  const { img, icons, title, author } = props;
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

  if (!width || !height) {
    return;
  }

  return (
    <article
      className="flex flex-col gap-[10px]"
      style={{ width: width, height: height }}
    >
      <img
        src={img}
        style={{ width: width, height: height }}
        className="sm:hover:scale-90 duration-200 cursor-pointer"
        loading="lazy"
      />
      <div className="flex justify-between gap-[5px]">
        <img
          src={icons.icon}
          style={{ width: avatar.width, height: avatar.height }}
          className="sm:hover:scale-90 duration-200 cursor-pointer"
          loading="lazy"
        />
        <img
          src={icons.icon2}
          style={{ width: avatar.width, height: avatar.height }}
          className="sm:hover:scale-90 duration-200 cursor-pointer"
          loading="lazy"
        />
        <span
          className=" bg-[#A259FF] text-[22px] rounded-xl flex justify-center items-center sm:hover:scale-90 duration-200 select-none cursor-pointer"
          style={{ width: avatar.width, height: avatar.height }}
        >
          1025+
        </span>
      </div>
      <div role="author" className="flex flex-col gap-[6px]">
        <h5 className="text-[22px]">{title}</h5>
        <span className="flex gap-[6px] cursor-pointer">
          <img src={author.icon} loading="lazy" />
          <p>{author.name}</p>
        </span>
      </div>
    </article>
  );
};

export default TrendingCard;
