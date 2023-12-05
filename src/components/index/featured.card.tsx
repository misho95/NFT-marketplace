import img from "../../assets/Primary Photo Placeholder.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import { useGetCardSize } from "../shared/custom.hook";

const FeaturedCard = ({ row, divSize, gap }) => {
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
        className="hover:scale-90 duration-200"
      />
      <div className="flex justify-between gap-[5px]">
        <img
          src={img1}
          style={{ width: avatar.width, height: avatar.height }}
          className="hover:scale-90 duration-200"
        />
        <img
          src={img2}
          style={{ width: avatar.width, height: avatar.height }}
          className="hover:scale-90 duration-200"
        />
        <span
          className=" bg-[#A259FF] text-[22px] rounded-xl flex justify-center items-center hover:scale-90 duration-200"
          style={{ width: avatar.width, height: avatar.height }}
        >
          1024+
        </span>
      </div>
    </article>
  );
};

export default FeaturedCard;
