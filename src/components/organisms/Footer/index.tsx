"use client";
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  forwardRef,
  ReactNode,
} from "react";

const FOOTER_NAME = "Footer";

export type FooterProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div {...prop} ref={ref}>
        {children}
      </div>
    );
  },
);

Footer.displayName = FOOTER_NAME;

export default Footer;
