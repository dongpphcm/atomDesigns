import { DetailedHTMLProps, LabelHTMLAttributes, forwardRef } from "react";

const LABEL_NAME = "Label";

export type LabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  srOnly?: boolean;
  label: string;
};
const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ label, ...props }, ref) => {
    return (
      <label {...props} ref={ref}>
        {label}
      </label>
    );
  },
);

Label.displayName = LABEL_NAME;

export default Label;
