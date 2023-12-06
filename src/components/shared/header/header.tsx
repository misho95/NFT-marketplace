import { animated, useSpring } from "@react-spring/web";
import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../nav.links";
import MainButton from "../main.button";
import MenuIcon from "../../../assets/menu.icon.png";
import { Suspense, lazy, useEffect, useState } from "react";
const BurgerMenu = lazy(() => import("./burger.menu"));
import Logo from "./logo";
import Loading from "../loading";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [animatedHeader, api] = useSpring(() => ({
    from: { y: -150 },
    config: {
      duration: 400,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  }));

  const handelAnimation = () => {
    api.start({
      from: { y: -150 },
      to: { y: 0 },
    });
  };

  useEffect(() => {
    handelAnimation();
  }, [location.pathname]);

  return (
    <animated.header
      style={{ ...animatedHeader }}
      className={`w-full h-[100px] flex items-center justify-center`}
    >
      {open && (
        <Suspense fallback={<Loading />}>
          <BurgerMenu />
        </Suspense>
      )}
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
                className="text-white p-[20px] sm:hover:scale-95 duration-150"
              >
                {l.name}
              </Link>
            );
          })}
          <MainButton
            title={"Sign Up"}
            icon={"/assets/user.icon.png"}
            wide={false}
            CTS={""}
          />
        </nav>
        <button
          aria-label="Open The Menu"
          aria-hidden
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <img src={MenuIcon} alt="open/close" loading="lazy" />
        </button>
      </div>
    </animated.header>
  );
};

export default Header;
