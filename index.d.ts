// INTERFACES

interface SelectItem {
    label: string;
    value: any;
}

interface LevelUpRandomize {
    direction?: boolean;
    position?: boolean;
    speed?: boolean;
}

interface HitProps {
    style?: string;
    class?: string;
    randomize?: LevelUpRandomize;
    duration?: number;
    color?: string;
    icon?: string;
    size?: number;
    text: string;
}

interface ButtonMultiSelectProps {
    style?: string;
    class?: string;
    selected?: any[];
    items?: any[];
    cols?: number;
}

interface ButtonSelectItemProps {
    style?: string;
    class?: string;
    selected?: any;
    label?: string;
    items?: SelectItem[];
    cols?: number;
    icon?: string;
}

interface ButtonSelectProps {
    style?: string;
    class?: string;
    selected?: any;
    label?: string;
    items?: any[];
    cols?: number;
    icon?: string;
}

interface ListItemProps {
    style?: string;
    class?: string;
    action?: function;
}

interface LevelUpProps {
    style?: string;
    class?: string;
    randomize?: LevelUpRandomize;
    duration?: number;
    text?: function;
    color?: string;
    icon?: string;
    size?: number;
}

interface SwitchProps {
    style?: string;
    class?: string;
    disabled?: boolean;
    checked?: boolean;
    label?: string;
    action?: function;
}

interface ButtonProps {
    style?: string;
    class?: string;
    disabled?: function;
    outline?: boolean;
    loading?: boolean;
    action?: function;
    special?: boolean;
    color?: string;
    icon?: string;
    fit?: boolean;
}

interface RangeProps {
    style?: string;
    class?: string;
    label?: string;
    value?: number;
    max?: number;
    min?: number;
}

interface ModalProps {
    style?: string;
    class?: string;
    padding?: number;
    close?: function;
    show?: boolean;
}

interface IconProps {
    style?: string;
    class?: string;
    group?: string;
    name?: string;
    size?: number;
}

interface FlexRowProps {
    style?: string;
    class?: string;
    gap?: number;
}

interface FlexColProps {
    style?: string;
    class?: string;
    gap?: number;
}

interface FlexProps {
    style?: string;
    class?: string;
    size?: number;
}

interface TextProps {
    style?: string;
    class?: string;
    size?: number;
    bold?: boolean;
}

interface CardProps {
    style?: string;
    class?: string;
}

interface CenterProps {
    style?: string;
    class?: string;
}

interface ExpandProps {
    style?: string;
    class?: string;
}

interface SpacerProps {
    style?: string;
    class?: string;
}

interface DividerProps {
    style?: string;
    class?: string;
}

interface TextAreaProps {
    style?: string;
    class?: string;
    placeholder?: string;
    label?: string;
    value?: string;
    rows?: string;
}

interface ListTileProps {
    style?: string;
    class?: string;
}

interface HighlightProps {
    style?: string;
    class?: string;
    title?: string;
    icon?: string;
    text?: string;
}

interface ContainerProps {
    style?: string;
    class?: string;
}

interface LinkProps {
    style?: string;
    class?: string;
}

interface InputProps {
    style?: string;
    class?: string;
    placeholder?: any;
    value?: any;
    feedback?: any;
    icon?: string;
}

interface CalendarProps {
    style?: string;
    class?: string;
    dayNames?: string;
    monthNames?: string;
    selectedDate?: Date;
}

// TOOLS

export function hit(target: HTMLElement, props: HitProps): void;

// COMPONENTS

import { SvelteComponentTyped } from 'svelte';

export declare class ButtonMultiSelect extends SvelteComponentTyped<ButtonMultiSelectProps, {}, {}> { $$prop_def: ButtonMultiSelectProps; }
export declare class ButtonSelectItem extends SvelteComponentTyped<ButtonSelectItemProps, {}, {}> { $$prop_def: ButtonSelectItemProps; }
export declare class ButtonSelect extends SvelteComponentTyped<ButtonSelectProps, {}, {}> { $$prop_def: ButtonSelectProps; }
export declare class Highlight extends SvelteComponentTyped<HighlightProps, {}, {}> { $$prop_def: HighlightProps; }
export declare class Container extends SvelteComponentTyped<ContainerProps, {}, {}> { $$prop_def: ContainerProps; }
export declare class TextArea extends SvelteComponentTyped<TextAreaProps, {}, {}> { $$prop_def: TextAreaProps; }
export declare class ListTile extends SvelteComponentTyped<ListTileProps, {}, {}> { $$prop_def: ListTileProps; }
export declare class ListItem extends SvelteComponentTyped<ListItemProps, {}, {}> { $$prop_def: ListItemProps; }
export declare class Calendar extends SvelteComponentTyped<CalendarProps, {}, {}> { $$prop_def: CalendarProps; }
export declare class LevelUp extends SvelteComponentTyped<LevelUpProps, {}, {}> { $$prop_def: LevelUpProps; }
export declare class Divider extends SvelteComponentTyped<DividerProps, {}, {}> { $$prop_def: DividerProps; }
export declare class FlexRow extends SvelteComponentTyped<FlexRowProps, {}, {}> { $$prop_def: FlexRowProps; }
export declare class FlexCol extends SvelteComponentTyped<FlexColProps, {}, {}> { $$prop_def: FlexColProps; }
export declare class Spacer extends SvelteComponentTyped<SpacerProps, {}, {}> { $$prop_def: SpacerProps; }
export declare class Expand extends SvelteComponentTyped<ExpandProps, {}, {}> { $$prop_def: ExpandProps; }
export declare class Switch extends SvelteComponentTyped<SwitchProps, {}, {}> { $$prop_def: SwitchProps; }
export declare class Button extends SvelteComponentTyped<ButtonProps, {}, {}> { $$prop_def: ButtonProps; }
export declare class Center extends SvelteComponentTyped<CenterProps, {}, {}> { $$prop_def: CenterProps; }
export declare class Input extends SvelteComponentTyped<InputProps, {}, {}> { $$prop_def: InputProps; }
export declare class Range extends SvelteComponentTyped<RangeProps, {}, {}> { $$prop_def: RangeProps; }
export declare class Modal extends SvelteComponentTyped<ModalProps, {}, {}> { $$prop_def: ModalProps; }
export declare class Card extends SvelteComponentTyped<CardProps, {}, {}> { $$prop_def: CardProps; }
export declare class Icon extends SvelteComponentTyped<IconProps, {}, {}> { $$prop_def: IconProps; }
export declare class Text extends SvelteComponentTyped<TextProps, {}, {}> { $$prop_def: TextProps; }
export declare class Flex extends SvelteComponentTyped<FlexProps, {}, {}> { $$prop_def: FlexProps; }
export declare class Link extends SvelteComponentTyped<LinkProps, {}, {}> { $$prop_def: LinkProps; }
