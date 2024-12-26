

import { DetailedHTMLProps, forwardRef, ImgHTMLAttributes } from "react";
import styled from "styled-components";

const DROPDOWN_NAME = "Dropdown";

export type LogoBrandProps = DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
> & {
    /**
     * Is this the principal call to action on the image
     */
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

const Dropdown = forwardRef<HTMLImageElement, LogoBrandProps>(
    ({ onClick, ...props }, ref) => {
        return (
            <>
            Dropdown
            </>
        );
    },
);

Dropdown.displayName = DROPDOWN_NAME;

export default Dropdown;
