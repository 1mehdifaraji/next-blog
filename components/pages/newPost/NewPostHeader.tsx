import { FC } from "react";

import { Back, Button } from "components";

interface NewPostHeaderProps {
  mutate: any;
  mutationLoading: boolean;
}

const NewPostHeader: FC<NewPostHeaderProps> = ({ mutate, mutationLoading }) => (
  <div className="flex items-center justify-between my-5">
    <div className="flex items-center space-x-8">
      <Back />
      <div className="font-bold text-2xl">New post</div>
    </div>
    <Button loading={mutationLoading} onClick={mutate} showIcon={false}>
      Publish post
    </Button>
  </div>
);

export default NewPostHeader;
