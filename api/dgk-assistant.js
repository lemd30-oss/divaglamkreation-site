export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = request.body || {};

    if (!message || typeof message !== "string") {
      return response.status(400).json({
        error: "Please enter a message.",
      });
    }

    const openAIResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        instructions:
          "You are the DivaglamKreation creative assistant. Respond in a calm, warm, faith-rooted, clear, and practical voice. Help with journals, stickers, reset tools, Pinterest content, Etsy listings, and gentle creative planning.",
        input: message,
        max_output_tokens: 500,
      }),
    });

    const data = await openAIResponse.json();

    if (!openAIResponse.ok) {
      console.error("OpenAI error:", data);

      return response.status(openAIResponse.status).json({
        error: "The AI assistant could not respond.",
      });
    }

    return response.status(200).json({
      reply: data.output_text || "No response was returned.",
    });
  } catch (error) {
    console.error("Server error:", error);

    return response.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}
