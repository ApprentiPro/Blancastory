import type { App, Ref, ComponentPublicInstance } from 'vue';
import {NotifyType} from "@/lib/constants/Controls/notification.ts";
import {Nullable} from "@/types";



export type NotifyId = string | number;

export interface NotifyOptions {
    id?: NotifyId;
    type?: NotifyType;
    icon?: Nullable<string>;
    duration?: Nullable<number>;
    onClick?: (callback: () => void) => void;
    onClose?: () => void;
}

export type NotifyContent = string;

export interface NotifyItem extends NotifyOptions {
    id: NotifyId;
    content: NotifyContent;
}

export interface Notify {
    (content: NotifyContent, options?: NotifyOptions): NotifyId;

    close(id: NotifyId): void;
    closeAll(): void;

    success: (
        content: NotifyContent,
        options?: NotifyOptions & { type?: NotifyType.SUCCESS }
    ) => NotifyId;

    info: (
        content: NotifyContent,
        options?: NotifyOptions & { type?: NotifyType.INFO }
    ) => NotifyId;

    error: (
        content: NotifyContent,
        options?: NotifyOptions & { type?: NotifyType.ERROR }
    ) => NotifyId;

    warning: (
        content: NotifyContent,
        options?: NotifyOptions & { type?: NotifyType.WARNING }
    ) => NotifyId;
}

export interface NotificationOptions {
    list: Ref<NotifyItem[]>;
    onMounted?: (
        containerComponent: ComponentPublicInstance,
        containerApp: App<Element>
    ) => void;
}
