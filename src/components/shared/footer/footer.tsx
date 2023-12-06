import Discord from "../../../assets/DiscordLogo.png";
import YouTube from "../../../assets/YoutubeLogo.png";
import Twitter from "../../../assets/TwitterLogo.png";
import Instagram from "../../../assets/InstagramLogo.png";
import { NavLinks } from "../nav.links";
import { Link, useLocation } from "react-router-dom";
import MainButton from "../main.button";
import Logo from "../header/logo";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const Footer = () => {
  const windowSize = useWindowSize();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (windowSize.width && windowSize.width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

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
      <div
        role="center-footer-content"
        className="w-11/12 sm:w-10/12 lg:w-8/12 py-[45px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[20px]">
          <span className="flex flex-col gap-[20px] text-[#CCCCCC] font-WorkSans">
            <Logo />
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <span className="flex gap-[5px] ">
              <img
                src={Discord}
                className="opacity-50 hover:opacity-100 hover:scale-90 duration-200 cursor-pointer"
                loading="lazy"
              />
              <img
                src={YouTube}
                className="opacity-50 hover:opacity-100 hover:scale-90 duration-200 cursor-pointer"
                loading="lazy"
              />
              <img
                src={Twitter}
                className="opacity-50 hover:opacity-100 hover:scale-90 duration-200 cursor-pointer"
                loading="lazy"
              />
              <img
                src={Instagram}
                className="opacity-50 hover:opacity-100 hover:scale-90 duration-200 cursor-pointer"
                loading="lazy"
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
                  className="text-[#CCCCCC] p-[10px] hover:scale-95 duration-150"
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
            <label className="flex flex-col gap-[20px] sm:relative sm:w-[420px] sm:h-[60px] sm:block">
              <input
                type="text"
                placeholder="Enter your email here"
                className=" sm:absolute left-0 bg-white rounded-3xl w-full h-[60px] p-[15px] focus:outline-none text-black"
              />
              <span className=" sm:absolute sm:-right-[1px] sm:top-1/2 sm:-translate-y-1/2">
                <MainButton
                  title={"Subscribe"}
                  icon={mobile ? "/assets/EnvelopeSimple.png" : null}
                  wide={true}
                  CTS={"w-full"}
                />
              </span>
            </label>
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
