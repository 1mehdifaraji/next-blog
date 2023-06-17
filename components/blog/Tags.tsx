import Tag from "components/common/Tag";
import React, { FC } from "react";

interface TagsProps {
  tags: any;
  onDelete: () => void;
}

const Tags: FC<TagsProps> = ({ tags, onDelete }) => (
  <div className="flex flex-wrap space-x-2 items-center justify-start my-3">
    {tags?.map((tag: string, index: number) => {
      return <Tag key={index} label={tag} onDelete={onDelete} />;
    })}
  </div>
);

export default Tags;
