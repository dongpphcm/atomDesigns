import {
  ReactNode,
  DetailedHTMLProps,
  forwardRef,
  ParamHTMLAttributes,
} from "react";
import styled from "styled-components";

const TITLE_SUB_NAME = "TitleSub";

const TileSubStyle = styled.h3`
  margin-bottom: 1.25rem;
  font-size: 1em;
  font-weight: 800;
  line-height: 1.1363636363636365em;
  color: var(--text-primary);
`;

export type TitleSubProps = DetailedHTMLProps<
  ParamHTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  /**
   * Is this the principal call to action on the page?
   */
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  children: ReactNode;
};

const TitleSub = forwardRef<HTMLParagraphElement, TitleSubProps>(
  ({ children, onClick, ...prop }, ref) => {
    return (
      <TileSubStyle onClick={onClick} ref={ref} {...prop}>
        {children}
      </TileSubStyle>
    );
  },
);

TitleSub.displayName = TITLE_SUB_NAME;

export default TitleSub;
