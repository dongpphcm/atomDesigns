import {
  DetailedHTMLProps,
  forwardRef,
  ImgHTMLAttributes
} from "react";
import styled, { css } from "styled-components";
import LogoImage from "../LogoImage";
import { IColor } from "../commons/constant";


const BOX_OVAL_NAME = "BoxOval";
interface BoxOvalStyleProps {
  $color?: IColor;
}

const BoxOvalStyle = styled.div<BoxOvalStyleProps>`
display: flex; 
height: 4.7272727em; 
width: 3.36em; 
align-items: center; 
justify-content: center;
background: var(--bg-blue); 
border-radius: var(--max-radius);
  ${props =>
    props.$color &&
    css`
      background: var(--bg-blue);
    `};
`;

export type AvatarProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
};

const BoxOval = forwardRef<HTMLImageElement, AvatarProps>(
  ({ children, src, ...prop }, ref) => {
    return (
      <BoxOvalStyle ref={ref} {...prop}>
        <LogoImage src={src} />
      </BoxOvalStyle>
    );
  },
);

BoxOval.displayName = BOX_OVAL_NAME;

export default BoxOval;
