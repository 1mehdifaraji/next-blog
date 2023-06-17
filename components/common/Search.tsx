import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Search: FC<SearchProps> = ({ value, onChange, ...rest }) => (
  <div
    className={`flex transition-colors items-center py-2 px-4 rounded-3xl border-[1px] ${
      value?.length > 0
        ? "border-gray"
        : "border-lightGray focus:border-gray hover:border-gray"
    }`}
  >
    <svg
      className={`w-4 h-4 transition-colors ${
        value?.length > 0 ? "fill-black" : "fill-gray"
      }`}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path d="M12.4999 11H11.7099L11.4299 10.73C12.6299 9.33002 13.2499 7.42002 12.9099 5.39002C12.4399 2.61002 10.1199 0.390015 7.31989 0.0500152C3.08989 -0.469985 -0.470107 3.09001 0.0498932 7.32001C0.389893 10.12 2.60989 12.44 5.38989 12.91C7.41989 13.25 9.32989 12.63 10.7299 11.43L10.9999 11.71V12.5L15.2499 16.75C15.6599 17.16 16.3299 17.16 16.7399 16.75C17.1499 16.34 17.1499 15.67 16.7399 15.26L12.4999 11ZM6.49989 11C4.00989 11 1.99989 8.99002 1.99989 6.50002C1.99989 4.01002 4.00989 2.00002 6.49989 2.00002C8.98989 2.00002 10.9999 4.01002 10.9999 6.50002C10.9999 8.99002 8.98989 11 6.49989 11Z" />
    </svg>
    <input
      type="text"
      spellCheck={false}
      onChange={onChange}
      className={`ml-2 w-full placeholder:text-gray text-sm font-light outline-none`}
      {...rest}
    />
  </div>
);

export default Search;
