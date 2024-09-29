import type { ValidateFieldsError } from 'async-validator';
import type { Ref } from 'vue';

import {Nullable} from "@/types";
import {FormItemContext, FormItemPropRules} from "@/types/Forms/FormItems";

export type QFormPropModel = Nullable<Record<string, unknown>>;
export type QFormPropRules = Nullable<Record<string, FormItemPropRules>>;

export interface QFormProps {
    model: QFormPropModel;
    rules: QFormPropRules;
    disabled: Nullable<boolean>;
    hideRequiredAsterisk: Nullable<boolean>;
    showErrorMessage: Nullable<boolean>;
    validateOnRuleChange: Nullable<boolean>;
}

export interface ValidateFnResult {
    isValid: boolean;
    invalidFields: ValidateFieldsError;
}

export interface QFormProvider {
    disabled: Ref<Nullable<boolean>>;
    model: Ref<QFormPropModel>;
    rules: Ref<QFormPropRules>;
    hideRequiredAsterisk: Ref<Nullable<boolean>>;
    showErrorMessage: Ref<Nullable<boolean>>;
    fields: Ref<FormItemContext[]>;
    validate: (
        passedProps?: string[] | string
    ) => Promise<Nullable<ValidateFnResult>>;
    resetFields: (passedProps?: string[] | string) => void;
    clearValidate: (passedProps?: string[] | string) => void;
}

export interface QFormInstance {
    validate: (
        passedProps?: string | string[]
    ) => Promise<Nullable<ValidateFnResult>>;
    resetFields: (passedProps?: string | string[]) => void;
    clearValidate: (passedProps?: string | string[]) => void;
}
