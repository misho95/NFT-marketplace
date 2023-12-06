import ContainerCenter from "../shared/container.center";
import MainButton from "../shared/main.button";

const NftHighLight = () => {
  return (
    <section className="w-full h-[593px] sm:h-[630px] lg:h-[640px] my-[20px] relative text-white font-WorkSans">
      <div className="absolute w-full h-full z-20 bg-gradient-to-t from-[#A259FF] to-[transparent]" />
      <img
        src="/assets/NFT Highlight.png"
        className="w-full h-full object-cover"
      />
      <article className="absolute top-0 left-0 w-full h-full z-30 flex justify-center items-end py-[60px]">
        <ContainerCenter>
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-[30px]">
            <div className="flex flex-col gap-[20px] lg:gap-[45px]">
              <span className="w-[151px] h-[44px] bg-[#3B3B3B] rounded-full flex justify-center items-center gap-[6px] cursor-pointer sm:hover:scale-90 duration-200">
                <img src={"/assets/ava7.png"} className="w-[24px] h-[24px]" />
                <p>Shroomie</p>
              </span>
              <h2 className="text-[38px] lg:text-[51px]">Magic Mashrooms</h2>
              <MainButton
                title={"See NFT"}
                icon={"/assets/EyeIcon.png"}
                wide={true}
                CTS={"bg-white text-black w-fit hidden sm:flex"}
              />
            </div>
            <div className="w-[295px] h-[147px] bg-[#3B3B3B]/50 rounded-xl flex flex-col justify-center sm:items-start p-[35px]">
              <p className="text-[12px] font-mono text-white/50">
                Auction ends in:
              </p>
              <div className="flex justify-center items-start gap-[20px]">
                <span>
                  <h3 className="text-[38px]">59</h3>
                  <p className="text-[12px] font-mono text-white/50">Hours</p>
                </span>
                <span>
                  <h3 className="text-[38px]">:</h3>
                </span>
                <span>
                  <h3 className="text-[38px]">59</h3>
                  <p className="text-[12px] font-mono text-white/50">Minuts</p>
                </span>
                <span>
                  <h3 className="text-[38px]">:</h3>
                </span>
                <span>
                  <h3 className="text-[38px]">59</h3>
                  <p className="text-[12px] font-mono text-white/50">Seconds</p>
                </span>
              </div>
            </div>
            <MainButton
              title={"See NFT"}
              icon={"/assets/EyeIcon.png"}
              wide={true}
              CTS={"bg-white text-black w-full flex sm:hidden"}
            />
          </div>
        </ContainerCenter>
      </article>
    </section>
  );
};

export default NftHighLight;
