import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div
    className={`mx-auto w-11/12 md:max-w-screen-md lg:max-w-screen-lg py-4 ${
      className ? className : ""
    }`}
  >
    {children}
  </div>
);

export default Container;
