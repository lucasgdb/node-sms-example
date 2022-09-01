import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

type sendMessageProps = {
  body: string;
};

export async function sendMessage({ body }: sendMessageProps) {
  const message = await client.messages.create({
    body,
    from: process.env.PHONE_NUMBER_FROM,
    to: process.env.PHONE_NUMBER_TO,
  });

  return message;
}
