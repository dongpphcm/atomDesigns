import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from "react";

const SELECT_NAME = "Select";

interface TOption {
  value: string;
  label: string;
}
export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  name: string;
  onClick?: () => void;
  options: Array<TOption>;
};
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, options, ...props }, ref) => {
    return (
      <select {...props} ref={ref} name={name}>
        {options.map((itemOption: TOption, index: number) => {
          const { value, label } = itemOption;
          return (
            <option key={index + value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    );
  },
);

Select.displayName = SELECT_NAME;

export default Select;
