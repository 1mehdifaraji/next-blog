import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

const Input: FC<InputProps> = ({
  className,
  onChange,
  value,
  label,
  ...rest
}) => (
  <>
    {label && (
      <label data-testid="input-label" className="text-xs ml-3 block">
        {label}
      </label>
    )}
    <input
      data-testid="input"
      spellCheck={false}
      value={value}
      onChange={(e) => onChange(e)}
      className={`bg-inputBg hover:bg-white transition-colors text-black border-[1px] border-lightGray focus:border-gray rounded-lg py-3 px-4 font-light text-sm placeholder:text-lightGray outline-none text-dark ${
        className ? className : ""
      } ${label ? "mt-2" : "mt-0"}`}
      type="text"
      {...rest}
    />
  </>
);
export default Input;
