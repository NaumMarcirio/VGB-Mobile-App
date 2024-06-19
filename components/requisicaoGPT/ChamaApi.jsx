export const fetchChatGPTResponse = async (key, prompt, tokens) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.8,
        max_tokens: tokens,
        top_p: 1,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
