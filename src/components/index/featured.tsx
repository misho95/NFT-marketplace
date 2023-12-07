import img from "../../assets/Image Placeholder.avif";
import avatar from "../../assets/Avatar.avif";
import MainButton from "../shared/main.button";
import ContainerCenter from "../shared/container.center";
import { useLazyLoadingHook } from "../shared/custom.hook";

const FeaturedPoster = () => {
  return (
    <div className="bg-[#3B3B3B] rounded-3xl w-full h-full sm:hover:scale-90 duration-200">
      <img
        src={img}
        loading={useLazyLoadingHook()}
        className="w-fit h-fit"
        alt="space-img"
      />
      <span className="p-[25px] flex flex-col gap-[10px]">
        <h5 className="text-white text-[25px]">Space Walking</h5>
        <span className="flex gap-[10px] ">
          <img
            src={avatar}
            loading={useLazyLoadingHook()}
            className="w-fit h-fit"
            alt="avatar"
          />
          <p>Animakid</p>
        </span>
      </span>
    </div>
  );
};

const Featured = () => {
  return (
    <ContainerCenter>
      <section className="flex flex-col sm:flex-row justify-between gap-[60px] py-[30px] text-white font-WorkSans">
        <div className=" w-full sm:w-[510px] flex flex-col gap-[20px]">
          <h1 className="text-[28px] sm:text-[38px] lg:text-[67px]">
            Discover digital art & Collect NFTs
          </h1>
          <p className=" text-[16px] lg:text-[22px] text-[#CCCCCC]">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="block sm:hidden w-full">
            <FeaturedPoster />
          </div>
          <MainButton
            title={"Get Started"}
            icon={"/assets/RocketLaunch.png"}
            wide={true}
            CTS={"w-full sm:w-fit sm:h-fit"}
          />
          <div className="flex gap-[50px]">
            <span>
              <h4 className="text-[22px] lg:text-[28px]">240k+ </h4>
              <p className="text-[16px] lg:text-[24px]">Total Sale</p>
            </span>
            <span>
              <h4 className="text-[22px] lg:text-[28px]">100k+</h4>
              <p className="text-[16px] lg:text-[24px]">Auctions</p>
            </span>
            <span>
              <h4 className="text-[22px] lg:text-[28px]">240k+ </h4>
              <p className="text-[16px] lg:text-[24px]">Artists</p>
            </span>
          </div>
        </div>
        <div className="hidden sm:block w-[330px] lg:w-[510px] h-fit">
          <FeaturedPoster />
        </div>
      </section>
    </ContainerCenter>
  );
};

export default Featured;
