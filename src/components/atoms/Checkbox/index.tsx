import { DetailedHTMLProps, forwardRef, ImgHTMLAttributes } from "react";
import styled from "styled-components";

const CHECK_BOX_NAME = "Checkbox";

export interface IItem {
    label: string;
    value: string;
}

const FlexStyle = styled.div`
display: flex; 
align-items: center;
`;

export type LogoBrandProps = DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
> & {
    /**
     * list item image in component
     */
    list: Array<IItem>;
    /**
     * Is this the principal call to action on the image
     */
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

const Checkbox = forwardRef<HTMLImageElement, LogoBrandProps>(
    ({ onClick, list, ...props }, ref) => {
        return (
            <FlexStyle {...props} ref={ref}>
                {
                    list.map((item: IItem, index: number) => {
                        const { label, value } = item;
                        return (
                            <div onClick={onClick}>
                                <input type="checkbox" name={label} value={value} />
                                <label htmlFor={label}>{label}</label>
                            </div>
                        )
                    })
                }
            </FlexStyle>

        );
    },
);

Checkbox.displayName = CHECK_BOX_NAME;

export default Checkbox;
