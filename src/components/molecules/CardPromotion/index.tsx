import {
  ReactNode,
  DetailedHTMLProps,
  forwardRef,
  HtmlHTMLAttributes,
} from "react";

const CARD_PROMOTOIN_NAME = "CardPromotion";

export type CardPromotionProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};
const CardPromotion = forwardRef<HTMLDivElement, CardPromotionProps>(
  ({ children, ...prop }, ref) => {
    return (
      <div ref={ref} {...prop}>
        {children}
      </div>
    );
  },
);

CardPromotion.displayName = CARD_PROMOTOIN_NAME;

export default CardPromotion;
