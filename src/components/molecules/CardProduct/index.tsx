import {
  ReactNode,
  DetailedHTMLProps,
  forwardRef,
  HtmlHTMLAttributes,
} from "react";

const CARD_PRODUCT_NAME = "CardProduct";

export type CardProductProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};

const CardProduct = forwardRef<HTMLDivElement, CardProductProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div ref={ref} {...prop}>
        {children}
      </div>
    );
  },
);

CardProduct.displayName = CARD_PRODUCT_NAME;

export default CardProduct;
