import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const ContainerCenter = ({ children }: PropsType) => {
  return <div className="w-11/12 sm:w-10/12 lg:w-8/12">{children}</div>;
};

export default ContainerCenter;
