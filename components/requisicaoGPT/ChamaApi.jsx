import { useState } from "react";

async function useApi() {

    const [loading, setLoading] = useState(false);
    const key = 'Vy7hL0hV5uqRoErdcc42T3BlbkFJENbVGw4sqqXSeg3UMfL9';
    const prompt = 'Quais sao os maiores paises do mundo';
        setLoading(true);
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${key}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ],
                    temperature: 0.20,
                    max_tokens: 200,
                    top_p: 1,
                })
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

export default useApi;
