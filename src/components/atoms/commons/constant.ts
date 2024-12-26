const FONT_SIZE = {
    size_1: '0.6875em',
    size_2: '0.75em',
    size_3: '0.875em',
    size_4: '1em',
    size_5: '1.375em',
} as const;

type IFontSizeVar = typeof FONT_SIZE;

type IFontSize = keyof typeof FONT_SIZE;

const COLOR_VAR = {
    white: 'rgb(255 255 255)',
    black: 'rgb(0 0 0)',
    gray: 'rgb(77 77 77)',
    orange: 'rgb(255 149 0)',
    blue: 'rgb(33 64 154)',
    primary: 'rgb(33 64 154)'
} as const;

type IColorVar = typeof COLOR_VAR;

type IColor = keyof typeof COLOR_VAR;

const BOLD_VAR = {
    100: "100",
    200: "200",
    300: "300",
    400: "400",
    500: "500",
    600: "600",
    700: "700",
    800: "800",
    900: "900",
} as const;

type IBoldVar = typeof BOLD_VAR;

type IBold = keyof typeof BOLD_VAR;

const FONT_STYLE_VAR = {
    normal: "normal",
    italic: "italic",
    oblique: "oblique",
    initial: "initial",
    inherit: "inherit"
} as const;

type IFontStyleVar = typeof FONT_STYLE_VAR;

type IFontStyle = keyof typeof FONT_STYLE_VAR;

const BORDER_STYLE_VAR = {
    dashed: "dashed",
    dotted: "dotted",
    solid: "solid",
} as const;

type IBorderStyleVar = typeof BORDER_STYLE_VAR;

type IBorderStyle = keyof typeof BORDER_STYLE_VAR;


export {
    FONT_SIZE,
    COLOR_VAR,
    BOLD_VAR,
    FONT_STYLE_VAR,
    BORDER_STYLE_VAR
}

export type {
    IFontSizeVar,
    IFontSize,
    IColorVar,
    IColor,
    IBoldVar,
    IBold,
    IFontStyleVar,
    IFontStyle,
    IBorderStyleVar,
    IBorderStyle
}
