import { DetailedHTMLProps, forwardRef, ImgHTMLAttributes } from "react";
import { css } from "styled-components";

const LOGO_IMAGE_NAME = "LogoImage";

interface CircleProps {
  $radius?: number;
  $height?: number;
  $pdX?: number;
  $pdY?: number;
  $width?: number;
  $border?: boolean;
  $shadow?: boolean;
  $borderColor?: IColor;
  $hoverBorderColor?: IColor;
}

const ImageStyle = styled.img<CircleProps>`
  padding: 0.0625em;
  display: flex;
  height: 3em;
  width: 3em;
  align-items: center;
  justify-content: center;
  border-width: 0.0625em;
  transition: all 0.5s ease-out allow-discrete;
  border: none;
   ${props =>
    props.$width && css`
    width: ${props.$width}em;
    `};
   ${props =>
    props.$height && css`
    height: ${props.$height}em;
    `};
    ${props =>
    props.$pdX && css`
    padding-left: ${props.$pdX}em;
    padding-right: ${props.$pdX}em;
    `};
    ${props =>
    props.$pdY && css`
    padding-top: ${props.$pdY}em;
    padding-bottom: ${props.$pdY}em;
    `};
    ${props =>
    props.$border && css`
    border: 0.0625em solid var(--text-gray);
    `};
  ${props =>
    props.$radius && css`
      border-radius: ${props.$radius}px;
    `};
           ${props =>
    props.$borderColor &&
    css`
      border-color: ${checkKeyExists<IColorVar>(props.$borderColor, COLOR_VAR) ? COLOR_VAR[props.$borderColor] : COLOR_VAR.gray};
    `};
      ${props =>
    props.$shadow &&
    css`
      box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.2), 0 0.375em 1.25em rgba(0, 0, 0, 0.19);
    `};
           ${props =>
    props.$hoverBorderColor &&
    css`&:hover {
      border-color: ${checkKeyExists<IColorVar>(props.$hoverBorderColor, COLOR_VAR) ? COLOR_VAR[props.$hoverBorderColor] : COLOR_VAR.gray};
  }
       `};
`;

import styled from "styled-components";
import { COLOR_VAR, IColor, IColorVar } from "../commons/constant";
import { checkKeyExists } from "../utils";
export type LogoImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  /**
   * resource link image internet
   */
  src: string;
    /**
   * is border propeties
   */
  border?: boolean;
      /**
   * is border propeties
   */
  shadow?: boolean;
    /**
   * color border propeties
   */
  borderColor?: IColor;
      /**
   * hover color border propeties
   */
  hoverBorderColor?: IColor;
      /**
   * number width propeties
   */
  width?: number;
        /**
   * number height propeties
   */
  height?: number;
  
        /**
   * number height propeties
   */
  pdY?: number;

        /**
   * number padding-lei propeties
   */
  pdX?: number;
        /**
   * number radius propeties using em 
   */
  radius?: number;
  /**
   * Is this the principal call to action on the image
   */
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

const LogoImage = forwardRef<HTMLImageElement, LogoImageProps>(
  ({ onClick, border, radius, borderColor, hoverBorderColor, shadow, height, width, pdX, pdY, src, ...props }, ref) => {
    return (
      <ImageStyle $height={height} $width={width} $pdY={pdY} $pdX={pdX} $border={border} $hoverBorderColor={hoverBorderColor} $shadow={shadow} $radius={radius} $borderColor={borderColor} {...props} onClick={onClick} src={src} />
    );
  },
);

LogoImage.displayName = LOGO_IMAGE_NAME;

export default LogoImage;
