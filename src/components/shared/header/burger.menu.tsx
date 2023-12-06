import { Link } from "react-router-dom";
import { NavLinks } from "../nav.links";
import { useEffect } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const BurgerMenu = () => {
  useLockBodyScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      role="bg-tranparent"
      className="bg-black/20 fixed top-[100px] left-0 w-full h-screen lg:hidden"
    >
      <nav className="flex flex-col justify-center items-center gap-[3px] bg-neutral-200">
        {NavLinks.map((l, index) => {
          return (
            <Link key={index} to={l.link} className="text-black p-[20px]">
              {l.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BurgerMenu;
