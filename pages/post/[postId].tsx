import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";

interface PostpageProps {
  post: any;
}

const Postpage: FC<PostpageProps> = ({ post }) => {
  return (
    <div>
      Post page
      <div>{JSON.stringify(post)}</div>
    </div>
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
