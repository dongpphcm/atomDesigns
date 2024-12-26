import {
  ReactNode,
  DetailedHTMLProps,
  forwardRef,
  HtmlHTMLAttributes,
} from "react";

const CONTENT_NAME = "Content";

export type ContentProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div ref={ref} {...prop}>
        {children}
      </div>
    );
  },
);

Content.displayName = CONTENT_NAME;

export default Content;
