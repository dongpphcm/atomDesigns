import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  forwardRef
} from "react";

const TIME_INPUT_NAME = "TimeInput";

export type HeaderProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

const TimeInput = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div {...prop} ref={ref}>
        {children}
      </div>
    );
  },
);

TimeInput.displayName = TIME_INPUT_NAME;

export default TimeInput;
