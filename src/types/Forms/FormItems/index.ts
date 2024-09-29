import type {
    RuleItem,
    ValidateError,
    ValidateFieldsError
} from 'async-validator';
import type { Ref, ComputedRef } from 'vue';
import {ClassValue, Enumerable, Nullable} from "@/types";


export interface FilteredRuleItem extends RuleItem {
    trigger?: Nullable<string>;
}

export type FormItemPropFor = Nullable<string>;
export type FormItemPropProp = Nullable<string>;
export type FormItemPropLabel = Nullable<string>;
export type FormItemPropSublabel = Nullable<string>;
export type FormItemPropError = Nullable<string>;
export type FormItemPropRules = Nullable<Enumerable<FilteredRuleItem>>;
export type FormItemPropShowErrorMessage = Nullable<boolean>;
export type FormItemPropLabelSize = Nullable<'regular' | 'small'>;

export interface QFormItemProps {
    for: FormItemPropFor;
    prop: FormItemPropProp;
    label: FormItemPropLabel;
    sublabel: FormItemPropSublabel;
    error: FormItemPropError;
    rules: FormItemPropRules;
    showErrorMessage: FormItemPropShowErrorMessage;
    labelSize: FormItemPropLabelSize;
}

export interface FormItemContext {
    validateField: (trigger?: Nullable<string>) => Nullable<
        Promise<{
            errors?: Nullable<ValidateError[]>;
            fields?: ValidateFieldsError;
        }>
    >;
    clearValidate: () => void;
    errorMessage: Ref<Nullable<string>>;
    getFilteredRules: (trigger: Nullable<string>) => Nullable<FilteredRuleItem[]>;
    initialValue: unknown;
    isErrorSlotShown: ComputedRef<boolean>;
    isHeaderShown: ComputedRef<boolean>;
    isRequired: ComputedRef<boolean>;
    labelFor: ComputedRef<string>;
    resetField: () => void;
    rootClasses: ComputedRef<ClassValue>;
    rules: Nullable<FilteredRuleItem | FilteredRuleItem[]>;
    showErrorMessage: Nullable<boolean>;
    for: Nullable<string>;
    prop: Nullable<string>;
    label: Nullable<string>;
    sublabel: Nullable<string>;
}

export interface FormItemProvider {
    validateField: (trigger?: Nullable<string>) => Nullable<
        Promise<{
            errors?: Nullable<ValidateError[]>;
            fields?: ValidateFieldsError;
        }>
    >;
    resetField: () => void;
}

export interface FormItemInstance {
    errorMessage: Ref<Nullable<string>>;
    isErrorSlotShown: ComputedRef<boolean>;
    labelFor: ComputedRef<string>;
    isRequired: ComputedRef<boolean>;
    isHeaderShown: ComputedRef<boolean>;
    rootClasses: ComputedRef<ClassValue>;
    getFilteredRules: (trigger: Nullable<string>) => Nullable<FilteredRuleItem[]>;
    validateField: (trigger?: Nullable<string>) => Nullable<
        Promise<{
            errors?: Nullable<ValidateError[]>;
            fields?: ValidateFieldsError;
        }>
    >;
    resetField: () => void;
    labelClass: ComputedRef<ClassValue>;
}
