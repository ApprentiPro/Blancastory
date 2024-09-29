<template>
  <div
      class="q-notification-toast"
      :class="notificationClasses"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
  >
    <div
        class="q-notification-toast__icon"
        :class="iconClass"
    />

    <div class="q-notification-toast__content">
      {{ content }}
    </div>

    <button
        type="button"
        class="q-notification-toast__close q-icon-close"
        @click="close"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onUnmounted,
  PropType
} from 'vue';
import {validateArray} from "@/lib/helpers";
import {
  NotificationToastInstance,
  NotificationToastPropContent, NotificationToastPropOnClose, NotificationToastProps,
  NotificationToastPropType
} from "@/types/Controls/Notification/toast.ts";
import {DEFAULT_DURATION, NotifyType} from "@/lib/constants/Controls/notification.ts";
import {Nullable} from "@/types";



export default defineComponent({
  name: 'QNotificationToast',
  componentName: 'QNotificationToast',

  props: {
    uniqId: {
      type: String,
      required: true
    },
    /**
     * description text
     */
    content: {
      type: String as PropType<NotificationToastPropContent>,
      required: true
    },
    /**
     * notification type
     */
    type: {
      type: String as PropType<NotificationToastPropType>,
      default: null,
      validator: validateArray(Object.values(NotifyType))
    },
    /**
     * icon class
     */
    icon: {
      type: String,
      default: null
    },
    /**
     * duration before close
     */
    duration: {
      type: Number,
      default: DEFAULT_DURATION
    },
    /**
     * callback function when closed
     */
    onClose: {
      type: Function as unknown as PropType<NotificationToastPropOnClose>,
      default: null
    }
  },

  emits: [
    /**
     * triggers when notification removes
     */
    'remove'
  ],

  setup(props: NotificationToastProps, ctx): NotificationToastInstance {
    const notificationClasses = computed<Record<string, boolean>>(() => ({
      [`q-notification-toast_type_${props.type}`]: Boolean(props.type)
    }));

    const iconClass = computed<string>(() => {
      if (props.icon) return props.icon;

      switch (props.type) {
        case 'success':
          return 'q-icon-check';

        case 'warning':
        case 'error':
          return 'q-icon-attention-mark';

        case 'info':
        default:
          return 'q-icon-info';
      }
    });

    let timer: Nullable<ReturnType<typeof setTimeout>> = null;

    const clearTimer = (): void => {
      if (timer) clearTimeout(timer);
    };

    const close = (): void => {
      if (typeof props.onClose === 'function') props.onClose(props.uniqId);

      ctx.emit('remove', props.uniqId);
    };

    const startTimer = (): void => {
      if (props.duration !== null && props.duration > 0) {
        timer = setTimeout(close, props.duration);
      }
    };

    onMounted(() => {
      startTimer();
    });

    onUnmounted(() => {
      clearTimer();
    });

    return {
      notificationClasses,
      iconClass,
      clearTimer,
      startTimer,
      close
    };
  }
});
</script>
