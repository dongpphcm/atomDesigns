
"use client";
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  forwardRef
} from "react";

const TABLE_NAME = "Table";

export type HeaderProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

const Tabs = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div {...prop} ref={ref}>
        {children}
      </div>
    );
  },
);

Tabs.displayName = TABLE_NAME;

export default Tabs;
