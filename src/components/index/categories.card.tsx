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

  return (
    <article
      className="rounded-2xl overflow-hidden hover:scale-90 duration-200"
      style={{ width: width, height: height }}
    >
      <img src={img} className="w-full" />
      <h5 className="bg-[#3B3B3B] w-full h-[76px] rounded-b-2xl text-[22px] flex justify-center items-center">
        {title}
      </h5>
    </article>
  );
};

export default CategoriesCard;
