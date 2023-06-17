import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout, Post, Spinner, Pagination, BlogHeader } from "@/components";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

const Homepage: FC<any> = ({ blogPosts, page }) => {
  const router = useRouter();
  const [searchedBlogPosts, setSearchedBlogPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searching, setSearching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLike = ({ likes, id, ...postProps }: Post): void => {
    const likeNumber = likes + 1;
    axios
      .put(`${process.env.URL}/posts/${id}`, {
        ...postProps,
        likes: likeNumber,
      })
      .then(({ data }: { data: Post }) => {
        if (search && search?.length > 0) {
          const newBlogPosts = searchedBlogPosts.map(
            ({ ...allProps }: Post) => {
              let newPost = { ...allProps };
              if (allProps.id === data.id) newPost.likes = data.likes;
              return newPost;
            }
          );
          setSearchedBlogPosts(newBlogPosts);
        } else {
          router.reload();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSearch = (): void => {
    axios
      .get(`${process.env.URL}/posts?q=${search}&_limit=${process.env.LIMIT}`)
      .then(({ data }) => setSearchedBlogPosts(data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (search === "") setSearching(false);
    else {
      setSearching(true);
      handleSearch();
    }
    // eslint-disable-next-line
  }, [search]);

  return (
    <Layout title={page}>
      <BlogHeader search={search} setSearch={setSearch} />

      <AnimatePresence>
        {isLoading ? (
          <Spinner />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {searching
              ? searchedBlogPosts?.length > 0 &&
                searchedBlogPosts.map(
                  (
                    {
                      id,
                      image,
                      likes,
                      publishDate,
                      tags,
                      text,
                      title,
                      userId,
                    },
                    index
                  ) => {
                    return (
                      <li key={index}>
                        <Post
                          id={id}
                          desc={text}
                          img={image}
                          tags={tags}
                          title={title}
                          author={String(userId)}
                          authorPhoto={image}
                          likes={likes}
                          onLike={() =>
                            handleLike({
                              id,
                              image,
                              likes,
                              publishDate,
                              tags,
                              text,
                              title,
                              userId,
                            })
                          }
                          publishedAt={publishDate}
                        />
                      </li>
                    );
                  }
                )
              : blogPosts &&
                blogPosts.map(
                  (
                    {
                      id,
                      image,
                      likes,
                      publishDate,
                      tags,
                      text,
                      title,
                      userId,
                    }: Post,
                    index: number
                  ) => {
                    return (
                      <li key={index}>
                        <Post
                          id={id}
                          desc={text}
                          img={image}
                          tags={tags}
                          title={title}
                          author={String(userId)}
                          authorPhoto={image}
                          likes={likes}
                          onLike={() =>
                            handleLike({
                              id,
                              image,
                              likes,
                              publishDate,
                              tags,
                              text,
                              title,
                              userId,
                            })
                          }
                          publishedAt={publishDate}
                        />
                      </li>
                    );
                  }
                )}
          </ul>
        )}
      </AnimatePresence>

      <Pagination
        currentPage={page}
        handleNextPage={() => router.push(`/${Number(page) + 1}`)}
        handlePrevPage={() => {
          if (Number(page) !== 1) router.push(`/${Number(page) - 1}`);
        }}
      />
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
