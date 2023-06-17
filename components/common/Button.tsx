import { FC, HTMLProps, ReactNode } from "react";

interface ButtonProps {
  className?: HTMLProps<HTMLElement>["className"];
  onClick?: () => void;
  children: ReactNode;
  showIcon?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  showIcon = true,
  loading,
}) => {
  return (
    <button
      data-testid="button"
      disabled={loading}
      onClick={onClick}
      className={`rounded-3xl py-2 px-4 bg-blue active:bg-darkBlue shadow-btn active:shadow-none transition-all text-sm flex items-center space-x-2 hover:shadow-btnHover text-white ${
        className ? className : ""
      }`}
    >
      <div>{loading ? "Loading" : children}</div>
      {showIcon && (
        <div>
          <svg className="w-5 h-5 fill-white" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14 11H11V14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14V11H6C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9H9V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;
