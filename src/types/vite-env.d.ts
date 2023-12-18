/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_KEY: string;
  readonly VITE_ASSETS_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
