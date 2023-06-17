import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Back: FC = () => {
  const navigate = useNavigate();

  const goBack = (): void => navigate(-1);

  return (
    <button
      onClick={goBack}
      className="border-[1px] border-lightGray rounded-full p-2 w-10 h-10 flex justify-center items-center"
    >
      <svg viewBox="0 0 16 16" className="fill-black w-4 h-4">
        <path d="M15 7H3.82998L8.70998 2.12C9.09998 1.73 9.09998 1.09 8.70998 0.700001C8.31998 0.310001 7.68998 0.310001 7.29998 0.700001L0.70998 7.29C0.31998 7.68 0.31998 8.31 0.70998 8.7L7.29998 15.29C7.68998 15.68 8.31998 15.68 8.70998 15.29C9.09998 14.9 9.09998 14.27 8.70998 13.88L3.82998 9H15C15.55 9 16 8.55 16 8C16 7.45 15.55 7 15 7Z" />
      </svg>
    </button>
  );
};

export default Back;
