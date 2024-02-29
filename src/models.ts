export interface SelectItem {
    label: string;
    value: any;
}

export interface LevelUpRandomize {
    direction?: boolean;
    position?: boolean;
    speed?: boolean;
}

export interface HitProps {
    style?: string;
    class?: string;
    randomize?: LevelUpRandomize;
    duration?: number;
    color?: string;
    icon?: string;
    size?: number;
    text: string;
}

export interface ButtonMultiSelectProps {
    style?: string;
    class?: string;
    selected?: any[];
    items?: any[];
    cols?: number;
}

export interface ButtonSelectItemProps {
    style?: string;
    class?: string;
    selected?: any;
    label?: string;
    items?: SelectItem[];
    cols?: number;
    icon?: string;
}

export interface ButtonSelectProps {
    style?: string;
    class?: string;
    selected?: any;
    label?: string;
    items?: any[];
    cols?: number;
    icon?: string;
}

export interface ListItemProps {
    style?: string;
    class?: string;
    action?: Function;
}

export interface LevelUpProps {
    style?: string;
    class?: string;
    randomize?: LevelUpRandomize;
    duration?: number;
    text?: Function;
    color?: string;
    icon?: string;
    size?: number;
}

export interface SwitchProps {
    style?: string;
    class?: string;
    disabled?: boolean;
    checked?: boolean;
    label?: string;
    action?: Function;
}

export interface ButtonProps {
    style?: string;
    class?: string;
    disabled?: Function;
    outline?: boolean;
    loading?: boolean;
    action?: Function;
    special?: boolean;
    color?: string;
    icon?: string;
    fit?: boolean;
}

export interface RangeProps {
    style?: string;
    class?: string;
    label?: string;
    value?: number;
    max?: number;
    min?: number;
}

export interface ModalProps {
    style?: string;
    class?: string;
    padding?: number;
    close?: Function;
    show?: boolean;
}

export interface IconProps {
    style?: string;
    class?: string;
    group?: string;
    name?: string;
    size?: number;
}

export interface FlexRowProps {
    style?: string;
    class?: string;
    gap?: number;
}

export interface FlexColProps {
    style?: string;
    class?: string;
    gap?: number;
}

export interface FlexProps {
    style?: string;
    class?: string;
    size?: number;
}

export interface TextProps {
    style?: string;
    class?: string;
    size?: number;
    bold?: boolean;
}

export interface CardProps {
    style?: string;
    class?: string;
}

export interface CenterProps {
    style?: string;
    class?: string;
}

export interface ExpandProps {
    style?: string;
    class?: string;
}

export interface SpacerProps {
    style?: string;
    class?: string;
}

export interface DividerProps {
    style?: string;
    class?: string;
}

export interface TextAreaProps {
    style?: string;
    class?: string;
    placeholder?: string;
    label?: string;
    value?: string;
    rows?: string;
}

export interface ListTileProps {
    style?: string;
    class?: string;
}

export interface HighlightProps {
    style?: string;
    class?: string;
    title?: string;
    icon?: string;
    text?: string;
}

export interface ContainerProps {
    style?: string;
    class?: string;
}

export interface LinkProps {
    style?: string;
    class?: string;
}

export interface InputProps {
    style?: string;
    class?: string;
    placeholder?: any;
    value?: any;
    feedback?: any;
    icon?: string;
}

export interface CalendarProps {
    style?: string;
    class?: string;
    dayNames?: string;
    monthNames?: string;
    selectedDate?: Date;
}