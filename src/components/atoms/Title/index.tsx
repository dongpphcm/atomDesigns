import {
  ReactNode,
  DetailedHTMLProps,
  forwardRef,
  ParamHTMLAttributes,
} from "react";
import styled, { css } from "styled-components";
import { BOLD_VAR, COLOR_VAR, FONT_SIZE, IBold, IBoldVar, IColor, IColorVar, IFontSize, IFontSizeVar, IFontStyle, IFontStyleVar, FONT_STYLE_VAR } from "../commons/constant";
import { checkKeyExists } from "../utils";

const TITLE_NAME = "Title";

interface TitleStyleProps {
  $size?: IFontSize;
  $color?: IColor;
  $hoverColor?: IColor;
  $bold?: IBold;
  $style?: IFontStyle;
}
const TitleStyle = styled.h3<TitleStyleProps>`
  padding-bottom: 1.25rem;
  line-height: 1.5625em;
  margin: 0em;
  transition: all 0.5s ease-out allow-discrete;
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
  ParamHTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
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
* font style in component Text
*/
  style?: IFontStyle;
};

const Title = forwardRef<HTMLDivElement, TextProps>(
  ({ children, style, size, color, bold, hoverColor, ...prop }, ref) => {
    return (
      <TitleStyle $style={style} $size={size} $color={color} $bold={bold} $hoverColor={hoverColor} ref={ref} {...prop}>
        {children}
      </TitleStyle>
    );
  },
);

Title.displayName = TITLE_NAME;

export default Title;
