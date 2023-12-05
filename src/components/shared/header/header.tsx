import { animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { NavLinks } from "../nav.links";
import MainButton from "../main.button";
import MenuIcon from "../../../assets/menu.icon.png";
import { useState } from "react";
import BurgerMenu from "./burger.menu";
import Logo from "./logo";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <animated.header
      className={`w-full h-[100px] flex items-center justify-center`}
    >
      {open && <BurgerMenu />}
      <div
        role="center-elements"
        className="w-11/12 sm:w-10/12 lg:w-8/12 flex justify-between items-center "
      >
        <Logo />
        <nav className="hidden lg:flex justify-center items-center gap-[6px] font-WorkSans">
          {NavLinks.map((l, index) => {
            return (
              <Link
                key={index}
                to={l.link}
                className="text-white p-[20px] hover:scale-95 duration-150"
              >
                {l.name}
              </Link>
            );
          })}
          <MainButton
            title={"Sign Up"}
            icon={"src/assets/user.icon.png"}
            wide={false}
            CTS={""}
          />
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
