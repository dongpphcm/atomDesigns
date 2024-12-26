"use client";
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  forwardRef,
  ReactNode,
} from "react";

const HEADER_NAME = "Header";

export type HeaderProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div {...prop} ref={ref}>
        {children}
      </div>
    );
  },
);

Header.displayName = HEADER_NAME;

export default Header;
