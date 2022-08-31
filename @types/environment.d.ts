declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TWILIO_ACCOUNT_SID: string;
      TWILIO_AUTH_TOKEN: string;
      PHONE_NUMBER_TO: string;
      PHONE_NUMBER_FROM: string;
    }
  }
}

export {};
