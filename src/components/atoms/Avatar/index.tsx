import { DetailedHTMLProps, forwardRef, ImgHTMLAttributes } from "react";

const AVATAR_NAME = "Button";

export type AvatarProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt?: string;
};

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ src, alt, ...prop }, ref) => {
    return (
      <picture ref={ref}>
        <img {...prop} src={src} alt={alt} />
      </picture>
    );
  },
);

Avatar.displayName = AVATAR_NAME;

export default Avatar;
