interface LevelUpRandomize {
    direction?: boolean;
    position?: boolean;
    speed?: boolean;
}

interface HitProps {
    randomize?: LevelUpRandomize;
    duration?: number;
    color?: string;
    icon?: string;
    size?: number;
    text: string;
}

interface ButtonMultiSelectProps {
    selected?: any[];
    items?: any[];
    cols?: number;
}

interface ButtonSelectProps {
    selected?: any;
    label?: string;
    items?: any[];
    cols?: number;
    icon?: string;
}

interface ListItemProps {
    action?: function;
}

interface LevelUpProps {
    randomize?: LevelUpRandomize;
    duration?: number;
    text?: function;
    color?: string;
    icon?: string;
    size?: number;
}

interface SwitchProps {
    disabled?: boolean;
    checked?: boolean;
    label?: string;
}

interface ButtonProps {
    disabled?: function;
    outline?: boolean;
    loading?: boolean;
    action?: function;
    accent?: boolean;
    color?: string;
    icon?: string;
    fit?: boolean;
}

interface RangeProps {
    label?: string;
    value?: number;
    max?: number;
    min?: number;
}

interface IconProps {
    group?: string;
    name?: string;
    size?: number;
}

interface FlexRowProps {
    gap?: number;
}

interface FlexColProps {
    gap?: number;
}

interface FlexProps {
    size?: number;
}

interface TextProps { }
interface CardProps { }
interface CenterProps { }
interface ExpandProps { }
interface SpacerProps { }
interface DividerProps { }
interface TextAreaProps { }
interface ListTileProps { }
interface HighlightProps { }
interface ContainerProps { }

// TOOLS
export function hit(target: HTMLElement, props: HitProps): void;

// COMPONENTS
import { SvelteComponentTyped } from 'svelte';

export declare class ButtonMultiSelect extends SvelteComponentTyped<ButtonMultiSelectProps, {}, {}> { $$prop_def: ButtonMultiSelectProps; }
export declare class ButtonSelect extends SvelteComponentTyped<ButtonSelectProps, {}, {}> { $$prop_def: ButtonSelectProps; }
export declare class Highlight extends SvelteComponentTyped<HighlightProps, {}, {}> { $$prop_def: HighlightProps; }
export declare class Container extends SvelteComponentTyped<ContainerProps, {}, {}> { $$prop_def: ContainerProps; }
export declare class TextArea extends SvelteComponentTyped<TextAreaProps, {}, {}> { $$prop_def: TextAreaProps; }
export declare class ListTile extends SvelteComponentTyped<ListTileProps, {}, {}> { $$prop_def: ListTileProps; }
export declare class ListItem extends SvelteComponentTyped<ListItemProps, {}, {}> { $$prop_def: ListItemProps; }
export declare class LevelUp extends SvelteComponentTyped<LevelUpProps, {}, {}> { $$prop_def: LevelUpProps; }
export declare class Divider extends SvelteComponentTyped<DividerProps, {}, {}> { $$prop_def: DividerProps; }
export declare class FlexRow extends SvelteComponentTyped<FlexRowProps, {}, {}> { $$prop_def: FlexRowProps; }
export declare class FlexCol extends SvelteComponentTyped<FlexColProps, {}, {}> { $$prop_def: FlexColProps; }
export declare class Spacer extends SvelteComponentTyped<SpacerProps, {}, {}> { $$prop_def: SpacerProps; }
export declare class Expand extends SvelteComponentTyped<ExpandProps, {}, {}> { $$prop_def: ExpandProps; }
export declare class Switch extends SvelteComponentTyped<SwitchProps, {}, {}> { $$prop_def: SwitchProps; }
export declare class Button extends SvelteComponentTyped<ButtonProps, {}, {}> { $$prop_def: ButtonProps; }
export declare class Center extends SvelteComponentTyped<CenterProps, {}, {}> { $$prop_def: CenterProps; }
export declare class Range extends SvelteComponentTyped<RangeProps, {}, {}> { $$prop_def: RangeProps; }
export declare class Card extends SvelteComponentTyped<CardProps, {}, {}> { $$prop_def: CardProps; }
export declare class Icon extends SvelteComponentTyped<IconProps, {}, {}> { $$prop_def: IconProps; }
export declare class Text extends SvelteComponentTyped<TextProps, {}, {}> { $$prop_def: TextProps; }
export declare class Flex extends SvelteComponentTyped<FlexProps, {}, {}> { $$prop_def: FlexProps; }
