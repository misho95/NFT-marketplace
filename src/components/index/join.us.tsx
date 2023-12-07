import img from "../../assets/Photo.avif";
import ContainerCenter from "../shared/container.center";
import EmailInput from "../shared/email.input";

const JoinUs = () => {
  return (
    <ContainerCenter>
      <section className="my-[30px] p-[30px] bg-[#3B3B3B] rounded-2xl flex flex-col sm:flex-row justify-around items-center text-white font-WorkSans">
        <img src={img} className="w-[300px] h-[280px]" />
        <div className="flex flex-col gap-[20px] p-[20px]">
          <h3 className="text-[28px] lg:text-[38px]">Join our weekly digest</h3>
          <p className="text-[16px] lg:text-[22px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <div className="w-full lg:w-[450px] self-end">
            <EmailInput width={"100%"} checkForMobile={false} response="lg" />
          </div>
        </div>
      </section>
    </ContainerCenter>
  );
};
export default JoinUs;
