import OpenAI from "openai";
const api_key = "sk - iB1gjwN7NqBIa8m048KzT3BlbkFJGP3VmatoeNiTrrW5Vnr8";

const openai = new OpenAI({
  apiKey: api_key , // This is the default and can be omitted
});

async function main() {
  // const chatCompletion = await openai.chat.completions.create({
  //   messages: [{ role: "user", content: "Say this is a test" }],
  //   model: "gpt-3.5-turbo",
  // });
}

main();