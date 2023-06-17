import { FC } from "react";
import moment from "moment";
import Link from "next/link";
import { motion } from "framer-motion";

import { Tag } from "components";

interface PostProps {
  onLike: () => void;
  tags: any[];
  desc: string;
  title: string;
  img: string;
  author: string;
  authorPhoto: string;
  publishedAt: string;
  likes: number;
  id: number;
}

const Post: FC<PostProps> = ({
  title,
  desc,
  tags,
  img,
  authorPhoto,
  author,
  likes,
  publishedAt,
  onLike,
  id,
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
      exit={{ y: -20, opacity: 0 }}
      className="border-[1px] border-lightGray rounded p-3 h-[352px] flex flex-col justify-between"
    >
      <div>
        <Link href={`/post/${id}`}>
          <img
            className="object-cover w-full h-[123px]"
            src={img}
            alt="post-thumbnail"
          />
          <div className="text-black font-bold text-lg mt-[10px] line-clamp-1">
            {title}
          </div>
          {desc?.length > 0 && (
            <div
              className={`font-light text-gray text-sm mt-1 ${
                tags?.length > 0 ? "line-clamp-3" : "line-clamp-6"
              } leading-4`}
            >
              {desc}
            </div>
          )}
        </Link>
        {tags && tags?.length > 0 && (
          <ul className="mt-3 flex items-center flex-wrap gap-x-1 gap-y-1">
            {tags?.slice(0, 4).map((tag: string, index: number) => {
              return (
                <li key={index}>
                  <Tag label={tag} noAction />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex items-center justify-between text-xs mt-4">
        <div className="flex items-center">
          <img
            alt="author-profile"
            className="w-7 h-7 rounded-full"
            src={authorPhoto}
          />
          <div className="ml-2 text-[10px]">
            <div className="text-black">{author}</div>
            <div className="font-light text-gray">
              {moment(publishedAt).format("D MMMM YYYY")}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="font-light text-xs text-gray">{likes}</div>
          <svg
            onClick={onLike}
            className="ml-1 w-4 h-3 fill-gray cursor-pointer"
            viewBox="0 0 14 12"
          >
            <path d="M12.1066 0.659993C10.3466 -0.540006 8.17331 0.0199936 6.99998 1.39333C5.82665 0.0199936 3.65331 -0.546673 1.89331 0.659993C0.959979 1.29999 0.373313 2.37999 0.333313 3.51999C0.239979 6.10666 2.53331 8.17999 6.03331 11.36L6.09998 11.42C6.60665 11.88 7.38665 11.88 7.89331 11.4133L7.96665 11.3467C11.4666 8.17333 13.7533 6.09999 13.6666 3.51333C13.6266 2.37999 13.04 1.29999 12.1066 0.659993ZM7.06665 10.3667L6.99998 10.4333L6.93331 10.3667C3.75998 7.49333 1.66665 5.59333 1.66665 3.66666C1.66665 2.33333 2.66665 1.33333 3.99998 1.33333C5.02665 1.33333 6.02665 1.99333 6.37998 2.90666H7.62665C7.97331 1.99333 8.97331 1.33333 9.99998 1.33333C11.3333 1.33333 12.3333 2.33333 12.3333 3.66666C12.3333 5.59333 10.24 7.49333 7.06665 10.3667Z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
