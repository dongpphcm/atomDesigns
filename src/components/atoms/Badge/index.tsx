"use client";
import {
    ReactNode,
    DetailedHTMLProps,
    ButtonHTMLAttributes,
    forwardRef,
} from "react";
import styled from "styled-components";
import cs from "classnames";

const BAGDE_NAME = "Badge";

type IColor = "primary" | "secondary";


const BadgeStyle = styled.button`
    position: relative; 
    display: flex; 
    height: 2.5rem; 
    width: 2.5rem; 
    align-items: center; 
    justify-content: center; 
    border-radius: 9999px; 
    border: none;
    transition-property: box-shadow; 
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
    transition-duration: 150ms; 
    box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgb(0,0,0,0.1), 0 2px 4px -2px rgb(0,0,0,0.1);
    background: var(--text-orange);
`;


const IconAbsoluteStyle = styled.span`
position: absolute; 
right: -3px; 
top: -6px; 
display: flex; 
height: 1rem; 
width: 18px; 
align-items: center; 
justify-content: center; 
border-radius: 9999px; 
background-color: rgb(255,204,50); 
font-size: 0.75rem; 
line-height: 1rem; 
font-weight: 700; 
color: rgb(255,255,255);
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
export const Badge = forwardRef<HTMLButtonElement, ButtonDefaultProps>(
    ({ label, onClick, className, color, ...props }, ref) => {
        return (
            <BadgeStyle
                {...props}
                className={cs(className)}
                onClick={onClick}
                ref={ref}
            >
                {label}
                <IconAbsoluteStyle> 1 </IconAbsoluteStyle>
            </BadgeStyle>
        );
    },
);

Badge.displayName = BAGDE_NAME;

export default Badge;
