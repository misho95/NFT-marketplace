import { Link } from "react-router-dom";
import LogoImg from "../../../assets/Logo.avif";
import { useLazyLoadingHook } from "../custom.hook";

const Logo = () => {
  return (
    <Link to={"/"} className="sm:hover:scale-95 duration-150">
      <img
        src={LogoImg}
        className="w-[243.41px] h-[32px]"
        loading={useLazyLoadingHook()}
      />
    </Link>
  );
};

export default Logo;
