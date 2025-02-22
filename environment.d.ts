declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string; // this is the line you want
      NODE_ENV: 'development' | 'production';
      YANDEX_API_KEY: string;
      YANDEX_FOLDER_ID: string;
      PORT?: string;
      PWD: string;
    }
  }
}
