import { FC } from "react";

import { Back } from "components";

const NotFoundPage: FC = () => (
  <div className="text-center my-4 flex items-center justify-center space-x-5">
    <Back />
    <div>Page not found .</div>
  </div>
);

export default NotFoundPage;
