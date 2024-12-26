import {
  ReactNode,
  DetailedHTMLProps,
  forwardRef,
  AnchorHTMLAttributes,
} from "react";
import styled, { css } from "styled-components";
import { BOLD_VAR, COLOR_VAR, FONT_SIZE, IBold, IBoldVar, IColor, IColorVar, IFontSize, IFontSizeVar , IFontStyle, IFontStyleVar, FONT_STYLE_VAR } from "../commons/constant";
import { checkKeyExists } from "../utils";

const LINK_NAME = "Link";

interface LinkStyleProps {
  $size?: IFontSize;
  $color?: IColor;
  $hoverColor?: IColor;
  $bold?: IBold;
  $style?: IFontStyle;
}

const LinkStyle = styled.a<LinkStyleProps>`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  text-decoration-line: none;
  color: var(--text-gray);
  &:hover {
    color: var(--text-orange);
  };
  ${props =>
    props.$bold &&
    css`
      font-weight: ${checkKeyExists<IBoldVar>(props.$bold, BOLD_VAR) ? BOLD_VAR[props.$bold] : BOLD_VAR[100]};
    `};
    ${props =>
    props.$size &&
    css`
      font-size: ${checkKeyExists<IFontSizeVar>(props.$size, FONT_SIZE) ? FONT_SIZE[props.$size] : FONT_SIZE.size_1};
    `};
     ${props =>
    props.$color &&
    css`
      color: ${checkKeyExists<IColorVar>(props.$color, COLOR_VAR) ? COLOR_VAR[props.$color] : COLOR_VAR.gray};
    `};
       ${props =>
    props.$hoverColor &&
    css`&:hover {
      color: ${checkKeyExists<IColorVar>(props.$hoverColor, COLOR_VAR) ? COLOR_VAR[props.$hoverColor] : COLOR_VAR.gray};
  }
    `};

    ${props =>
    props.$style &&
    css`
      font-style: ${checkKeyExists<IFontStyleVar>(props.$style, FONT_STYLE_VAR) ? FONT_STYLE_VAR[props.$style] : FONT_STYLE_VAR.normal};
    `};
`;

export type TextProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  /**
 * component node inside
 */
  children: ReactNode;
  /**
 * font size text in component Text
 */
  size?: IFontSize;
  /**
 * hover color text in component Text
 */
  hoverColor?: IColor;
  /**
* color text in component Text
*/
  color?: IColor;
  /**
* font weight in component Text
*/
  bold?: IBold;
  /**
* href derection to another page or website
*/
  href: string;
    /**
* font style in component Text
*/
  style?: IFontStyle;
};

const Link = forwardRef<HTMLAnchorElement, TextProps>(
  ({ children,style, size, color, bold, hoverColor, href, ...prop }, ref) => {
    return (
      <LinkStyle $style={style} $size={size} $color={color} $bold={bold} $hoverColor={hoverColor} ref={ref} href={href} {...prop}>
        {children}
      </LinkStyle>
    );
  },
);

Link.displayName = LINK_NAME;

export default Link;
