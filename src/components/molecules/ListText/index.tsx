"use client";
import { DetailedHTMLProps, HtmlHTMLAttributes, forwardRef } from "react";

interface IItemList {
  label: string;
  src?: string;
  onClick?: () => void;
}

const LIST_TEXT_NAME = "ListText";

export type ButtonDefaultProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  list: Array<IItemList>;
};

const ListText = forwardRef<HTMLDivElement, ButtonDefaultProps>(
  ({ list, ...prop }, ref) => {
    return (
      <div {...prop} ref={ref}>
        {list.map((item: IItemList, index) => {
          const { label, src } = item;
          return src ? (
            <a key={index + label} href={src}>
              {label}
            </a>
          ) : (
            <span key={index + label}>{label}</span>
          );
        })}
      </div>
    );
  },
);

ListText.displayName = LIST_TEXT_NAME;

export default ListText;
