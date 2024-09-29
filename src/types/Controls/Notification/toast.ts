import type { ComputedRef } from 'vue';
import {Nullable} from "@/types";
import {NotifyType} from "@/lib/constants/Controls/notification.ts";
import {NotifyContent} from "@/types/Controls/Notification/notification.ts";



export type NotificationToastPropType = NotifyType;
export type NotificationToastPropOnClose = Nullable<(id: string) => void>;
export type NotificationToastPropContent = NotifyContent;

export interface NotificationToastProps {
    uniqId: string;
    content: NotificationToastPropContent;
    type: NotificationToastPropType;
    icon: Nullable<string>;
    duration: Nullable<number>;
    onClose: NotificationToastPropOnClose;
}

export interface NotificationToastInstance {
    notificationClasses: ComputedRef<Record<string, boolean>>;
    iconClass: ComputedRef<string>;
    clearTimer: () => void;
    startTimer: () => void;
    close: () => void;
}
