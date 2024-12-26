import {
  DetailedHTMLProps,
  forwardRef,
  ImgHTMLAttributes,
  ReactNode,
} from "react";
import styled from "styled-components";
import LogoImage, { IRadiusColor } from "../LogoImage";
import Text from "../Text";

const BOX_NAME = "Box";

const BoxStyle = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.6em 0.4em;
  border-radius: 0.4em;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  opacity: 0.8;
  max-width: 5rem;
`;

export type AvatarProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  radius?: IRadiusColor;
  children: ReactNode;
};

const Box = forwardRef<HTMLImageElement, AvatarProps>(
  ({ children, radius, src, ...prop }, ref) => {
    return (
      <BoxStyle ref={ref} {...prop}>
        <LogoImage radius={radius} src={src} />
        <Text children={children} />
      </BoxStyle>
    );
  },
);

Box.displayName = BOX_NAME;

export default Box;
