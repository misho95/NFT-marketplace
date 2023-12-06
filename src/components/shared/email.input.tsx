import { useWindowSize } from "@uidotdev/usehooks";
import MainButton from "./main.button";
import { useEffect, useState } from "react";

interface PropsType {
  width: number | string;
  response: "sm" | "md" | "lg";
  checkForMobile: boolean;
}

const EmailInput = ({ width, response, checkForMobile }: PropsType) => {
  const windowSize = useWindowSize();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (windowSize.width && windowSize.width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <label
      className={`flex flex-col gap-[20px] relative h-fit ${
        response === "sm" ? "md:h-[60px]" : "lg:h-[60px]"
      } `}
      style={{ width: mobile ? "100%" : width }}
    >
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className={`${
          response === "sm"
            ? "sm:absolute"
            : response === "md"
            ? "md:absolute"
            : "lg:absolute"
        }  w-full h-full rounded-3xl p-[10px]`}
      />
      <div
        className={`${
          response === "sm"
            ? "sm:absolute"
            : response === "md"
            ? "md:absolute"
            : "lg:absolute"
        } -right-[2px]`}
      >
        <MainButton
          title={"Subscribe"}
          icon={
            checkForMobile
              ? mobile
                ? "/assets/EnvelopeSimple.png"
                : null
              : "/assets/EnvelopeSimple.png"
          }
          wide={true}
          CTS={"w-full"}
        />
      </div>
    </label>
  );
};

export default EmailInput;
