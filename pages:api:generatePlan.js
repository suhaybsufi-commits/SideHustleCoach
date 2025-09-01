import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const response = await openai.createChatCompletion({
      model: process.env.NEXT_PUBLIC_OPENAI_MODEL,
      messages: [
        { role: "system", content: "You are an AI side hustle coach." },
        { role: "user", content: "Generate a side hustle plan for a new user." }
      ],
    });

    const plan = response.data.choices[0].message.content;
    res.status(200).json({ plan });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
