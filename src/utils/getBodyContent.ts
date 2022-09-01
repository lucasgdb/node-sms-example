import inquirer from "inquirer";

export async function getBodyContent() {
  const answers = await inquirer.prompt<{ body: string }>([
    {
      type: "input",
      name: "body",
      message: "Digite sua mensagem de texto:",
    },
  ]);

  return answers.body;
}
