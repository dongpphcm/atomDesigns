import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

const TEXT_FEILD_NAME = "Text";

export type TextFieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  block?: boolean;
  error?: boolean;
};
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...props }, ref) => {
    return <input {...props} ref={ref} />;
  },
);

TextField.displayName = TEXT_FEILD_NAME;

export default TextField;
