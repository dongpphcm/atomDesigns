import { DetailedHTMLProps, forwardRef, ImgHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const LIST_ITEM_NAME = "ListItem";


export type IRadiusColor = "circle";
export interface IItem {
    children: ReactNode;
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
     * list item image in component
     */
    size?: string;
    /**
     * Is this the principal call to action on the image
     */
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

const ListItem = forwardRef<HTMLImageElement, LogoBrandProps>(
    ({ onClick, size = "4", list, ...props }, ref) => {
        return (
            <FlexStyle {...props} ref={ref}>
                {
                    list.map((item: IItem, index: number) => {
                        const { children } = item;
                        return (
                            children
                        )
                    })
                }
            </FlexStyle>

        );
    },
);

ListItem.displayName = LIST_ITEM_NAME;

export default ListItem;
