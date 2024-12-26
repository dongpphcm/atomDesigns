import {
    DetailedHTMLProps,
    forwardRef,
    HTMLAttributes
} from "react";
import styled, { css } from "styled-components";
import { BORDER_STYLE_VAR, COLOR_VAR, IBorderStyle, IBorderStyleVar, IColor, IColorVar } from "../commons/constant";
import { checkKeyExists } from "../utils";

const DEVIDER_NAME = "BoxOval";

interface DeviderStyleProps {
    $color?: IColor;
    $size?: number;
    $type?: IBorderStyle;
}
const DeviderStyle = styled.hr<DeviderStyleProps>`
width: 100%;
border: 1px dotted blue; 
 border-style: ${BORDER_STYLE_VAR.solid};
  ${props =>
        props.$size &&
        css`
      border: ${props.$size}px;
    `};
  ${props =>
        props.$color &&
        css`
      border-color: ${checkKeyExists<IColorVar>(props.$color, COLOR_VAR) ? COLOR_VAR[props.$color] : COLOR_VAR.gray};
    `};
     ${props =>
        props.$type &&
        css`
      border-style: ${checkKeyExists<IBorderStyleVar>(props.$type, BORDER_STYLE_VAR) ? BORDER_STYLE_VAR[props.$type] : BORDER_STYLE_VAR.solid};
    `};
`;

interface DivStyleProps {
    $width?: number;
}
const DivStyle = styled.div<DivStyleProps>`
 border-style: ${BORDER_STYLE_VAR.solid};
  ${props =>
        props.$width &&
        css`
      width: ${props.$width}em;
    `};
`;

export type AvatarProps = DetailedHTMLProps<
    HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
> & {
    color?: IColor;
    size?: number;
    width?: number;
    type?: IBorderStyle
    className?: string;
};

const Devider = forwardRef<HTMLHRElement, AvatarProps>(
    ({ color, size, width, type, className, ...prop }, ref) => {
        return (
            <DivStyle $width={width} className={className}>
                <DeviderStyle
                    $color={color}
                    $size={size}
                    $type={type}
                    ref={ref}
                    {...prop}/>
            </DivStyle>
        );
    },
);

Devider.displayName = DEVIDER_NAME;

export default Devider;
