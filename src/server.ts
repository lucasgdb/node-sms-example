import twilio from "twilio";
import inquirer from "inquirer";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

async function main() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "body",
      message: "Digite sua mensagem de texto:",
    },
  ]);

  const message = await client.messages.create({
    body: answers.body,
    from: process.env.PHONE_NUMBER_FROM,
    to: process.env.PHONE_NUMBER_TO,
  });

  console.log("Mensagem enviada com sucesso! sid:", message.sid);
}

main();
