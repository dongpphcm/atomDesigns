import { DetailedHTMLProps, forwardRef, ImgHTMLAttributes } from "react";
import styled, { css } from "styled-components";

const LOGO_IMAGE_NAME = "LogoBrand";

interface CircleProps {
  $radius?: number;
}

const ImageStyle = styled.img<CircleProps>`
  height: 5rem;
  width: 128px;
  user-select: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--bg-blue);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  opacity: 0.8;
  padding: 0.625em;
  ${props =>
    props.$radius &&
    css`
       border-radius: ${props.$radius}px;
    `};
`;

export type LogoBrandProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  /**
   * resource link image internet
   */
  src: string;

      /**
   * number radius propeties
   */
  radius?: number;
  /**
   * Is this the principal call to action on the image
   */
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

const LogoBrand = forwardRef<HTMLImageElement, LogoBrandProps>(
  ({ onClick, radius, src, ...props }, ref) => {
    return (
      <ImageStyle $radius={radius} {...props} onClick={onClick} src={src} />
    );
  },
);

LogoBrand.displayName = LOGO_IMAGE_NAME;

export default LogoBrand;
