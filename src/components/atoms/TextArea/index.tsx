import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from "react";

export type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  /**
   * default value in feild text area
   */
  defaultValue?: string;
  /**
   * default value in feild text area
   */

  placeholder?: string;
  /**
   * Is this the principal call to action on the image
   */
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ defaultValue, placeholder, ...props }, ref) => {
    return (
      <textarea {...props} ref={ref} placeholder={placeholder}>
        {defaultValue}
      </textarea>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
