
"use client";
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  forwardRef,
  ReactNode,
} from "react";

const TABLE_NAME = "Table";

export type HeaderProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

const Table = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div {...prop} ref={ref}>
        {children}
      </div>
    );
  },
);

Table.displayName = TABLE_NAME;

export default Table;
