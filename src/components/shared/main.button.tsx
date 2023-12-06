import { twMerge } from "tailwind-merge";

interface PropsType {
  title: string;
  icon: string | null;
  wide: boolean;
  CTS: string;
}

const MainButton = ({ title, icon, wide, CTS }: PropsType) => {
  const classes = twMerge(
    `bg-[#A259FF] text-white rounded-3xl ${
      wide ? "px-[50px] py-[18px]" : "px-[32px] py-[22px]"
    }  flex justify-center items-center gap-[12px] hover:scale-95 duration-200 font-WorkSans ${CTS}`
  );

  return (
    <button className={classes}>
      {icon && <img src={icon} loading="lazy" />}
      <p>{title}</p>
    </button>
  );
};

export default MainButton;
