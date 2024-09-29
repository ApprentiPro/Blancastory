<template>
  <button
      class="custom-button"
      :disabled="isDisabled || isLoading"
      :autofocus="Boolean(autofocus)"
      :type="nativeType ?? 'button'"
      :class="classList"
  >
    <span
        v-if="isLoading"
        class="custom-button__spinner-icon q-icon-reverse"
    />
    <span
        v-else-if="icon"
        :class="icon"
    />
    <span
        v-if="$slots.default"
        class="custom-button__inner"
    >
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import type { PropType } from 'vue';


import {validateArray} from "@/lib/helpers";
import {
  ButtonInstance,
  ButtonPropAutofocus, ButtonPropCircle,
  ButtonPropDisabled,
  ButtonPropFullWidth,
  ButtonPropIcon, ButtonPropLoading, ButtonPropNativeType, ButtonProps,
  ButtonPropSize,
  ButtonPropTheme,
  ButtonPropType,
  ClassValue,
  Nullable
} from "@/types";

const defaultPropTypeValue = 'default';
const defaultPropThemeValue = 'primary';
const defaultPropSizeValue = 'regular';

export default defineComponent({
  name: 'Button',

  componentName: 'Button',

  props: {
    type: {
      type: String as PropType<ButtonPropType>,
      default: defaultPropTypeValue,
      validator: validateArray<ButtonPropType>(['default', 'icon'])
    },

    theme: {
      type: String as PropType<ButtonPropTheme>,
      default: defaultPropThemeValue,
      validator: validateArray<ButtonPropTheme>([
        'primary',
        'secondary',
        'link'
      ])
    },

    size: {
      type: String as PropType<ButtonPropSize>,
      default: defaultPropSizeValue,
      validator: validateArray<ButtonPropSize>(['small', 'regular'])
    },

    /**
     * any q-icon
     */
    icon: {
      type: String as PropType<ButtonPropIcon>,
      default: null
    },

    /**
     * as native button type
     */
    nativeType: {
      type: String as PropType<ButtonPropNativeType>,
      default: 'button',
      validator: validateArray<ButtonPropNativeType>([
        'button',
        'submit',
        'reset'
      ])
    },

    /**
     * whether to show loader inside button
     */
    loading: {
      type: Boolean as PropType<ButtonPropLoading>,
      default: false
    },

    /**
     * whether the button is disabled
     */
    disabled: {
      type: Boolean as PropType<ButtonPropDisabled>,
      default: false
    },

    /**
     * as native button autofocus
     */
    autofocus: {
      type: Boolean as PropType<ButtonPropAutofocus>,
      default: false
    },

    /**
     * change button's shape to circle (use with type icon)
     */
    circle: {
      type: Boolean as PropType<ButtonPropCircle>,
      default: false
    },

    /**
     * sets button width to 100%
     */
    fullWidth: {
      type: Boolean as PropType<ButtonPropFullWidth>,
      default: false
    }
  },

  setup(props: ButtonProps): ButtonInstance {
    const qForm = inject<Nullable<FormProvider>>('qForm', null);

    const isDisabled = computed<boolean>(
        () => props.disabled || (qForm?.disabled.value ?? false)
    );

    const isLoading = computed<boolean>(() => Boolean(props.loading));

    const isIconType = computed<boolean>(() => props.type === 'icon');

    const isCircle = computed<boolean>(
        () => Boolean(props.circle) && isIconType.value
    );

    const classList = computed<ClassValue[]>(() => {
      const classes: ClassValue[] = Object.entries({
        theme: props.theme ?? defaultPropThemeValue,
        type: props.type ?? defaultPropTypeValue,
        size: props.size ?? defaultPropSizeValue
      })
          .filter(([, value]) => Boolean(value))
          .map(([key, value]) => `custom-button_${key}_${value}`);

      classes.push({
        'custom-button_disabled': isDisabled.value && !isLoading.value,
        'custom-button_loading': isLoading.value,
        'custom-button_circle': isCircle.value,
        'custom-button_full-width': Boolean(props.fullWidth) && !isCircle.value
      });

      return classes;
    });

    return {
      isDisabled,
      isLoading,
      classList
    };
  }
});
</script>
