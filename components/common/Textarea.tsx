import { ChangeEventHandler, FC, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  label?: string;
}

const Textarea: FC<TextareaProps> = ({
  className,
  onChange,
  value,
  label,
  ...rest
}) => (
  <>
    {label && (
      <label data-testid="textarea-label" className="text-xs ml-3 block">
        {label}
      </label>
    )}
    <textarea
      data-testid="textarea"
      value={value}
      spellCheck={false}
      onChange={(e) => onChange(e)}
      rows={5}
      className={`bg-inputBg resize-none hover:bg-white transition-colors text-black border-[1px] border-lightGray focus:border-gray rounded-lg py-3 px-4 font-light text-sm placeholder:text-lightGray outline-none text-dark ${
        className ? className : ""
      } ${label ? "mt-2" : "mt-0"}`}
      {...rest}
    />
  </>
);
export default Textarea;
