import { useGetCardSize } from "../shared/custom.hook";

interface PropsType {
  data: {
    id: number;
    title: string;
    text: string;
    icon: string;
  };
  responsProps: {
    divSize: number;
    row: number;
    gap: number;
  };
}

const HowItWorksCard = ({ data, responsProps }: PropsType) => {
  const { divSize, row, gap } = responsProps;
  const { width, height } = useGetCardSize({
    width: 330,
    height: 439,
    row: row,
    divSize: divSize,
    gap: gap,
  });
  const { title, text, icon } = data;

  if (!width || !height) {
    return;
  }

  return (
    <article
      className="bg-[#3B3B3B] rounded-2xl text-white font-WorkSans flex flex-col justify-center items-center gap-[3px] lg:gap-[10px] p-[30px] lg:p-[50px] sm:hover:scale-90 duration-200 cursor-pointer"
      style={{ width: width, height: height }}
    >
      <img
        src={icon}
        className="w-full h-full sm:w-[133px] lg:w-full sm:h-[133px] lg:h-full"
        alt={title}
        loading="lazy"
      />
      <h5 className="text-center text-[16px] lg:text-[22px]">{title}</h5>
      <p className="text-center text-[12px] lg:text-[16px] text-white/70">
        {text}
      </p>
    </article>
  );
};

export default HowItWorksCard;
