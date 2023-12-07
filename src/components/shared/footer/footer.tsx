import Discord from "../../../assets/DiscordLogo.png";
import YouTube from "../../../assets/YoutubeLogo.png";
import Twitter from "../../../assets/TwitterLogo.png";
import Instagram from "../../../assets/InstagramLogo.png";
import { NavLinks } from "../nav.links";
import { Link, useLocation } from "react-router-dom";
import Logo from "../header/logo";
import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import EmailInput from "../email.input";

const Footer = () => {
  const location = useLocation();
  const [animatedHeader, api] = useSpring(() => ({
    from: { opacity: 0 },
    config: {
      duration: 800,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  }));

  const handelAnimation = () => {
    api.start({
      delay: 500,
      from: { opacity: 0 },
      to: { opacity: 1 },
    });
  };

  useEffect(() => {
    handelAnimation();
  }, [location]);

  return (
    <animated.footer
      style={{ ...animatedHeader }}
      className="w-full bg-[#3B3B3B] flex justify-center items-center"
    >
      <div className="w-11/12 sm:w-10/12 lg:w-8/12 py-[45px] flex flex-col gap-[30px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[20px]">
          <span className="flex flex-col gap-[20px] text-[#CCCCCC] font-WorkSans">
            <Logo />
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <span className="flex gap-[5px] ">
              <img
                src={Discord}
                className="opacity-50 hover:opacity-100 sm:hover:scale-90 duration-200 cursor-pointer w-fit h-fit"
                loading="lazy"
                alt="discord"
              />
              <img
                src={YouTube}
                className="opacity-50 hover:opacity-100 sm:hover:scale-90 duration-200 cursor-pointer w-fit h-fit"
                loading="lazy"
                alt="youtube"
              />
              <img
                src={Twitter}
                className="opacity-50 hover:opacity-100 sm:hover:scale-90 duration-200 cursor-pointer w-fit h-fit"
                loading="lazy"
                alt="twitter"
              />
              <img
                src={Instagram}
                className="opacity-50 hover:opacity-100 sm:hover:scale-90 duration-200 cursor-pointer w-fit h-fit"
                loading="lazy"
                alt="instagram"
              />
            </span>
          </span>
          <span className="font-WorkSans flex flex-col">
            <h2 className="text-[30px] text-white">Explore</h2>
            {NavLinks.map((l, index) => {
              return (
                <Link
                  key={index}
                  to={l.link}
                  className="text-[#CCCCCC] p-[10px] sm:hover:scale-95 duration-150"
                >
                  {l.name}
                </Link>
              );
            })}
          </span>
          <span className="flex flex-col gap-[20px] text-[#CCCCCC] font-WorkSans">
            <h2 className="text-[30px] text-white">Join our weekly digest</h2>
            <p className="text-[#CCCCCC]">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <EmailInput width={400} response="sm" checkForMobile={true} />
          </span>
        </div>
        <div className="flex flex-col gap-[20px]">
          <span className="w-full h-[1px] bg-white/30 block" />
          <p className="text-[#CCCCCC] font-WorkSans">
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </animated.footer>
  );
};

export default Footer;
