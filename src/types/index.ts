import type { App } from 'vue';

export type SFCWithInstall<T> = T & {
  install: (app: App) => void;
}

export interface RouteMetaLayout {
  layout?: string;
}

declare module 'vue-router' {
  interface RouteMeta extends RouteMetaLayout {}
}