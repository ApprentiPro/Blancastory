import type { ComputedRef } from 'vue';
import {ClassValue, Nullable} from "@/types";


type NativeType = 'button' | 'submit' | 'reset';

export type ButtonPropType = Nullable<'default' | 'icon'>;
export type ButtonPropTheme = Nullable<'primary' | 'secondary' | 'link'>;
export type ButtonPropSize = Nullable<'small' | 'regular'>;
export type ButtonPropIcon = Nullable<ClassValue>;
export type ButtonPropNativeType = Nullable<NativeType>;
export type ButtonPropLoading = Nullable<boolean>;
export type ButtonPropDisabled = Nullable<boolean>;
export type ButtonPropAutofocus = Nullable<boolean>;
export type ButtonPropCircle = Nullable<boolean>;
export type ButtonPropFullWidth = Nullable<boolean>;

export interface ButtonProps {
    type: ButtonPropType;
    theme: ButtonPropTheme;
    size: ButtonPropSize;
    icon: ButtonPropIcon;
    nativeType: ButtonPropNativeType;
    loading: ButtonPropLoading;
    disabled: ButtonPropDisabled;
    autofocus: ButtonPropAutofocus;
    circle: ButtonPropCircle;
    fullWidth: ButtonPropFullWidth;
}

export interface ButtonInstance {
    isDisabled: ComputedRef<boolean>;
    isLoading: ComputedRef<boolean>;
    classList: ComputedRef<ClassValue[]>;
}
