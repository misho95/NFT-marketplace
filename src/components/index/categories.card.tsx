import { useGetCardSize } from "../shared/custom.hook";

interface PropsType {
  title: string;
  img: string;
  responsProps: {
    row: number;
    divSize: number;
    gap: number;
  };
}

const CategoriesCard = ({ title, img, responsProps }: PropsType) => {
  const { row, divSize, gap } = responsProps;
  const { width, height } = useGetCardSize({
    width: 240,
    height: 316,
    row: row,
    divSize: divSize,
    gap: gap,
  });

  if (!width || !height) {
    return;
  }

  return (
    <article
      className="rounded-2xl overflow-hidden sm:hover:scale-90 duration-200 cursor-pointer"
      style={{ width: width, height: height && height }}
    >
      <img src={img} className="w-full" loading="lazy" />
      <h5 className="bg-[#3B3B3B] w-full rounded-b-2xl text-[16px] py-[10px] lg:text-[22px] flex justify-center items-center">
        {title}
      </h5>
    </article>
  );
};

export default CategoriesCard;
