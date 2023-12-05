import { animated } from "@react-spring/web";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { NavLinks } from "../shared/nav.links";
import MainButton from "../shared/main.button";
import MenuIcon from "../../assets/menu.icon.png";
import { useState } from "react";
import BurgerMenu from "./burger.menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <animated.header
      className={`w-full h-[100px] flex items-center justify-center`}
    >
      {open && <BurgerMenu />}
      <div
        role="center-elements"
        className="w-11/12 sm:w-10/12 flex justify-between items-center "
      >
        <Link to={"/"} className="hover:scale-95 duration-150">
          <img src={Logo} className="w-[243.41px] h-[32px] " />
        </Link>
        <nav className="hidden lg:flex justify-center items-center gap-[6px] font-WorkSans">
          {NavLinks.map((l) => {
            return (
              <Link
                to={l.link}
                className="text-white p-[20px] hover:scale-95 duration-150"
              >
                {l.name}
              </Link>
            );
          })}
          <MainButton title={"Sign Up"} icon={"src/assets/user.icon.png"} />
        </nav>
        <button
          aria-label="Open The Menu"
          aria-hidden
          className="lg:hidden hover:scale-90 duration-200"
          onClick={() => setOpen(!open)}
        >
          <img src={MenuIcon} alt="open/close" />
        </button>
      </div>
    </animated.header>
  );
};

export default Header;
