"use client";
import {
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  forwardRef,
} from "react";
import styled, { css } from "styled-components";
import cs from "classnames";

const BUTTON_NAME = "Button";

export type IColor = "primary" | "secondary";
interface ButtonProps {
  $color?: IColor;
}

const ButtonStyle = styled.button<ButtonProps>`
  margin: 0.75rem 0.5rem 0 0;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 0.375rem 0.75rem;
  font: 600 0.75rem/1 sans-serif;
  text-transform: capitalize;
  box-shadow: 0 0 0 0 rgb(59 130 246 / 0.5), 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #000;
  background: var(--bg-primary);
  border-radius: 3em;
  color: var(--text-white);
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  border: none;
  &:hover {
    background: var(--bg-blue);
  }
  ${props =>
    props.$color === "primary" &&
    css`
      background: var(--bg-primary);
      color: var(--text-white);
    `};
  ${props =>
    props.$color === "secondary" &&
    css`
      background: var(--bg-blue);
      color: var(--text-white);
    `};
`;

export type ButtonDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /**
   * Button contents
   */
  label: ReactNode;
  /**
   * Is this the principal call to action on the page?
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Class name using style css
   */
  className?: string;
  /**
   * Color using in button
   */
  color?: IColor;
  /**
   * defined type for button
   */
  type?: "button";
  /**
   * Button disabled properties
   */
  disabled?: boolean;
};
const Button = forwardRef<HTMLButtonElement, ButtonDefaultProps>(
  ({ label, onClick, className, color, ...props }, ref) => {
    return (
      <ButtonStyle
        {...props}
        $color={color}
        className={cs(className)}
        onClick={onClick}
        ref={ref}
      >
        {label}
      </ButtonStyle>
    );
  },
);

Button.displayName = BUTTON_NAME;

export default Button;
