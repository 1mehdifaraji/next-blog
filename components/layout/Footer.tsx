import { FC } from "react";

const Footer: FC = () => (
  <footer className="text-center text-gray py-3 border-t-[1px] border-gray text-xs">
    All Rights Reserved {new Date().getFullYear()} Mehdi Faraji
  </footer>
);

export default Footer;
