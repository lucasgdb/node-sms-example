import { getBodyContent } from "./utils/getBodyContent";
import { sendMessage } from "./utils/sendMessage";

async function main() {
  const body = await getBodyContent();

  const message = await sendMessage({ body });

  console.log("Mensagem enviada com sucesso! sid:", message.sid);
}

main();
