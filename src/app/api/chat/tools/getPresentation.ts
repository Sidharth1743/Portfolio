import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Sidharth. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Sidharthan, a 20-year-old freelancer specializing in AI at Coimbatore. Currently working with SpineDAO. I'm passionate about AI, tech, and SaaS tech.",
    };
  },
});
