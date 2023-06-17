import { FC } from "react";

interface TagProps {
  label: string;
  onDelete?: (tagValue: string) => void;
  noAction?: boolean;
}

const Tag: FC<TagProps> = ({ label, onDelete = () => {}, noAction }) => (
  <button
    disabled={noAction}
    onClick={() => onDelete(label)}
    className={`group flex items-center border-[1px] px-3 border-lightGray ${
      !noAction ? "hover:border-gray text-sm py-2" : "py-1 text-[10px]"
    } rounded-3xl`}
  >
    {!noAction && (
      <svg
        viewBox="0 0 10 10"
        className="fill-gray group-hover:fill-black transition-colors w-3 h-3"
      >
        <path d="M9.72504 0.282478C9.43254 -0.0100218 8.96004 -0.0100218 8.66754 0.282478L5.00004 3.94248L1.33254 0.274978C1.04004 -0.017522 0.567539 -0.017522 0.275039 0.274978C-0.0174609 0.567478 -0.0174609 1.03998 0.275039 1.33248L3.94254 4.99998L0.275039 8.66748C-0.0174609 8.95998 -0.0174609 9.43248 0.275039 9.72498C0.567539 10.0175 1.04004 10.0175 1.33254 9.72498L5.00004 6.05748L8.66754 9.72498C8.96004 10.0175 9.43254 10.0175 9.72504 9.72498C10.0175 9.43248 10.0175 8.95998 9.72504 8.66748L6.05754 4.99998L9.72504 1.33248C10.01 1.04748 10.01 0.567478 9.72504 0.282478Z" />
      </svg>
    )}
    <div
      className={`${
        !noAction ? "ml-3 group-hover:text-black transition-colors" : "ml-0"
      } text-gray`}
    >
      {label}
    </div>
  </button>
);

export default Tag;
