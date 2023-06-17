import { FC, ReactNode } from "react";

import { Container, Footer } from "components";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title: currentTitle }) => {
  const title = currentTitle;
  return (
    <>
      <Head>
        <title>React blog | {title}</title>
      </Head>
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
