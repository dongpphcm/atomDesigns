import {
  ReactNode,
  DetailedHTMLProps,
  forwardRef,
  HtmlHTMLAttributes,
} from "react";

const CARD_PRODUCT_NAME = "CardDescription";

export type CardDescriptionProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};

const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div ref={ref} {...prop}>
        {children}
      </div>
    );
  },
);

CardDescription.displayName = CARD_PRODUCT_NAME;

export default CardDescription;
