import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import moment from "moment";

import { Back, Layout, Tag } from "@/components";
import { AnimatePresence } from "framer-motion";

interface PostpageProps {
  post: Post;
}

const Postpage: FC<PostpageProps> = ({
  post: { image, publishDate, tags, text, title },
}) => {
  return (
    <Layout title={title}>
      <AnimatePresence>
        <Back />
        <div className="mt-4 tracking-wide leading-6 text-center font-medium mx-4 md:mx-10 text-lg md:text-xl">
          {title}
        </div>
        <div className="font-light text-gray text-center mt-2">
          {moment(publishDate).format("D MMMM YYYY")}
        </div>
        {tags && tags?.length > 0 && (
          <ul className="flex items-center justify-center space-x-2 flex-wrap mt-4">
            {tags.map((tag: string, index: number) => {
              return (
                <li key={index}>
                  <Tag label={tag} noAction />
                </li>
              );
            })}
          </ul>
        )}
        <img
          alt="post-thumbnail"
          className="w-full object-cover h-40 md:h-72 mt-4"
          src={image}
        />
        <div className="text-left text-base text-gray font-light my-4 leading-5 tracking-wide">
          {text}
        </div>
      </AnimatePresence>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(`${process.env.URL}/posts`);

  let paths: any[] = [];

  data.forEach((post: Post) => {
    paths.push({
      params: { postId: `${post.id}` },
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.URL}/posts/${params?.postId}`
  );

  return {
    props: {
      post: data,
    },
    revalidate: 1,
  };
};

export default Postpage;
