import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import cs from "classnames";
import "./index.scss";

const SLIDER_NAME = "Slider";

interface SliderStyleProps {
    $width?: number;
    $height?: number;
    $radius?: number;
}

const SliderStyle = styled.input<SliderStyleProps>``;

export type SliderProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    /**
* min value in ranger
*/
    min?: number;
    /**
* max value in ranger
*/
    max?: number;
    /**
* value ranger in now
*/
    value?: number;
};
const Slider = forwardRef<HTMLInputElement, SliderProps>(
    ({value, min, max, ...props }, ref) => {
        return (
            <SliderStyle className={cs("slider")} type="range" min={min} max={max} value={value} />
        );
    },
);

Slider.displayName = SLIDER_NAME;

export default Slider;
