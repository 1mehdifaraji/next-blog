import React, { FC } from "react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@/components";

const Homepage: FC<any> = ({ blogPosts, page }) => {
  return (
    <Layout title={String(page)}>
      <div>{JSON.stringify(blogPosts)}</div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(`${process.env.URL}/posts`);

  let paths: any[] = [];

  data.forEach((post: Post, i: number) => {
    paths.push({
      params: { page: `${i + 1}` },
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = params?.page;

  const { data } = await axios.get(
    `${process.env.URL}/posts?_limit=${process.env.LIMIT}&_sort=publishDate&_order=desc&_page=${page}`
  );

  return {
    props: {
      blogPosts: data,
      page,
    },
    revalidate: 1,
  };
};

export default Homepage;
