declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    SECRET_TOKEN: string;
    EXPIRESIN_TOKEN: string;
    KEY_TOKEN: string;
  }
}
