import { Link } from "react-router-dom";
import LogoImg from "../../../assets/Logo.png";

const Logo = () => {
  return (
    <Link to={"/"} className="hover:scale-95 duration-150">
      <img src={LogoImg} className="w-[243.41px] h-[32px]" loading="lazy" />
    </Link>
  );
};

export default Logo;
