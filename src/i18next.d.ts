import Resources from './types/resources';

declare module 'i18next' {
    interface CustomTypeOptions {
    resources: Resources
  }
}