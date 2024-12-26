"use client";
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  forwardRef,
  ReactNode,
} from "react";
import styled, { keyframes, css } from "styled-components";

const SKELETON_NAME = "Skeleton";

// Create the keyframes
const shineLoading = keyframes`
  to {
    background-position-x: -20%;
  }
`;

interface SkeletonStyleProps{
  $width?: number;
  $height?: number;
  $radius?: number;
}

const SkeletonStyle = styled.div<SkeletonStyleProps>`
dispaly: inline;
 background-color: var(--loading-grey);
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, .5) 50%,
    rgba(255, 255, 255, 0) 60%
  ) var(--loading-grey);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s ${shineLoading} ease-in-out infinite;
  // overflow: hidden;
  ${props =>
    props.$width &&
    css`
      width: ${props.$width}em;
    `};
    ${props =>
    props.$height &&
    css`
      height: ${props.$height}em;
    `};
    ${props =>
    props.$radius &&
    css`
      border-radius: ${props.$radius}px;
    `};
`;

const DivBGStyle = styled.div`
//  background-color: rgb(226,232,240);
`;

export type SkeletonProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /**
 * component node inside
 */
  children?: ReactNode;
  /**
 * width in component
 */
  width?: number;
  /**
 * height in component
 */
  height?: number;
    /**
 * rounder in component
 */
  radius?: number;
};

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ children, width, height, radius, ...prop }, ref) => {
    return (
      <SkeletonStyle $width={width} $height={height} $radius={radius} {...prop} ref={ref}>
        <DivBGStyle>
            {children}
        </DivBGStyle>
      </SkeletonStyle>
    );
  },
);

Skeleton.displayName = SKELETON_NAME;

export default Skeleton;
