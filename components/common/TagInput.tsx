import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  onCreate: (value: string) => void;
  label?: string;
}

const TagInput: FC<TagInputProps> = ({
  value,
  onChange,
  onCreate,
  label,
  ...rest
}) => {
  return (
    <>
      {label && <label className="text-xs ml-3 block">{label}</label>}
      <div
        className={`bg-inputBg transition-colors flex items-center py-3 px-4 rounded-lg border-[1px] border-lightGray focus-within:border-gray ${
          label ? "mt-2" : "mt-0"
        }`}
      >
        <input
          type="text"
          spellCheck={false}
          value={value}
          onChange={onChange}
          className={`w-full placeholder:text-gray text-sm font-light outline-none`}
          {...rest}
        />
        <button
          disabled={!value?.length}
          onClick={() => onCreate(value)}
          className="transition-colors flex items-center"
        >
          <span
            className={`text-lightGray mr-2 text-sm font-bold ${
              value?.length > 0 ? "text-blue" : "text-lightGray"
            }`}
          >
            Add
          </span>
          <svg
            className={`w-3 h-3 ${
              value?.length > 0 ? "fill-blue" : "fill-lightGray"
            }`}
            viewBox="0 0 10 10"
            fill="none"
          >
            <path d="M8.99992 5.66668H5.66659V9.00001C5.66659 9.36668 5.36659 9.66668 4.99992 9.66668C4.63325 9.66668 4.33325 9.36668 4.33325 9.00001V5.66668H0.999919C0.633252 5.66668 0.333252 5.36668 0.333252 5.00001C0.333252 4.63334 0.633252 4.33334 0.999919 4.33334H4.33325V1.00001C4.33325 0.633344 4.63325 0.333344 4.99992 0.333344C5.36659 0.333344 5.66659 0.633344 5.66659 1.00001V4.33334H8.99992C9.36659 4.33334 9.66659 4.63334 9.66659 5.00001C9.66659 5.36668 9.36659 5.66668 8.99992 5.66668Z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TagInput;
