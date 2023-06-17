import { FC } from "react";
import { Button } from "@/components";

interface PaginationProps {
  handleNextPage: () => void;
  handlePrevPage: () => void;
  currentPage: string;
}

const Pagination: FC<PaginationProps> = ({
  handleNextPage,
  handlePrevPage,
  currentPage,
}) => (
  <div className="flex items-center justify-center space-x-2 my-5">
    <Button showIcon={false} onClick={handlePrevPage}>
      Prev
    </Button>
    <div>{currentPage}</div>
    <Button showIcon={false} onClick={handleNextPage}>
      Next
    </Button>
  </div>
);

export default Pagination;
